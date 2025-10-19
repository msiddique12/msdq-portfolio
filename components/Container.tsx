type Size = "sm" | "md" | "lg" | "xl" | "full";

const sizeClass: Record<Size, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-[100rem]", // very wide when needed
};

export default function Container({
  children,
  size = "lg",
}: {
  children: React.ReactNode;
  size?: Size;
}) {
  return (
    <div className={`mx-auto ${sizeClass[size]} px-4 sm:px-6 lg:px-8`}>{children}</div>
  );
}
