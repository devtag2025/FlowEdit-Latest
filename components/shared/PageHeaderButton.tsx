import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PageHeaderButtonProps {
  text: string;
  icons?: React.ReactNode | ReactNode[];
  className?: string;
}

const PageHeaderButton = ({
  text,
  icons,
  className,
}: PageHeaderButtonProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-lg px-3 py-1",
        "bg-white/50 backdrop-blur-[20px]",
        "border border-[rgba(255,255,255,0.05)]",
        "shadow-[0_10px_10px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.05),0_1px_0_rgba(0,0,0,0.05)]",
        className
      )}
    >
      <span className="text-[13px] whitespace-nowrap font-medium text-neutral-900 leading-[150%]">
        {text}
      </span>

      {Array.isArray(icons)
        ? icons.map((icon, index) => (
            <span key={index} className="text-neutral-900 text-sm size-3.5">
              {icon}
            </span>
          ))
        : icons && <span className="text-neutral-900">{icons}</span>}
    </div>
  );
};

export default PageHeaderButton;
