/** @format */

import React from "react";

type RowProps = {
  children: React.ReactNode;
  last?: boolean;
  className?: string;
};

export default function Row({
  children,
  className = "",
  last = false,
}: RowProps) {
  return (
    <div
      className={`grid grid-cols-5 gap-[15px] text-center
      ${last ? "" : "border-b border-white/30 "}
      ${className}`}>
      {children}
    </div>
  );
}
