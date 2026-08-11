import orbitalMark from "../../assets/Frame.png";

const sizes = {
  header: {
    wrap: "h-9 w-9",
    image: "h-8 w-8",
  },
  hero: {
    wrap: "h-20 w-20 sm:h-24 sm:w-24",
    image: "h-14 w-14 sm:h-16 sm:w-16",
  },
  footer: {
    wrap: "h-9 w-9",
    image: "h-8 w-8",
  },
};

type OrbitalMarkProps = {
  size?: keyof typeof sizes;
  animated?: boolean;
  glow?: boolean;
  className?: string;
};

export function OrbitalMark({ size = "header", animated = true, glow = true, className = "" }: OrbitalMarkProps) {
  const scale = sizes[size];

  return (
    <span
      aria-hidden="true"
      className={`orbital-mark ${animated ? "orbital-mark--animated" : ""} relative inline-flex ${scale.wrap} items-center justify-center ${className}`}
    >
      {glow && <span className="absolute inset-0 rounded-full bg-cyan-200/10 blur-md transition group-hover:bg-cyan-200/18" />}
      <span className="orbital-mark__ring orbital-mark__ring--outer">
        <span className="orbital-mark__dot" />
      </span>
      <span className="orbital-mark__ring orbital-mark__ring--inner" />
      <img
        src={orbitalMark}
        alt=""
        className={`relative ${scale.image} object-contain opacity-95`}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(89%) sepia(36%) saturate(694%) hue-rotate(144deg) brightness(101%) contrast(98%)",
        }}
      />
    </span>
  );
}
