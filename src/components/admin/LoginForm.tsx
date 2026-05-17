"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
      router.refresh();
    } else {
      setError("Invalid username or password");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm space-y-5">
      <div>
        <label htmlFor="username" className="heading-caps block">
          Username
        </label>
        <input
          id="username"
          type="text"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-2 w-full min-h-touch rounded-xl border border-linen-dark bg-white px-4 font-body text-base"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="heading-caps block">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full min-h-touch rounded-xl border border-linen-dark bg-white px-4 font-body text-base"
          required
        />
      </div>
      {error ? (
        <p className="text-center text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={loading}
        className="w-full min-h-touch rounded-full bg-ocean font-heading text-sm uppercase tracking-wide text-linen-light disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
