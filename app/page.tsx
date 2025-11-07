import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      <div className="relative flex flex-col min-h-screen items-center justify-center ">
        <h1 className="relative z-10 text-8xl font-bold text-zinc-100 mb-4 text-center">
          Trail Ready
        </h1>
        <Link
          href="/trail-reports"
          className="relative z-10 py-2 px-4 bg-lime-400 rounded-lg text-zinc-900 font-semibold"
        >
          Explore Reports
        </Link>

        <div className="absolute top-0 left-0 z-0 h-full w-screen">
          <Image
            src="/images/denali.webp"
            alt="home bg denali"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
