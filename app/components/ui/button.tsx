import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  children: React.ReactNode
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-lg font-medium transition-colors text-sm",
        variant === "primary" && 
          "bg-[#000066] text-white hover:bg-[#000088]",
        variant === "secondary" && 
          "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

