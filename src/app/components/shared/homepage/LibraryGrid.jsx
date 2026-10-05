'use client';

import { useMemo, useState } from 'react';
import LibraryCard from '../LibraryCard';

export default function LibrarySearchGrid({ libraryData = [] }) {
  const [query, setQuery] = useState('');

  const filteredLibrary = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return libraryData;

    return libraryData.filter((library) => {
      const searchableText = [
        library.name,
        library.equipment,
        library.tag,
        ...(Array.isArray(library.tags) ? library.tags : []),
        ...(Array.isArray(library.muscleGroups) ? library.muscleGroups : []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return searchableText.includes(search);
    });
  }, [libraryData, query]);

  return (
    <>
      <label className="mb-4 block">
        <span className="sr-only">Search workouts by name or tag</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search workouts by name or tag..."
          className="w-full rounded-xl border border-[#292b32] bg-[#15161b] px-4 py-3 text-sm text-white outline-none placeholder:text-[#858a96] focus:border-[#ccff00] sm:max-w-md"
        />
      </label>

      {filteredLibrary.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 min-[620px]:grid-cols-3">
          {filteredLibrary.map((library) => (
            <LibraryCard key={library.id} library={library} />
          ))}
        </div>
      ) : (
        <p className="py-10 text-center text-sm text-[#969daa]">
          No workouts match “{query}”.
        </p>
      )}
    </>
  );
}