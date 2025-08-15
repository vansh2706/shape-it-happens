import { cn } from "@/lib/utils";

interface VibeScapeLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const VibeScapeLogo = ({ className, size = "md" }: VibeScapeLogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  return (
    <div className={cn("rounded-lg bg-gradient-button p-2 shadow-teal", sizeClasses[size], className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full text-primary-foreground"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mountain landscape icon */}
        <path
          d="M3 20L8 10L12 15L16 8L21 18H3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="currentColor"
          fillOpacity="0.3"
        />
        {/* Sun/moon circle */}
        <circle
          cx="18"
          cy="6"
          r="2"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          fillOpacity="0.6"
        />
        {/* Cloud detail */}
        <path
          d="M6 8C5.5 7.5 5 7 4.5 7C4 7 3.5 7.5 4 8.5C4.5 9 5.5 8.5 6 8Z"
          fill="currentColor"
          fillOpacity="0.4"
        />
      </svg>
    </div>
  );
};