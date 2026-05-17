import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";
import { SESSION_COOKIE } from "./constants";

const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getSessionSecret(): string {
  return process.env.SESSION_SECRET ?? "dev-only-secret-change-in-production";
}

function signToken(payload: string): string {
  return createHmac("sha256", getSessionSecret()).update(payload).digest("hex");
}

export function createSessionToken(username: string): string {
  const expires = Date.now() + SESSION_MAX_AGE * 1000;
  const payload = `${username}:${expires}`;
  const signature = signToken(payload);
  return Buffer.from(`${payload}:${signature}`).toString("base64url");
}

export function verifySessionToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf-8");
    const lastColon = decoded.lastIndexOf(":");
    if (lastColon === -1) return false;

    const signature = decoded.slice(lastColon + 1);
    const payload = decoded.slice(0, lastColon);
    const expected = signToken(payload);

    const sigBuf = Buffer.from(signature);
    const expBuf = Buffer.from(expected);
    if (sigBuf.length !== expBuf.length) return false;
    if (!timingSafeEqual(sigBuf, expBuf)) return false;

    const [, expiresStr] = payload.split(":");
    const expires = Number(expiresStr);
    if (!expires || Date.now() > expires) return false;

    return true;
  } catch {
    return false;
  }
}

export function validateCredentials(
  username: string,
  password: string,
): boolean {
  const expectedUser = process.env.ADMIN_USERNAME ?? "arca";
  const expectedPass = process.env.ADMIN_PASSWORD ?? "arca-admin";
  return username === expectedUser && password === expectedPass;
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return false;
  return verifySessionToken(token);
}

export function sessionCookieOptions(token: string) {
  return {
    name: SESSION_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: SESSION_MAX_AGE,
    path: "/",
  };
}

export function clearSessionCookieOptions() {
  return {
    name: SESSION_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: 0,
    path: "/",
  };
}
