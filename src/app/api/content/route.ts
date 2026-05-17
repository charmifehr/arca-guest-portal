import { NextResponse } from "next/server";

export const runtime = "nodejs";
import { getContent, saveContent } from "@/lib/content";
import { isAuthenticated } from "@/lib/auth";
import type { PortalContent } from "@/lib/types";

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as PortalContent;
    if (!body?.welcome || !body?.dining) {
      return NextResponse.json({ error: "Invalid content" }, { status: 400 });
    }
    await saveContent(body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
