'use client';

import Image from 'next/image';
import Link from 'next/link';

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-[14px] w-[14px] shrink-0 text-[#ccff00]"
    >
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 5.8v4.5l2.8 1.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-[14px] w-[14px] shrink-0 text-[#ccff00]"
    >
      <path d="M10.5 1.8c.3 2.5-.7 3.8-2.2 5.4-1.4 1.5-2.4 2.8-2.4 5a4.2 4.2 0 0 0 2.2 3.7c-.1-1.6.7-2.8 2-3.9 1.9 1.5 2.7 3 2.7 4.5 0 1.7-1.3 3-3.5 3-3.4 0-5.7-2.4-5.7-5.7 0-2.8 1.6-4.7 3.4-6.7 1.5-1.7 2.7-3.3 3.5-5.3Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-[14px] w-[14px] shrink-0 text-[#ccff00]"
    >
      <path
        d="m10 2.3 2.3 4.8 5.2.7-3.8 3.7.9 5.2-4.6-2.5-4.6 2.5.9-5.2-3.8-3.7 5.2-.7L10 2.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ListedPlanCard({
  library,
  onMarkDone,
  onRemove,
  isDone = false,
}) {
  if (!library?.id) return null;

  const rating = Number(library.rating ?? 0).toFixed(1);

  return (
    <article className="flex min-h-[110px] flex-col gap-4 rounded-[15px] border border-[#252a34] bg-[#151820] p-3 sm:flex-row sm:items-center sm:gap-4 sm:p-[13px]">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <div className="relative h-[72px] w-[112px] shrink-0 overflow-hidden rounded-lg sm:h-[78px] sm:w-[142px]">
          <Image
            src={library.image}
            alt={library.name}
            fill
            sizes="(max-width: 640px) 112px, 142px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <h3
            className={`truncate text-[16px] font-bold uppercase leading-5 text-[#f5f5f6] ${
              isDone ? 'text-[#9298a4] line-through' : ''
            }`}
            style={{ fontFamily: '"Oswald", "Arial Narrow", Impact, sans-serif' }}
          >
            {library.name}
          </h3>

          <p className="mt-1 truncate text-[12px] text-[#9298a4]">
            {library.equipment}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#c1c5ce]">
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon />
              {library.duration} min
            </span>

            <span className="inline-flex items-center gap-1.5">
              <FlameIcon />
              {library.caloriesBurned} kcal
            </span>

            <span className="inline-flex items-center gap-1.5">
              <StarIcon />
              {rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 sm:ml-auto sm:shrink-0">
        <Link
          href={`/library/${library.id}`}
          className="inline-flex h-[34px] items-center justify-center whitespace-nowrap rounded-full border border-[#343a47] px-4 text-xs text-[#e1e3e8] transition-colors hover:border-[#ccff00] hover:text-[#ccff00]"
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={() => onMarkDone?.(library.id)}
          className={`inline-flex h-[34px] items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-4 text-xs font-medium text-[#11120e] transition-colors ${
            isDone
              ? 'bg-[#a8d900] hover:bg-[#baf000]'
              : 'bg-[#ccff00] hover:bg-[#d9ff4d]'
          }`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-[14px] w-[14px]"
            fill="none"
          >
            <path
              d="m4.5 10.5 3.4 3.3 7.6-7.6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {isDone ? 'Done' : 'Mark as Done'}
        </button>

        <button
          type="button"
          onClick={() => onRemove?.(library.id)}
          aria-label={`Remove ${library.name}`}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#737b89] transition-colors hover:bg-[#252a34] hover:text-white"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-4 w-4"
            fill="none"
          >
            <path
              d="m5 5 10 10M15 5 5 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}