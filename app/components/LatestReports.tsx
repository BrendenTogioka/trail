import Image from "next/image";
import Link from "next/link";
import { trailReports } from "../utils/data";

export default function LatestReports() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="relative text-3xl font-bold uppercase mb-6 heading-accent">
        Latest Reports
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {trailReports.map((report, i) => (
          <div
            className="relative h-full shadow-xl rounded-xl border border-zinc-100 overflow-hidden"
            key={i}
          >
            <div className="relative">
              <Image
                src={report.featuredImage.url}
                alt={report.featuredImage.alt}
                className="object-cover aspect-video"
                width={750}
                height={750}
              />
              <span className="absolute top-2 right-2 py-1 px-2 rounded-lg uppercase text-xs font-semibold text-zinc-900 bg-lime-400">
                {report.category}
              </span>
            </div>

            <div className="relative p-4 w-full h-auto flex flex-col gap-4 ">
              <div className="h-full">
                <h3 className="text-xl font-bold text-zinc-900 ">
                  {report.title}
                </h3>
                <p className="text-md text-zinc-700">{report.description}</p>
              </div>

              <Link
                href={`/trail-reports/${report.slug}`}
                className="py-2 px-4 bg-lime-400 rounded-lg text-zinc-900 font-semibold text-center"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
