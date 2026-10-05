import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex min-h-[122px] w-full flex-col items-center justify-center gap-5 bg-[#08090b] px-[26px] py-7 sm:flex-row sm:justify-between sm:gap-4 sm:py-0">
      <Link
        href="/"
        aria-label="Fitlog home"
        className="flex items-center gap-[10px]"
      >
        <Image
          src="/logo.png"
          alt=""
          width={22}
          height={18}
          className="h-[18px] w-[22px] shrink-0 object-contain"
        />
        <span className="text-[20px] font-extrabold leading-none tracking-[0.04em] text-[#f5f5f6]">
          FITLOG
        </span>
      </Link>

      <p className="text-center text-[15px] leading-6 text-[#676d7b] sm:text-right">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </p>
    </footer>
  );
}