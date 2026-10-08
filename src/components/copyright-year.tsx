"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const timer = window.setInterval(onChange, 60 * 60 * 1000);
  return () => window.clearInterval(timer);
}

function currentYear() {
  return new Date().getFullYear();
}

export default function CopyrightYear({ initialYear }: { initialYear: number }) {
  // Refresh after hydration so statically built pages also show the current year.
  const year = useSyncExternalStore(subscribe, currentYear, () => initialYear);
  return <>{year}</>;
}
