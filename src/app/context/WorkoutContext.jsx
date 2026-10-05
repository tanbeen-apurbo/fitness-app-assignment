'use client';

import { createContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'fitlog-workouts';

export const WorkoutContext = createContext({
  todaysPlan: [],
  setTodaysPlan: () => {},
  savedWorkouts: [],
  setSavedWorkouts: () => {},
  completedWorkoutIds: [],
  setCompletedWorkoutIds: () => {},
});

function uniqueWorkoutList(value) {
  if (!Array.isArray(value)) return [];

  const seenIds = new Set();

  return value.filter((item) => {
    if (item?.id == null) return false;

    const id = String(item.id);
    if (seenIds.has(id)) return false;

    seenIds.add(id);
    return true;
  });
}

function uniqueIds(value) {
  if (!Array.isArray(value)) return [];

  return [...new Set(value.filter((id) => id != null).map(String))];
}

export default function WorkoutProvider({ children }) {
  const [todaysPlan, setTodaysPlanState] = useState([]);
  const [savedWorkouts, setSavedWorkoutsState] = useState([]);
  const [completedWorkoutIds, setCompletedWorkoutIdsState] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  const setTodaysPlan = (valueOrUpdater) => {
    setTodaysPlanState((current) => {
      const next =
        typeof valueOrUpdater === 'function'
          ? valueOrUpdater(current)
          : valueOrUpdater;

      return uniqueWorkoutList(next);
    });
  };

  const setSavedWorkouts = (valueOrUpdater) => {
    setSavedWorkoutsState((current) => {
      const next =
        typeof valueOrUpdater === 'function'
          ? valueOrUpdater(current)
          : valueOrUpdater;

      return uniqueWorkoutList(next);
    });
  };

  const setCompletedWorkoutIds = (valueOrUpdater) => {
    setCompletedWorkoutIdsState((current) => {
      const next =
        typeof valueOrUpdater === 'function'
          ? valueOrUpdater(current)
          : valueOrUpdater;

      return uniqueIds(next);
    });
  };

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);

      if (stored) {
        const data = JSON.parse(stored);
        setTodaysPlan(data?.todaysPlan);
        setSavedWorkouts(data?.savedWorkouts);
        setCompletedWorkoutIds(data?.completedWorkoutIds);
      }
    } catch (error) {
      console.error('Could not load saved workouts:', error);
    } finally {
      setHasLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ todaysPlan, savedWorkouts, completedWorkoutIds })
      );
    } catch (error) {
      console.error('Could not save workouts:', error);
    }
  }, [todaysPlan, savedWorkouts, completedWorkoutIds, hasLoaded]);

  return (
    <WorkoutContext.Provider
      value={{
        todaysPlan,
        setTodaysPlan,
        savedWorkouts,
        setSavedWorkouts,
        completedWorkoutIds,
        setCompletedWorkoutIds,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}