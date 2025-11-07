import Image from "next/image";
import LatestReports from "../components/LatestReports";

export default function Home() {
  return (
    <div className="font-sans">
      <div className="relative flex flex-col h-[50vh] items-center justify-center ">
        <h1 className="relative z-10 text-5xl sm:text-6xl md:text-8xl font-bold text-zinc-100 mb-4 text-center">
          Trail Reports
        </h1>

        <div className="absolute top-0 left-0 z-0 h-full w-screen">
          <Image
            src="/images/slotcanyon.webp"
            alt="home bg denali"
            fill
            className="object-cover brightness-50"
          />
        </div>
      </div>

      <LatestReports />
    </div>
  );
}
