// app/auth/callback/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${origin}/login?error=no-code`);
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Supabase exchange error:", error);
      return NextResponse.redirect(`${origin}/login?error=auth-failed`);
    }

    const dashboardUrl =
      process.env.NEXT_PUBLIC_DASHBOARD_URL ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      origin;

    return NextResponse.redirect(`${dashboardUrl}/dashboard`);
  } catch (err) {
    console.error("Callback handler error:", err);
    return NextResponse.redirect(`${origin}/login?error=callback-error`);
  }
}
