import Image from "next/image";

import { trailReports } from "@/app/utils/data";
import LatestReports from "@/app/components/LatestReports";

export default async function TrailReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const reportArray = trailReports.filter((item) => item.slug === slug);
  const report = reportArray[0];

  return (
    <div className="font-sans">
      <div className="relative flex flex-col h-[50vh] items-center justify-center ">
        <div className="relative w-full h-full z-10 text-center flex flex-col items-center justify-center">
          <h1 className=" text-5xl sm:text-6xl md:text-8xl font-bold text-zinc-100 mb-1">
            {report.title}
          </h1>
          <div className="absolute bottom-4 flex justify-between w-[92%] mx-auto">
            <p className="text-zinc-300 py-1 px-2 rounded-lg uppercase text-xs border bg-zinc-900/30">
              ⚲ {report.location}
            </p>
            <span className=" py-1 px-2  rounded-lg uppercase text-xs font-semibold text-zinc-900 bg-lime-400">
              {report.category}
            </span>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-0 h-full w-screen">
          <Image
            src={report.featuredImage.url}
            alt={report.featuredImage.alt}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
      </div>

      <div className="py-20 px-8 max-w-[800px] mx-auto fade-in-up">
        <p>{report.content}</p>
      </div>

      <LatestReports />
    </div>
  );
}
