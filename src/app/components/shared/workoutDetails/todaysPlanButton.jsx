'use client';

import React, { useContext } from 'react';
import { WorkoutContext } from '../../../context/WorkoutContext';
import { toast } from 'react-toastify';

const TodaysPlanButton = ({ workout }) => {
  const { setTodaysPlan } = useContext(WorkoutContext);

  const handleTodaysPlan = () => {
    if (!workout?.id) return;

    setTodaysPlan((current) => {
      const validWorkouts = Array.isArray(current)
        ? current.filter((item) => item?.id != null)
        : [];

      return [...validWorkouts, workout];
    });

    toast.success("Added to today's plan");
  };

  return (
    <button
      onClick={handleTodaysPlan}
      type="button"
      className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#ccff00] px-3 text-[10px] font-semibold text-[#11120e] transition-colors hover:bg-[#d9ff4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1014] min-[600px]:h-[23px] min-[600px]:gap-1 min-[600px]:px-2.5 min-[600px]:text-[7px] lg:h-11 lg:gap-2 lg:px-6 lg:text-[13px]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="h-3 w-3 min-[600px]:h-[9px] min-[600px]:w-[9px] lg:h-[18px] lg:w-[18px]"
      >
        <rect
          x="3"
          y="4.5"
          width="14"
          height="12"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M6.5 2.8v3.4M13.5 2.8v3.4M3.5 8h13M10 10.2v4.5M7.8 12.5h4.4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      Add to today&apos;s plan
    </button>
  );
};

export default TodaysPlanButton;