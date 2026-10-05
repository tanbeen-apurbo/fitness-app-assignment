'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { WorkoutContext } from '../context/WorkoutContext';
import ListedPlanCard from './ListedPlanCard';

function EmptyPlan() {
  return (
    <section className="flex min-h-[291px] w-full flex-col items-center justify-center bg-[#0e1014] px-4 text-center">
      <h2
        className="text-[20px] font-bold uppercase leading-6 text-[#f5f5f6]"
        style={{ fontFamily: '"Oswald", "Arial Narrow", Impact, sans-serif' }}
      >
        Nothing Here Yet
      </h2>

      <p className="mt-1 text-[12px] leading-4 text-[#969daa]">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/#library"
        className="mt-[23px] inline-flex h-9 items-center justify-center rounded-full bg-[#ccff00] px-6 text-[12px] font-semibold text-[#11120e] shadow-[0_8px_20px_rgba(204,255,0,0.12)] transition-colors hover:bg-[#d9ff4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1014]"
      >
        Go to workouts
      </Link>
    </section>
  );
}

export default function MyPlan() {
  const {
    todaysPlan: todaysPlanFromContext = [],
    savedWorkouts: savedWorkoutsFromContext = [],
    setTodaysPlan,
    setSavedWorkouts,
  } = useContext(WorkoutContext);

  const todaysPlan = Array.isArray(todaysPlanFromContext)
    ? todaysPlanFromContext.filter((library) => library?.id != null)
    : [];

  const savedWorkouts = Array.isArray(savedWorkoutsFromContext)
    ? savedWorkoutsFromContext.filter((library) => library?.id != null)
    : [];

  const handleRemove = (id, list) => {
    const isTodayList = list === 'today';
    const setList = isTodayList ? setTodaysPlan : setSavedWorkouts;

    if (typeof setList !== 'function') return;

    setList((current) =>
      Array.isArray(current)
        ? current.filter((library) => library?.id !== id)
        : []
    );

    toast.success(
      isTodayList
        ? "Removed from today's plan"
        : 'Removed from saved workouts'
    );
  };

  return (
    <div className="container mx-auto py-[20px]">
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          {todaysPlan.length > 0 ? (
            <div className="grid grid-cols-1 gap-5">
              {todaysPlan.map((library) => (
                <ListedPlanCard
                  key={library.id}
                  library={library}
                  onRemove={(id) => handleRemove(id, 'today')}
                />
              ))}
            </div>
          ) : (
            <EmptyPlan />
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          {savedWorkouts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5">
              {savedWorkouts.map((library) => (
                <ListedPlanCard
                  key={library.id}
                  library={library}
                  onRemove={(id) => handleRemove(id, 'saved')}
                />
              ))}
            </div>
          ) : (
            <EmptyPlan />
          )}
        </div>
      </div>
    </div>
  );
}