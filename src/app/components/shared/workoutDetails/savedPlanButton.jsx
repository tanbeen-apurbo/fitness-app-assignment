'use client';

import { useContext } from 'react';
import { WorkoutContext } from '../../../context/WorkoutContext';
import { toast } from 'react-toastify';

export default function SavedPlanButton({ workout }) {
  const { savedWorkouts = [], setSavedWorkouts } = useContext(WorkoutContext);

  const alreadySaved =
    !!workout?.id &&
    savedWorkouts.some((item) => String(item?.id) === String(workout.id));

  const handleSave = () => {
    if (!workout?.id || alreadySaved) return;

    setSavedWorkouts((current) => {
      const list = Array.isArray(current) ? current : [];
      const duplicate = list.some(
        (item) => String(item?.id) === String(workout.id)
      );

      return duplicate ? list : [...list, workout];
    });

    toast.success('Saved workout');
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      disabled={alreadySaved}
      className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#303540] px-3 text-[10px] font-medium text-[#d2d4da] transition-colors hover:border-[#626977] hover:bg-[#151820] disabled:cursor-not-allowed disabled:opacity-50 min-[600px]:h-[23px] min-[600px]:gap-1 min-[600px]:px-2.5 min-[600px]:text-[7px] lg:h-11 lg:gap-2 lg:px-6 lg:text-[13px]"
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
      {alreadySaved ? 'Saved' : 'Save for later'}
    </button>
  );
}