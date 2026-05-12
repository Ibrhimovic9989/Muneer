"use client";

import { useEffect, useState } from "react";

type Theme = "sepia" | "light" | "dark";

const OPTIONS: { id: Theme; label: string; swatch: string; ring: string }[] = [
  { id: "sepia", label: "Sepia", swatch: "#F2EDE3", ring: "#B8853A" },
  { id: "light", label: "Light", swatch: "#FFFFFF", ring: "#A86E26" },
  { id: "dark", label: "Dark", swatch: "#0E0E10", ring: "#D9B07A" },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("sepia");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = (document.documentElement.getAttribute("data-theme") as Theme) || "sepia";
    setTheme(initial);
    setMounted(true);
  }, []);

  const apply = (t: Theme) => {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem("theme", t);
    } catch {}
  };

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="inline-flex items-center gap-1 p-1 rounded-full border border-ink/15 bg-bone/60 backdrop-blur-md"
    >
      {OPTIONS.map((o) => {
        const active = mounted && theme === o.id;
        return (
          <button
            key={o.id}
            role="radio"
            aria-checked={active}
            aria-label={o.label}
            title={o.label}
            onClick={() => apply(o.id)}
            className={`relative w-6 h-6 rounded-full transition-all duration-300 ${
              active ? "scale-110" : "hover:scale-105 opacity-70 hover:opacity-100"
            }`}
            style={{
              backgroundColor: o.swatch,
              boxShadow: active
                ? `0 0 0 1.5px ${o.ring}, inset 0 0 0 0.5px rgba(0,0,0,0.08)`
                : "inset 0 0 0 0.5px rgba(0,0,0,0.12)",
            }}
          />
        );
      })}
    </div>
  );
}
