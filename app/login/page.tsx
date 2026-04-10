"use client";

import { createClient } from "@/lib/supabase/client";
import { useState, Suspense } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

// ── plan display names ────────────────────────────────────────────────────────
const PLAN_LABELS = {
  starter: "Starter",
  pro:     "Professional",
  agency:  "Enterprise",
};

// ── inner component (needs useSearchParams inside Suspense) ──────────────────
function LoginContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]         = useState<string | null>(null);
  const searchParams              = useSearchParams();

  const paid      = searchParams.get("paid") === "true";
  const plan      = searchParams.get("plan");
  const authError = searchParams.get("error");

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        // After Google redirects back, the /auth/callback route on THIS website
        // exchanges the code and forwards the user to the dashboard.
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
    }
    // On success: browser follows Google redirect — no further action needed here
  };

  return (
    // Background matches src/app/layout.jsx  bg-[#A5C9E8]
    <div className="min-h-screen flex items-center justify-center bg-[#A5C9E8] px-4 py-12">
      <div className="w-full max-w-md">

        {/* ── Card ── */}
        <div className="bg-white rounded-2xl shadow-xl px-8 py-10">

          {/* Brand */}
          <div className="text-center mb-8">
            <p className="text-3xl font-extrabold text-[#1a1a2e] tracking-tight">
              FlowEdit
            </p>
            <p className="text-sm text-[#1a1a2e]/60 mt-2">
              Sign in to access your dashboard
            </p>
          </div>

          {/* ── Payment success banner ── */}
          {paid && (
            <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-green-700 text-sm">
                  Payment successful!
                  {plan && PLAN_LABELS[plan as keyof typeof PLAN_LABELS]
                    ? ` Welcome to the ${PLAN_LABELS[plan as keyof typeof PLAN_LABELS]} plan.`
                    : ""}
                </p>
                <p className="text-green-600 text-xs mt-1 leading-relaxed">
                  Sign in with Google to activate your account. Your subscription is ready.
                </p>
              </div>
            </div>
          )}

          {/* ── OAuth error (from /auth/callback redirect) ── */}
          {authError && (
            <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <p className="text-red-600 text-sm">Sign-in failed. Please try again.</p>
            </div>
          )}

          {/* ── Inline Supabase error ── */}
          {error && (
            <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* ── Google button ── */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl border-2 border-[#1a1a2e]/15 hover:border-[#1a1a2e]/40 hover:bg-[#1a1a2e]/[0.03] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin text-[#1a1a2e]/50" />
            ) : (
              /* Google logo */
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            )}
            <span className="font-medium text-[#1a1a2e] text-sm">
              {isLoading ? "Redirecting to Google…" : "Continue with Google"}
            </span>
          </button>

          {/* Fine print */}
          <p className="text-center text-xs text-[#1a1a2e]/45 mt-6 leading-relaxed">
            By signing in you agree to our{" "}
            <a href="/terms" className="underline underline-offset-2 hover:text-[#1a1a2e]/70 transition-colors">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline underline-offset-2 hover:text-[#1a1a2e]/70 transition-colors">
              Privacy Policy
            </a>.
          </p>
        </div>

        {/* Subtext below card */}
        <p className="text-center text-xs text-[#1a1a2e]/50 mt-4">
          Already have an account?{" "}
          <a
            href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL || ""}/login`}
            className="font-medium underline underline-offset-2 hover:text-[#1a1a2e]/80 transition-colors"
          >
            Sign in from the dashboard
          </a>
        </p>
      </div>
    </div>
  );
}

// ── page export (Suspense required for useSearchParams in Next.js App Router) ─
export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#A5C9E8]">
        <Loader2 className="w-8 h-8 animate-spin text-white/70" />
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
}
