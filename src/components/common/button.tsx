import { cn } from "@/libs/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className,
}: Readonly<ButtonProps>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition",
        variant === "primary" &&
          "bg-emerald-800 text-white hover:bg-emerald-700",
        variant === "outline" &&
          "border border-gray-300 text-gray-900 hover:bg-gray-100",
        className
      )}
    >
      {children}
    </button>
  );
}
