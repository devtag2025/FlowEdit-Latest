"use client";

import { useState } from "react";

export type PlanType = "monthly" | "semiannual" | "annual";

interface ToggleSwitchProps {
  value?: PlanType;
  onChange?: (value: PlanType) => void;
}

const ToggleSwitch = ({ value = "monthly", onChange }: ToggleSwitchProps) => {
  const [active, setActive] = useState < PlanType > (value);

  const handleChange = (plan: PlanType) => {
    setActive(plan);
    onChange?.(plan);
  };

  const baseClass =
    "px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer";
  const activeClass = "bg-white text-black shadow";
  const inactiveClass = "text-white/80";

  return (
    <div className="inline-flex bg-[#a1b8f4] gap-2 rounded-full p-2">
      <button
        onClick={() => handleChange("monthly")}
        className={`${baseClass} ${active === "monthly" ? activeClass : inactiveClass
          }`}
      >
        Monthly
      </button>

      <button
        onClick={() => handleChange("semiannual")}
        className={`${baseClass} ${active === "semiannual" ? activeClass : inactiveClass
          }`}
      >
        Semiannual
      </button>

      <button
        onClick={() => handleChange("annual")}
        className={`${baseClass} ${active === "annual" ? activeClass : inactiveClass
          }`}
      >
        Annual
      </button>
    </div>
  );
};

export default ToggleSwitch;



/** @format */
// "use client";

// import { useState } from "react";

// export type PlanType = "monthly" | "semiannual" | "annual";

// interface ToggleSwitchProps {
//   value?: PlanType;
//   onChange?: (value: PlanType) => void;
// }

// const ToggleSwitch = ({ value = "monthly", onChange }: ToggleSwitchProps) => {
//   const [active, setActive] = useState<PlanType>(value);

//   const handleChange = (plan: PlanType) => {
//     setActive(plan);
//     onChange?.(plan);
//   };

//   const baseClass =
//     "px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer";
//   const activeClass = "bg-white text-black shadow";
//   const inactiveClass = "text-white/80";

//   return (
//     <div className='inline-flex bg-[#a1b8f4] gap-2 rounded-full p-2'>
//       <button
//         onClick={() => handleChange("monthly")}
//         className={`${baseClass} ${
//           active === "monthly" ? activeClass : inactiveClass
//         }`}>
//         Monthly
//       </button>

//       <button
//         onClick={() => handleChange("semiannual")}
//         className={`${baseClass} ${
//           active === "semiannual" ? activeClass : inactiveClass
//         }`}>
//         Semiannual
//       </button>

//       <button
//         onClick={() => handleChange("annual")}
//         className={`${baseClass} ${
//           active === "annual" ? activeClass : inactiveClass
//         }`}>
//         Annual
//       </button>
//     </div>
//   );
// };

// export default ToggleSwitch;

/** @format */

// ("use client");

// import { useState, useEffect } from "react";

// interface ToggleSwitchProps {
//   checked?: boolean;
//   onChange?: (value: boolean) => void;
// }

// const ToggleSwitch = ({ checked = false, onChange }: ToggleSwitchProps) => {
//   const [isOn, setIsOn] = useState(checked);

//   useEffect(() => {
//     setIsOn(checked);
//   }, [checked]);

//   const handleToggle = () => {
//     const newValue = !isOn;
//     setIsOn(newValue);
//     onChange?.(newValue);
//   };

//   return (
//     <label
//       className='relative flex items-center w-[58px] h-8 rounded-full cursor-pointer px-1 transition-all duration-300 shadow-[inset_0_1px_3px_rgba(0,0,0,0.18)] bg-[#e8ebf0] peer-checked:bg-[#dbe7ff]'
//       style={{ WebkitTapHighlightColor: "transparent" }}>
//       <input
//         type='checkbox'
//         className='peer sr-only'
//         checked={isOn}
//         onChange={handleToggle}
//       />

//       <span
//         className={`absolute left-1 w-6 h-6 rounded-full bg-[#1e88ff] shadow-[0_2px_6px_rgba(30,136,255,0.5)] transition-all duration-300 ${
//           isOn ? "translate-x-[26px]" : "translate-x-0"
//         }`}></span>
//     </label>
//   );
// };

// export default ToggleSwitch;
