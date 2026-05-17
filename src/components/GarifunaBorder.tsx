export function GarifunaBorder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 py-3 ${className}`}
      aria-hidden
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-terracotta/60" />
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className="text-terracotta"
      >
        <path
          d="M12 3L13.5 9H19.5L14.5 13L16 19.5L12 16L8 19.5L9.5 13L4.5 9H10.5L12 3Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="0.75" />
      </svg>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-terracotta/60" />
    </div>
  );
}
