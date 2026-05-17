"use client";

import { useEffect, useState } from "react";

export function OfflineBanner() {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    setOffline(!navigator.onLine);

    const onOffline = () => setOffline(true);
    const onOnline = () => setOffline(false);

    window.addEventListener("offline", onOffline);
    window.addEventListener("online", onOnline);
    return () => {
      window.removeEventListener("offline", onOffline);
      window.removeEventListener("online", onOnline);
    };
  }, []);

  if (!offline) return null;

  return (
    <div
      role="alert"
      className="fixed inset-x-0 top-0 z-[100] bg-charcoal px-4 py-3 text-center text-sm text-linen-light"
    >
      You appear to be offline. Some features may be unavailable until your
      connection returns.
    </div>
  );
}
