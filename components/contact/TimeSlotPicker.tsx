"use client";

import { Clock } from "lucide-react";

interface TimeSlotPickerProps {
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
  disabled: boolean;
}

const TIME_SLOTS = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];

export default function TimeSlotPicker({ selectedTime, onSelectTime, disabled }: TimeSlotPickerProps) {
  return (
    <div className={`w-full transition-opacity duration-300 ${disabled ? "pointer-events-none opacity-40" : "opacity-100"}`} aria-disabled={disabled}>
      <div className="mb-4 flex h-8 items-center gap-2 text-sm font-bold text-[#0F172A]">
        <Clock size={16} className="text-[#003D82]" />
        Pick a time <span className="font-semibold text-[#64748B]">(Mountain Time)</span>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
        {TIME_SLOTS.map((time) => {
          const isSelected = selectedTime === time;
          return (
            <button
              type="button"
              key={time}
              onClick={() => onSelectTime(time)}
              aria-pressed={isSelected}
              className={`h-10 rounded-xl text-sm font-bold transition-all ${
                isSelected
                  ? "bg-[#003D82] text-white shadow-[0_4px_14px_0_rgba(0,61,130,0.30)]"
                  : "bg-white text-[#0F172A] ring-1 ring-[#E2E8F0] hover:text-[#003D82] hover:ring-[#003D82]/40"
              }`}
            >
              {time}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-xs font-medium text-[#64748B]">All times are Mountain Time (Calgary). Your confirmation email shows the exact time.</p>
    </div>
  );
}
