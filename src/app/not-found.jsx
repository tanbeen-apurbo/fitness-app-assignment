import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#0a0b0d] px-4 text-center text-[#f5f5f6]">
      <p className="font-bold tracking-widest text-[#ccff00]">404</p>

      <h1 className="mt-2 text-3xl font-bold uppercase">
        Page Not Found
      </h1>

      <p className="mt-3 text-sm text-[#969daa]">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-[#ccff00] px-5 py-2.5 text-sm font-semibold text-[#11120e]"
      >
        Go to workouts
      </Link>
    </main>
  );
}