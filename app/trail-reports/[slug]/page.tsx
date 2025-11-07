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
        <div className="relative z-10 text-center">
          <h1 className=" text-5xl sm:text-6xl md:text-8xl font-bold text-zinc-100 mb-1">
            {report.title}
          </h1>
          <p className="text-zinc-300 uppercase">{report.location}</p>
        </div>
        <div className="absolute top-0 left-0 z-0 h-full w-screen">
          <Image
            src={report.featuredImage.url}
            alt={report.featuredImage.alt}
            fill
            className="object-cover brightness-50"
          />
        </div>
      </div>

      <div className="py-20 px-8 max-w-[800px] mx-auto">
        <p>{report.content}</p>
      </div>

      <LatestReports />
    </div>
  );
}
