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
            priority
          />
        </div>
      </div>

      <LatestReports />

      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="relative text-3xl font-bold uppercase mb-6 heading-accent">
          Featured Reports
        </h2>
        <div className="relative flex flex-col h-[80vh] items-center justify-center shadow-xl rounded-xl border border-zinc-100 overflow-hidden">
          <div className="absolute top-0 left-0 z-0 h-full w-full">
            <Image
              src="https://res.cloudinary.com/dlle6kl4n/image/upload/v1757649729/DSCF5508_devwu0.jpg"
              alt="home bg denali"
              width={2000}
              height={2000}
              className="object-cover h-full"
            />
          </div>

          <span className="absolute top-2 right-2 py-1 px-2 rounded-lg uppercase text-sm font-semibold text-zinc-900 bg-lime-400">
            Travel
          </span>

          <div className="relative w-full h-full">
            <h3 className="text-3xl font-bold text-zinc-100">
              Dia De Los Muertos in Oaxaca
            </h3>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
