'use client';

import React, { useContext, useState } from 'react';
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

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function matchesWorkout(library, query) {
  const search = query.trim().toLowerCase();
  if (!search) return true;

  const tags = Array.isArray(library?.tags)
    ? library.tags
    : [library?.tags];

  const muscleGroups = Array.isArray(library?.muscleGroups)
    ? library.muscleGroups
    : [library?.muscleGroups];

  const searchableText = [
    library?.name,
    library?.equipment,
    library?.tag,
    ...tags,
    ...muscleGroups,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return searchableText.includes(search);
}

function sortLibraries(libraries, sortBy) {
  return [...libraries].sort((a, b) => {
    if (sortBy === 'name') {
      return String(a.name ?? '').localeCompare(String(b.name ?? ''));
    }

    // Numeric options sort from largest to smallest.
    return toNumber(b[sortBy]) - toNumber(a[sortBy]);
  });
}

export default function MyPlan() {
  const [activeTab, setActiveTab] = useState('today');
  const [sortBy, setSortBy] = useState('duration');
  const [searchQuery, setSearchQuery] = useState('');

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

  const activeList = activeTab === 'today' ? todaysPlan : savedWorkouts;

  const filteredActiveList = activeList.filter((library) =>
    matchesWorkout(library, searchQuery)
  );

  const sortedActiveList = sortLibraries(filteredActiveList, sortBy);

  const totalMinutes = activeList.reduce(
    (total, library) => total + toNumber(library.duration),
    0
  );

  const totalCalories = activeList.reduce(
    (total, library) => total + toNumber(library.caloriesBurned),
    0
  );

  const stats = [
    { label: 'Exercises', value: activeList.length, highlight: true },
    { label: 'Minutes', value: totalMinutes },
    { label: 'Calories', value: totalCalories },
  ];

  const handleRemove = (id, list) => {
    const isTodayList = list === 'today';
    const setList = isTodayList ? setTodaysPlan : setSavedWorkouts;

    if (typeof setList !== 'function') return;

    setList((current) =>
      Array.isArray(current)
        ? current.filter((library) => String(library?.id) !== String(id))
        : []
    );

    toast.success(
      isTodayList
        ? "Removed from today's plan"
        : 'Removed from saved workouts'
    );
  };

  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <h1
          className="text-[30px] font-bold uppercase leading-9 text-[#f5f5f6]"
          style={{ fontFamily: '"Oswald", "Arial Narrow", Impact, sans-serif' }}
        >
          My Plan
        </h1>

        <p className="mt-1 text-sm leading-5 text-[#969daa]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </header>

      <section
        aria-label="Workout totals"
        className="mb-8 grid grid-cols-1 overflow-hidden rounded-[17px] border border-[#252a34] bg-[#14161c] min-[520px]:grid-cols-3"
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-6 py-5 min-[520px]:py-7 ${
              index < stats.length - 1
                ? 'border-b border-[#20232b] min-[520px]:border-b-0 min-[520px]:border-r'
                : ''
            }`}
          >
            <p className="text-[12px] leading-4 text-[#969daa]">{stat.label}</p>
            <p
              className={`mt-1 text-[38px] font-bold leading-[42px] ${
                stat.highlight ? 'text-[#ccff00]' : 'text-[#f5f5f6]'
              }`}
              style={{
                fontFamily: '"Oswald", "Arial Narrow", Impact, sans-serif',
              }}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </section>

      <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center">
        <div
          role="tablist"
          aria-label="Workout lists"
          className="inline-flex w-fit rounded-xl border border-[#252a34] bg-[#151820] p-1"
        >
          <button
            id="today-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === 'today'}
            aria-controls="workout-list-panel"
            onClick={() => setActiveTab('today')}
            className={`rounded-[9px] px-4 py-2 text-xs transition-colors ${
              activeTab === 'today'
                ? 'bg-[#20242d] font-semibold text-white'
                : 'text-[#9298a4] hover:text-white'
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            id="saved-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === 'saved'}
            aria-controls="workout-list-panel"
            onClick={() => setActiveTab('saved')}
            className={`rounded-[9px] px-4 py-2 text-xs transition-colors ${
              activeTab === 'saved'
                ? 'bg-[#20242d] font-semibold text-white'
                : 'text-[#9298a4] hover:text-white'
            }`}
          >
            Saved
          </button>
        </div>

        <label className="min-w-0 flex-1">
          <span className="sr-only">Search workouts by name or tag</span>
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search by workout name or tag..."
            className="h-10 w-full rounded-lg border border-[#252a34] bg-[#111318] px-3 text-sm text-[#e1e3e8] outline-none placeholder:text-[#737b89] transition-colors focus:border-[#ccff00]"
          />
        </label>

        <label className="flex items-center gap-3 text-xs text-[#9298a4] lg:ml-auto">
          <span>Sort By</span>
          <span className="relative">
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="h-9 w-[118px] appearance-none rounded-lg border border-[#252a34] bg-[#111318] py-0 pl-3 pr-8 text-xs text-[#e1e3e8] outline-none transition-colors focus:border-[#ccff00]"
            >
              <option value="duration">Duration</option>
              <option value="caloriesBurned">Calories</option>
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>

            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#9298a4]"
            >
              <path
                d="m5 7.5 5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </label>
      </div>

      <section
        id="workout-list-panel"
        role="tabpanel"
        aria-labelledby={activeTab === 'today' ? 'today-tab' : 'saved-tab'}
        className="rounded-xl border border-[#252a34] bg-[#111318] p-4 sm:p-6"
      >
        {sortedActiveList.length > 0 ? (
          <div className="grid grid-cols-1 gap-5">
            {sortedActiveList.map((library) => (
              <ListedPlanCard
                key={library.id}
                library={library}
                onRemove={(id) => handleRemove(id, activeTab)}
              />
            ))}
          </div>
        ) : activeList.length === 0 ? (
          <EmptyPlan />
        ) : (
          <div className="flex min-h-[200px] flex-col items-center justify-center px-4 text-center">
            <h2
              className="text-lg font-bold uppercase text-[#f5f5f6]"
              style={{ fontFamily: '"Oswald", "Arial Narrow", Impact, sans-serif' }}
            >
              No matching workouts
            </h2>
            <p className="mt-1 text-sm text-[#969daa]">
              Try another workout name or tag.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-4 rounded-full bg-[#ccff00] px-5 py-2 text-xs font-semibold text-[#11120e] transition-colors hover:bg-[#d9ff4d]"
            >
              Clear search
            </button>
          </div>
        )}
      </section>
    </main>
  );
}