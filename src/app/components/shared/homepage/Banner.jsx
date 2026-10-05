import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-[#0a0b0d] px-4 pb-16 pt-12 sm:px-6"
    >
      <div className="grid min-h-[448px] items-center gap-6 rounded-2xl border border-[#262832] bg-[#15161b] px-7 py-10 sm:px-10 md:px-14 md:py-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:gap-8 lg:px-14 lg:py-14">
        <div className="max-w-[620px]">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.14em] text-[#ccff00]">
            Workout Library
          </p>

        <h1
  id="hero-heading"
  className="text-[clamp(2.25rem,4vw,3.25rem)] font-black uppercase leading-[0.94] tracking-[-0.035em] text-[#f5f5f6]"
  style={{
    fontFamily: '"Oswald", "Arial Narrow", Impact, sans-serif',
  }}
>
  <span className="block lg:whitespace-nowrap">Train with intent. Log</span>
  <span className="block">Every set.</span>
</h1>

          <p className="mt-5 max-w-[500px] text-[16px] leading-[25px] text-[#a7a9b2]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="mt-7 inline-flex h-10 items-center gap-3 rounded-md bg-[#ccff00] px-6 text-[12px] font-bold uppercase text-[#10110d] transition-colors hover:bg-[#dcff4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15161b]"
          >
            Browse workouts
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4"
            >
              <path
                d="M4 10h11m-4-4 4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

       <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[330px]">
  <Image
    src="/banner.png"
    alt="Workout illustration"
    fill
    priority
    sizes="(max-width: 1024px) 100vw, 40vw"
    className="object-contain"
  />
</div>
      </div>
    </section>
  );
}