import Image from 'next/image';

export default function LibraryCard({ library }) {
  const {
    name,
    image,
    muscleGroups = [],
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = library;

  return (
    <article className="cursor-pointer group w-full overflow-hidden rounded-[14px] border border-[#292b32] bg-[#15161b] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-[#46520f] hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] motion-safe:hover:-translate-y-1 motion-reduce:transition-none">
      <div className="relative aspect-[2.04/1] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04] motion-reduce:transition-none"
        />
      </div>

      <div className="min-h-[174px] px-5 pb-5 pt-6">
        <div className="flex flex-wrap gap-2">
          {muscleGroups.map((group) => (
            <span
              key={group}
              className="inline-flex h-[22px] items-center rounded-full bg-[#ccff00] px-[11px] text-[11px] font-bold uppercase leading-none text-[#11120e]"
            >
              {group}
            </span>
          ))}
        </div>

        <h2
          className="mt-[14px] text-[20px] font-bold uppercase leading-6 tracking-[0.01em] text-[#f3f3f4]"
          style={{ fontFamily: '"Oswald", "Arial Narrow", Impact, sans-serif' }}
        >
          {name}
        </h2>

        <p className="mt-[2px] text-[12px] leading-[18px] text-[#9ca1ad]">
          {equipment}
        </p>

        <div className="mt-4 border-t border-[#292b32]" />

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] leading-4 text-[#9ca1ad]">
          <span className="inline-flex items-center gap-[6px]">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="h-[15px] w-[15px]"
            >
              <circle
                cx="10"
                cy="10"
                r="7.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M10 5.8v4.5l2.8 1.7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {duration} min
          </span>

          <span className="inline-flex items-center gap-[6px]">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-[15px] w-[15px]"
              fill="currentColor"
            >
              <path d="M10.5 1.8c.3 2.5-.7 3.8-2.2 5.4-1.4 1.5-2.4 2.8-2.4 5a4.2 4.2 0 0 0 2.2 3.7c-.1-1.6.7-2.8 2-3.9 1.9 1.5 2.7 3 2.7 4.5 0 1.7-1.3 3-3.5 3-3.4 0-5.7-2.4-5.7-5.7 0-2.8 1.6-4.7 3.4-6.7 1.5-1.7 2.7-3.3 3.5-5.3Z" />
            </svg>
            {caloriesBurned} kcal
          </span>

          <span className="inline-flex items-center gap-[6px]">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="h-[15px] w-[15px]"
            >
              <path
                d="m10 2.3 2.3 4.8 5.2.7-3.8 3.7.9 5.2-4.6-2.5-4.6 2.5.9-5.2-3.8-3.7 5.2-.7L10 2.3Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            {Number(rating).toFixed(1)}
          </span>
        </div>
      </div>
    </article>
  );
}