<div align="center">
  <img src="./public/logo.png" alt="FitLog logo" width="72" />

  # FitLog

  **A focused space to find workouts and organize your training.**

  Built with Next.js, React, JavaScript, and Tailwind CSS.

  <p>
    <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/JavaScript-JSX-f7df1e?logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  </p>
</div>

---

## About

FitLog is a workout library and training planner. Explore exercises, read their details, add lifts to today’s plan, and save workouts for later. Your plan and saved list are stored in your browser, so they’re still there when you return.

## Technology

- **Next.js** — App Router and application pages
- **React** — Interactive interface and shared state
- **JavaScript / JSX** — Application code
- **Tailwind CSS** — Responsive layouts and styling
- **DaisyUI** — UI component utilities
- **React Toastify** — Feedback for workout actions
- **REST API / JSON** — Workout data
- **Local Storage** — Saved plan data between visits

## Five Key Features

1. **Browse and search workouts**  
   Explore exercise cards and search by name, equipment, muscle group, or tag.

2. **See workout details**  
   Each exercise page presents its equipment, difficulty, sets, reps, duration, calories, rating, and instructions.

3. **Manage your training lists**  
   Add workouts to Today’s Plan or save them for later. Remove entries as your plans change.

4. **Review your plan at a glance**  
   See exercise, minute, and calorie totals for the selected list. Sort workouts by duration, calories, rating, or name.

5. **Use it across screen sizes**  
   The dark FitLog interface adapts to phones, tablets, and desktop screens, with plan and saved-workout counts in the navigation.

## Get Started

You’ll need Node.js and npm installed.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Project scripts

- `npm run dev` — Start the development server
- `npm run build` — Create a production build
- `npm run start` — Run the production build
- `npm run lint` — Run ESLint

## Workout Data

The library retrieves exercise data from:

`https://api.abcz.workers.dev/api/fitlog`

## Main App Structure

```text
src/app/
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
├── context/
│   └── WorkoutContext.jsx
├── library/
│   ├── [id]/page.jsx
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

---

<div align="center">
  <sub>FitLog · Train hard. Log honest.</sub>
</div>
