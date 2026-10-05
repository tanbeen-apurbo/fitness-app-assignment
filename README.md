<div align="center">
  <img src="./public/logo.png" alt="FitLog logo" width="76" />

  # FITLOG

  **Train hard. Log honest.**

  A responsive workout library and training planner built with Next.js and JavaScript.

  <p>
    <img src="https://img.shields.io/badge/Next.js-16.3.8-black?logo=next.js" alt="Next.js 16.3.8" />
    <img src="https://img.shields.io/badge/React-19.2.8-149eca?logo=react&logoColor=white" alt="React 19.2.8" />
    <img src="https://img.shields.io/badge/JavaScript-JSX-f7df1e?logo=javascript&logoColor=black" alt="JavaScript JSX" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  </p>
</div>

---

## About FitLog

FitLog helps users explore exercises and organize their training. Browse the workout library, view exercise details, add workouts to today’s plan, and save lifts for later. The responsive dark interface is designed for mobile, tablet, and desktop screens.

## 🛠️ Technologies Used

- ⚛️ **Next.js 16** — App Router and server-rendered pages
- ⚛️ **React 19** — Interactive UI components
- 🟨 **JavaScript and JSX** — Application logic and components
- 🎨 **Tailwind CSS 4** — Responsive styling
- 🌼 **DaisyUI** — UI component utilities
- 🔔 **React Toastify** — Action notifications
- 🌐 **REST API and JSON** — Workout library data
- 💾 **Browser Local Storage** — Persisting plan and saved workout selections

## ✨ Features

1. **🔍 Explore and search workouts**  
   Browse workout cards and search by exercise name, equipment, muscle group, or tag.

2. **📋 View workout details**  
   Open an exercise page to see its description, equipment, difficulty, sets, reps, duration, calories, rating, and instructions.

3. **➕ Build a plan and save workouts**  
   Add workouts to today’s plan or save them for later. Remove entries when your plan changes.

4. **📊 Track your plan**  
   See exercise, minute, and calorie totals for the selected list. Sort workouts by duration, calories, rating, or name.

5. **📱 Use FitLog on any screen**  
   Navigate a responsive dark UI with workout and saved-plan counts, clear active navigation, and toast feedback for actions.

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets you write HTML-like markup inside JavaScript. FitLog uses JSX to describe its interface inside components, such as workout cards, navigation, and plan sections.

### 2. What is the difference between props and state?

Props pass data from a parent component to a child. For example, a workout page passes a workout object to a card component.

State stores values that can change while the app is running, such as the active My Plan tab, search text, and sort selection.

### 3. Where does FitLog use `useState` and `useContext`?

`useState` manages local interface choices, such as the selected tab, search query, and sort option. `useContext` lets components access shared workout data and actions from `WorkoutContext`.

### 4. What does `useEffect` do in FitLog?

`useEffect` runs side effects after a component renders. `WorkoutContext` uses it to load saved plan data from Local Storage when the app starts and persist updates when the workout lists change.

The workout library data is fetched in an async server component.

### 5. Why does each item in a `.map()` list need a unique `key`?

React uses keys to track list items when they change, move, or are removed. FitLog uses each workout’s ID as its key, for example: `key={library.id}`.

### 6. What is conditional rendering?

Conditional rendering displays different UI depending on the current data. FitLog shows an empty-plan message when a list has no workouts and a no-results message when a search finds no matches.

### 7. How does a child component send an action to its parent?

A parent can pass a function to a child as a prop. For example, a plan card receives an `onRemove` callback and calls it when the remove button is clicked.

## 📁 Project Structure

```text
src/
└── app/
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   └── shared/
    │       ├── LibraryCard.jsx
    │       ├── homepage/
    │       │   ├── Banner.jsx
    │       │   ├── Library.jsx
    │       │   └── libraryGrid.jsx
    │       └── workoutDetails/
    │           ├── savedPlanButton.jsx
    │           └── todaysPlanButton.jsx
    ├── context/
    │   └── WorkoutContext.jsx
    ├── library/
    │   ├── [id]/
    │   │   └── page.jsx
    │   └── page.jsx
    ├── my-plan/
    │   ├── ListedPlanCard.jsx
    │   └── page.jsx
    ├── layout.js
    └── page.js

public/
├── banner.png
└── logo.png
```

## 🎨 Styling

FitLog uses Tailwind CSS utility classes for layout, color, typography, and responsive behavior. The interface uses a dark background, bright lime accent, workout imagery, and responsive layouts that adapt to different screen sizes.

## ⚡ Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal, usually [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build the app for production
- `npm run start` — Start the production build
- `npm run lint` — Run ESLint

## 🌐 Workout Data

FitLog loads workout information from:

`https://api.abcz.workers.dev/api/fitlog`

## 💚 Built with Next.js, React, and JavaScript

Made while building a practical workout library and training planner.