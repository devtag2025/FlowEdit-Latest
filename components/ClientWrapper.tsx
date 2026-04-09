"use client";

import { useEffect, useState } from "react";
import Preloader from "./Preloader";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    window.addEventListener("load", handleLoad);

    const timeout = setTimeout(() => setLoading(false), 2500);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return loading ? <Preloader /> : <>{children}</>;
}
