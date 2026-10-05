import Image from 'next/image';
import Link from 'next/link';
import TodaysPlanButton from '../../components/shared/workoutDetails/todaysPlanButton';
import SavedPlanButton from '../../components/shared/workoutDetails/savedPlanButton';

async function getLibraryData() {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch workout data');
  }

  return res.json();
}

function DetailRow({ label, value }) {
  return (
    <div className="flex min-h-10 items-center justify-between gap-4 px-3 py-2 min-[600px]:h-[24px] min-[600px]:min-h-0 min-[600px]:py-0 lg:h-[48px] lg:px-6">
      <dt className="text-[10px] font-medium uppercase tracking-[0.06em] text-[#a1a5af] min-[600px]:text-[7px] lg:text-[11px]">
        {label}
      </dt>
      <dd className="text-right text-[11px] text-[#e0e1e5] min-[600px]:text-[8px] lg:text-[14px]">
        {value}
      </dd>
    </div>
  );
}

export default async function LibraryDetailsPage({ params }) {
  const { id } = await params;
  const libraryData = await getLibraryData();
  const library = libraryData.find(
    (item) => String(item.id) === String(id)
  );

  if (!library) {
    return (
      <main className="min-h-screen bg-[#0e1014] px-4 py-10 text-[#f3f3f4] sm:py-[70px]">
        <div className="mx-auto max-w-[680px] rounded-2xl border border-[#292b32] bg-[#15161b] p-7 text-center sm:p-10">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Workout Not Found
          </h1>
          <p className="mt-3 text-sm text-[#9ca1ad]">
            Sorry, we couldn&apos;t find the workout you&apos;re looking for.
          </p>
          <Link
            href="/library"
            className="mt-6 inline-flex rounded-lg bg-[#ccff00] px-4 py-2.5 text-sm font-semibold text-[#11120e] transition-colors hover:bg-[#d9ff4d]"
          >
            ← Back to library
          </Link>
        </div>
      </main>
    );
  }

  const detailRows = [
    ['Equipment', library.equipment],
    ['Difficulty', library.difficulty],
    ['Sets', library.sets],
    ['Reps', library.reps],
    ['Duration', `${library.duration} min`],
    ['Calories', `${library.caloriesBurned} kcal`],
    ['Rating', Number(library.rating).toFixed(1)],
  ];

  return (
    <main className="min-h-screen bg-[#0e1014] px-4 pb-12 pt-6 text-[#f3f3f4] min-[600px]:px-[10px] sm:px-6 lg:pt-[47px]">
      <div className="mx-auto grid max-w-[1212px] grid-cols-1 items-start gap-6 min-[600px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] min-[600px]:gap-7 lg:gap-[56px]">
        <div className="relative aspect-square w-full overflow-hidden rounded-[11px] min-[600px]:aspect-[0.8/1]">
          <Image
            src={library.image}
            alt={library.name}
            fill
            priority
            sizes="(max-width: 599px) 100vw, (max-width: 1199px) 50vw, 600px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 pt-0.5 lg:pt-0">
          <h1
            className="text-[22px] font-bold uppercase leading-[1.1] text-[#f5f5f6] min-[600px]:text-[20px] lg:text-[40px]"
            style={{ fontFamily: '"Oswald", "Arial Narrow", Impact, sans-serif' }}
          >
            {library.name}
          </h1>

          <p className="mt-2 text-[13px] leading-5 text-[#9ca1ad] min-[600px]:mt-1 min-[600px]:text-[8px] min-[600px]:leading-3 lg:mt-2 lg:text-[16px] lg:leading-[23px]">
            {library.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2 min-[600px]:mt-2 min-[600px]:gap-1.5 lg:mt-5 lg:gap-2.5">
            {library.muscleGroups?.map((group) => (
              <span
                key={group}
                className="inline-flex h-5 items-center rounded-full bg-[#ccff00] px-2.5 text-[9px] font-bold capitalize leading-none text-[#11120e] min-[600px]:h-[13px] min-[600px]:px-2 min-[600px]:text-[7px] lg:h-6 lg:px-3 lg:text-[12px]"
              >
                {group}
              </span>
            ))}
          </div>

          <dl className="mt-5 divide-y divide-[#252a34] overflow-hidden rounded-[14px] border border-[#252a34] bg-[#161922] min-[600px]:mt-[14px] lg:mt-7">
            {detailRows.map(([label, value]) => (
              <DetailRow key={label} label={label} value={value} />
            ))}
          </dl>

          <section className="mt-5 min-[600px]:mt-4 lg:mt-8">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.04em] text-[#f3f3f4] min-[600px]:text-[8px] lg:text-[15px]">
              Instructions
            </h2>

            <ol className="mt-2 list-decimal space-y-2 pl-4 text-[12px] leading-[1.5] text-[#c0c3cc] min-[600px]:mt-2 min-[600px]:space-y-[4px] min-[600px]:text-[8px] min-[600px]:leading-[13px] lg:mt-4 lg:space-y-3 lg:text-[14px] lg:leading-[22px]">
              {library.instructions?.map((instruction, index) => (
                <li key={`${index}-${instruction}`} className="pl-0.5">
                  {instruction}
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-6 flex flex-wrap items-center gap-2 min-[600px]:mt-5 lg:mt-10 lg:gap-4">
       <TodaysPlanButton workout={library} />
<SavedPlanButton workout={library} />
          </div>
        </div>
      </div>
    </main>
  );
}