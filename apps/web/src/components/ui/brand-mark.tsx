/** The Zerospace orbit-and-Z mark on its violet app tile. */
export function BrandMark({
  className = "",
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  return (
    <img
      alt={decorative ? "" : "Zerospace"}
      aria-hidden={decorative || undefined}
      className={`zerospace-brand-mark ${className}`}
      draggable={false}
      src="/favicon.svg"
    />
  );
}
