import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SiteButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const SiteButton = ({
  children,
  className,
  variant = "default",
  size = "default",
}: SiteButtonProps) => {
  return (
    <div className="p-0.5 bg-linear-to-r from-white/60 to-white rounded-lg">
      <Button
        variant={variant}
        size={size}
        className={cn(
          "bg-[#B6C7F5] hover:bg-[#B6C7F5] text-black px-[26px] py-[18px] font-medium text-sm leading-5 shadow-md cursor-pointer",
          className
        )}
      >
        <span className="relative z-20">{children}</span>
      </Button>
    </div>
  );
};

export default SiteButton;
