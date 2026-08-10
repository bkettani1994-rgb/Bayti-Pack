"use client";

import { useEffect, useRef } from "react";

export default function PurchaseEvent({ value, eventId }: { value: number; eventId?: string }) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    const args: unknown[] = ["track", "Purchase", { value, currency: "MAD" }];
    if (eventId) args.push({ eventID: eventId });
    window.fbq?.(...args);
  }, [value, eventId]);

  return null;
}
