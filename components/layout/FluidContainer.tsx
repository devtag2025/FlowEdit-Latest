"use client";

import { ReactNode, useEffect, useState } from "react";

interface FluidContainerProps {
  children: ReactNode;
}

const FluidContainer = ({ children }: FluidContainerProps) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const baseWidth = 1440;

      // Only scale for screens > 1440px
      // For screens <= 1440px: Keep existing responsive design (no scaling)
      if (viewportWidth > baseWidth) {
        const scaleValue = viewportWidth / baseWidth;
        setScale(scaleValue);
      } else {
        // Screens <= 1440px: No scaling, use existing responsive design
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // For screens > 1440px, we scale visually but keep the scroll behavior same
  if (scale !== 1) {
    return (
      <div 
        className="w-full overflow-x-hidden" 
        style={{ 
          width: "100vw", 
          maxWidth: "100vw",
          scrollBehavior: "smooth"
        }}
      >
        <div
          style={{
            width: "1440px",
            transform: `scale(${scale}) translateZ(0)`,
            transformOrigin: "top center",
            marginLeft: "auto",
            marginRight: "auto",
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            perspective: 1000,
            WebkitPerspective: 1000,
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  // For screens <= 1440px, no scaling - normal responsive behavior
  return (
    <div className="w-full">
      {children}
    </div>
  );
};

export default FluidContainer;

