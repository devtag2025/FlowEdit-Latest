/** @format */

import { ReactNode } from "react";
import FluidContainer from "@/components/layout/FluidContainer";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className='font-inter'>
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;
