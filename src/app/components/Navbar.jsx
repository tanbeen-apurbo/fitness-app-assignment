import Image from 'next/image';
import Link from 'next/link';


export default function Navbar() {
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
            href="/workouts"
            aria-current="page"
            className="rounded-full bg-[#19210e] px-5 py-[9px] text-[15px] font-semibold leading-[18px] text-[#ccff00]"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="ml-1 rounded-full px-5 py-[9px] text-[15px] leading-[18px] text-[#a7a9b2] transition-colors hover:text-white"
          >
            My Plan
          </Link>
        </nav>

        <div className="col-start-2 row-start-1 flex items-center justify-self-end gap-3 sm:gap-[30px] md:col-start-3">
          <div className="flex items-center gap-[10px] whitespace-nowrap text-[15px] text-[#c4c5cb]">
            <span>Plan</span>
            <span className="flex h-[25px] min-w-[25px] items-center justify-center rounded-full bg-[#ccff00] px-[6px] text-[13px] font-semibold leading-none text-[#10110d]">
              0
            </span>
          </div>

          <div className="flex items-center gap-[10px] whitespace-nowrap text-[15px] text-[#c4c5cb]">
            <span>Saved</span>
            <span className="flex h-[25px] min-w-[25px] items-center justify-center rounded-full border border-[#33353c] px-[6px] text-[13px] leading-none text-[#a7a9b2]">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}