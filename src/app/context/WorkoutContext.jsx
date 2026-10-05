'use client';

import React from 'react';
import { createContext, useState } from "react";

export const WorkoutContext = createContext({
    todaysPlan: [],
    setTodaysPlan: () => {},
    saveWorkout: () => {},  
    setSavedWorkouts: () => {},
});




const WorkoutProvider = ({children}) => {

    const [todaysPlan, setTodaysPlan] = useState([]);
    const [savedWorkouts, setSavedWorkouts] = useState([]);

    const sharedData = {
        todaysPlan,
        setTodaysPlan,
        savedWorkouts,
        setSavedWorkouts,
    }


    return (
        <WorkoutContext.Provider value={sharedData}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;