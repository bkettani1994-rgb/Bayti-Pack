"use client";

import { useEffect, useRef } from "react";

export default function PurchaseEvent({ value }: { value: number }) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    window.fbq?.("track", "Purchase", { value, currency: "MAD" });
  }, [value]);

  return null;
}
