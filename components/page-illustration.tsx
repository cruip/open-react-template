export default function PageIllustration({
  multiple = false,
}: {
  multiple?: boolean;
}) {
  return (
    <>
      {/* Homepage-only: stronger hero glow layered on top of the global ambient */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 opacity-30 blur-[120px] dark:opacity-20"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-royal) 0%, var(--color-gold) 35%, transparent 70%)",
        }}
      />

      {/* Homepage-only: blueprint grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.04] dark:opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(var(--color-navy) 1px, transparent 1px), linear-gradient(90deg, var(--color-navy) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Additional accent shapes for sections further down the page */}
      {multiple && (
        <>
          <div
            className="pointer-events-none absolute -right-40 top-[200px] -z-10 h-[400px] w-[400px] opacity-20 blur-[100px] dark:opacity-10"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[500px] w-[500px] opacity-10 blur-[120px]"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle, var(--color-royal-light) 0%, transparent 70%)",
            }}
          />
        </>
      )}
    </>
  );
}