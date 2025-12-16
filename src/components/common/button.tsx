import { cn } from "@/libs/utils";

type ButtonProps = {
  type?: "button" | "submit";
  children: React.ReactNode;
  variant?: "primary" | "outline" | "secondary";
  className?: string;
};

export default function Button({
  type="button",
  children,
  variant = "primary",
  className,
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition",
        variant === "primary" &&
          "bg-emerald-800 text-white hover:bg-emerald-700",
        variant === "outline" &&
          "border border-gray-300 text-gray-900 hover:bg-gray-100",
         variant === "secondary" &&
          "border border-gray-300 bg-gray-300 text-emerald-800",
        className
      )}
    >
      {children}
    </button>
  );
}
