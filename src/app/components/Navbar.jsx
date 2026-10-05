'use client';

import { useContext } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { WorkoutContext } from '../context/WorkoutContext';

export default function Navbar() {
  const pathname = usePathname();
  const { todaysPlan = [], savedWorkouts = [] } = useContext(WorkoutContext);

  const planCount = Array.isArray(todaysPlan)
    ? todaysPlan.filter((item) => item?.id != null).length
    : 0;

  const savedCount = Array.isArray(savedWorkouts)
    ? savedWorkouts.filter((item) => item?.id != null).length
    : 0;

  const isWorkoutActive =
    pathname === '/' || pathname.startsWith('/library');
  const isMyPlanActive = pathname.startsWith('/my-plan');

  const optionClass = (isActive) =>
    `rounded-full px-5 py-[9px] text-[15px] leading-[18px] transition-colors ${
      isActive
        ? 'bg-[#19210e] font-semibold text-[#ccff00]'
        : 'text-[#a7a9b2] hover:text-white'
    }`;

  return (
    <header className="w-full border-b border-[#202125] bg-[#0d0e10] px-5 text-[#a7a9b2] sm:px-7">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-y-3 py-3 md:min-h-[104px] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-y-0 md:py-0">
        <Link
          href="/"
          aria-label="Fitlog home"
          className="row-start-1 flex w-fit items-center gap-[10px]"
        >
          <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9 shrink-0"
          />
          <span className="text-[23px] font-extrabold leading-none tracking-[0.045em] text-[#f5f5f6]">
            FITLOG
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="col-span-2 row-start-2 flex items-center justify-center md:col-span-1 md:col-start-2 md:row-start-1"
        >
          <Link
            href="/library"
            aria-current={isWorkoutActive ? 'page' : undefined}
            className={optionClass(isWorkoutActive)}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            aria-current={isMyPlanActive ? 'page' : undefined}
            className={`ml-1 ${optionClass(isMyPlanActive)}`}
          >
            My Plan
          </Link>
        </nav>

        <div className="col-start-2 row-start-1 flex items-center justify-self-end gap-3 sm:gap-[30px] md:col-start-3">
          <div className="flex items-center gap-[10px] whitespace-nowrap text-[15px] text-[#c4c5cb]">
            <span>Plan</span>
            <span className="flex h-[25px] min-w-[25px] items-center justify-center rounded-full bg-[#ccff00] px-[6px] text-[13px] font-semibold leading-none text-[#10110d]">
              {planCount}
            </span>
          </div>

          <div className="flex items-center gap-[10px] whitespace-nowrap text-[15px] text-[#c4c5cb]">
            <span>Saved</span>
            <span className="flex h-[25px] min-w-[25px] items-center justify-center rounded-full border border-[#33353c] px-[6px] text-[13px] leading-none text-[#a7a9b2]">
              {savedCount}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}