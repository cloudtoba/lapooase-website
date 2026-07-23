"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownProps = {
  targetDate: string | null;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(targetDate: string): TimeLeft {
  const distance = new Date(targetDate).getTime() - Date.now();
  const remaining = Math.max(distance, 0);

  return {
    days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((remaining / (1000 * 60)) % 60),
    seconds: Math.floor((remaining / 1000) % 60)
  };
}

export function Countdown({ targetDate }: CountdownProps) {
  const fallback = useMemo<TimeLeft>(() => ({ days: 0, hours: 0, minutes: 0, seconds: 0 }), []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(targetDate ? getTimeLeft(targetDate) : fallback);

  useEffect(() => {
    if (!targetDate) return;

    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  if (!targetDate) {
    return (
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {["Tanggal", "Jam", "Menit", "Detik"].map((label) => (
          <div key={label} className="countdown-tile">
            <p className="text-2xl font-black text-rice">TBA</p>
            <p className="mt-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-rice/56">{label}</p>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds }
  ];

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {units.map((unit) => (
        <div key={unit.label} className="countdown-tile">
          <p className="text-3xl font-black tabular-nums text-rice">{unit.value.toString().padStart(2, "0")}</p>
          <p className="mt-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-rice/56">{unit.label}</p>
        </div>
      ))}
    </div>
  );
}
