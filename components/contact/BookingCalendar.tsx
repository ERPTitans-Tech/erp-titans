"use client";

import { useState } from "react";
import { 
  addMonths, 
  subMonths, 
  format, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  isWeekend, 
  getDay,
  isBefore,
  startOfDay,
  isSameDay
} from "date-fns";
import { m, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";

interface BookingCalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export default function BookingCalendar({ selectedDate, onSelectDate }: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [direction, setDirection] = useState(0);

  const handlePrevMonth = () => {
    setDirection(-1);
    setCurrentMonth(prev => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setDirection(1);
    setCurrentMonth(prev => addMonths(prev, 1));
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Filter out weekends
  const weekdays = daysInMonth.filter(day => !isWeekend(day));
  
  // Group by week (a new week starts when day of week is Monday, i.e. getDay() === 1)
  const weeks: Date[][] = [];
  let currentWeek: Date[] = [];
  
  weekdays.forEach((day) => {
    if (getDay(day) === 1 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
  });
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  const today = startOfDay(new Date());
  const isCurrentMonth = format(currentMonth, "yyyy-MM") === format(today, "yyyy-MM");

  // Fixed Monday–Friday grid: pad each week so every column lines up.
  const cells: (Date | null)[] = [];
  weeks.forEach((week, wi) => {
    const first = getDay(week[0]); // 1 = Monday … 5 = Friday
    if (wi === 0) for (let i = 1; i < first; i++) cells.push(null);
    week.forEach((d) => cells.push(d));
    if (wi === weeks.length - 1) {
      const last = getDay(week[week.length - 1]);
      for (let i = last; i < 5; i++) cells.push(null);
    }
  });

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 24 : -24, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 24 : -24, opacity: 0 }),
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
          <CalendarIcon size={16} className="text-[#003D82]" />
          Pick a date
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handlePrevMonth}
            disabled={isCurrentMonth}
            aria-label="Previous month"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#003D82] transition-colors hover:bg-white disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="min-w-[104px] text-center text-sm font-bold text-[#003D82]">{format(currentMonth, "MMMM yyyy")}</span>
          <button
            type="button"
            onClick={handleNextMonth}
            aria-label="Next month"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#003D82] transition-colors hover:bg-white"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="mb-2 grid grid-cols-5 gap-1.5 text-center text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      <div className="relative min-h-[232px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <m.div
            key={currentMonth.toISOString()}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="grid grid-cols-5 gap-1.5"
          >
            {cells.map((day, i) => {
              if (!day) return <span key={`e${i}`} />;
              const past = isBefore(day, today);
              const isSelected = selectedDate ? isSameDay(selectedDate, day) : false;
              const isToday = isSameDay(day, today);
              return (
                <button
                  type="button"
                  key={day.toISOString()}
                  onClick={() => !past && onSelectDate(day)}
                  disabled={past}
                  aria-pressed={isSelected}
                  aria-label={format(day, "EEEE, MMMM d")}
                  className={`flex h-10 items-center justify-center rounded-xl text-sm font-bold transition-all ${
                    isSelected
                      ? "bg-[#003D82] text-white shadow-[0_4px_14px_0_rgba(0,61,130,0.30)]"
                      : past
                      ? "cursor-not-allowed text-[#CBD5E1]"
                      : `bg-white text-[#0F172A] ring-1 ring-[#E2E8F0] hover:text-[#003D82] hover:ring-[#003D82]/40 ${isToday ? "ring-2 ring-[#0EA5E9]/60" : ""}`
                  }`}
                >
                  {format(day, "d")}
                </button>
              );
            })}
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
