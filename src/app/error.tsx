"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="font-display text-3xl text-charcoal">Something went wrong</p>
      <p className="mt-3 max-w-sm font-body text-sm text-charcoal-muted">
        The page hit an error — often fixed by refreshing or restarting the dev
        server.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 min-h-touch rounded-full bg-ocean px-8 font-heading text-xs uppercase tracking-wide text-cream"
      >
        Try again
      </button>
    </div>
  );
}
