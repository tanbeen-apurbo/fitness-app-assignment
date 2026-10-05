'use client';

import React, { useContext } from 'react';
import { WorkoutContext } from '../../../context/WorkoutContext';
import { toast } from 'react-toastify';

const SavedPlanButton = ({ workout }) => {
  const { setSavedWorkouts } = useContext(WorkoutContext);

  const handleSavedPlan = () => {
    if (!workout?.id) return;

    setSavedWorkouts((current) => {
      const validWorkouts = Array.isArray(current)
        ? current.filter((item) => item?.id != null)
        : [];

      return [...validWorkouts, workout];
    });

    toast.success('Saved workout');
  };

  return (
    <button
      onClick={handleSavedPlan}
      type="button"
      className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#303540] px-3 text-[10px] font-medium text-[#d2d4da] transition-colors hover:border-[#626977] hover:bg-[#151820] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1014] min-[600px]:h-[23px] min-[600px]:gap-1 min-[600px]:px-2.5 min-[600px]:text-[7px] lg:h-11 lg:gap-2 lg:px-6 lg:text-[13px]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="h-3 w-3 min-[600px]:h-[9px] min-[600px]:w-[9px] lg:h-[18px] lg:w-[18px]"
      >
        <path
          d="M5.5 3.5h9a1 1 0 0 1 1 1v12l-5.5-3-5.5 3v-12a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
      Save for later
    </button>
  );
};

export default SavedPlanButton;