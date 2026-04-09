import { Check, Minus } from "lucide-react";

interface DiamondIconProps {
  type?: "check" | "minus";
}

const DiamondIcon = ({ type = "check" }: DiamondIconProps) => {
  const Icon = type === "check" ? Check : Minus;

  return (
    <div
      className="w-8 h-8 bg-transparent rounded-[32%] border border-[#dcdde2] shadow-[0_0_0_4px_rgba(0,0,0,0.04)] flex items-center justify-center"
      style={{ transform: "rotate(45deg)" }}
    >
      <Icon
        style={{ transform: "rotate(-45deg)" }}
        className="text-black size-5"
      />
    </div>
  );
};

export default DiamondIcon;
