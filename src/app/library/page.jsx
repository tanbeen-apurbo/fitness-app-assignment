import LibraryCard from '../components/shared/LibraryCard';

async function getLibraryData() {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Library() {
  const data = await getLibraryData();
  const libraryData = Array.isArray(data)
    ? data.filter((item) => item?.id != null)
    : [];

  return (
    <section
      id="library"
      aria-labelledby="library-heading"
      className="w-full bg-[#0a0b0d] px-2 pb-8 pt-8 sm:px-4 lg:px-6"
    >
      <div className="mb-4 space-y-4">
        <h2
          id="library-heading"
          className="text-[32px] font-bold uppercase leading-5 text-[#f3f3f4]"
          style={{ fontFamily: '"Oswald", "Arial Narrow", Impact, sans-serif' }}
        >
          The Library
        </h2>

        <p className="mt-0.5 text-[12px] leading-3 text-[#858a96]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 min-[620px]:grid-cols-3">
        {libraryData.map((library) => (
          <LibraryCard key={library.id} library={library} />
        ))}
      </div>
    </section>
  );
}