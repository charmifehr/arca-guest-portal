"use client";

import { useEffect, useMemo, useState } from "react";

interface WeatherState {
  temperature: number;
  label: string;
}

function getGreeting(hour: number) {
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function weatherLabel(code: number) {
  if ([0, 1].includes(code)) return "Clear skies";
  if ([2, 3].includes(code)) return "Soft clouds";
  if ([45, 48].includes(code)) return "Misty";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "Passing rain";
  if ([95, 96, 99].includes(code)) return "Tropical storm";
  return "Island weather";
}

export function ConciergeStatus({ className = "" }: { className?: string }) {
  const [hour, setHour] = useState<number | null>(null);
  const [weather, setWeather] = useState<WeatherState | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const roatanTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Tegucigalpa",
        hour: "numeric",
        hour12: false,
      }).format(now);
      setHour(Number(roatanTime));
    };

    updateTime();
    const timer = window.setInterval(updateTime, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadWeather() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=16.30&longitude=-86.59&current=temperature_2m,weather_code&temperature_unit=fahrenheit",
          { cache: "no-store" },
        );
        const data = (await response.json()) as {
          current?: { temperature_2m?: number; weather_code?: number };
        };
        if (!cancelled && data.current?.temperature_2m !== undefined) {
          setWeather({
            temperature: Math.round(data.current.temperature_2m),
            label: weatherLabel(data.current.weather_code ?? 0),
          });
        }
      } catch {
        if (!cancelled) {
          setWeather(null);
        }
      }
    }

    loadWeather();
    return () => {
      cancelled = true;
    };
  }, []);

  const greeting = useMemo(() => getGreeting(hour ?? new Date().getHours()), [hour]);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="rounded-full border border-cream/25 bg-charcoal-deep/35 px-3 py-2 text-cream shadow-glow backdrop-blur-md">
        <p className="font-heading text-[9px] uppercase tracking-caps text-gold-light">
          {greeting}
        </p>
        <p className="font-body text-xs italic text-cream/90">from West Bay</p>
      </div>
      <div className="rounded-full border border-cream/25 bg-cream/15 px-3 py-2 text-cream backdrop-blur-md">
        <p className="font-heading text-[9px] uppercase tracking-caps text-gold-light">
          Roatán
        </p>
        <p className="font-body text-xs italic text-cream/90">
          {weather ? `${weather.temperature}°F · ${weather.label}` : "weather loading"}
        </p>
      </div>
    </div>
  );
}
