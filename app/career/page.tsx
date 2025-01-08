import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { career } from "@/contents";
import { Header } from "@/components";
import { formatStartEndDate } from "@/lib";
import fileDownload from "@/public/icons/file-download.svg";

const headerTitle = "Summary of my work so far";

export const metadata = {
  title: "Career",
  description: headerTitle,
};

const Career = () => {
  const titleAction = (
    <Link
      href="/frederico-vieira.pdf"
      target="_blank"
      className="mx-2 hover:brightness-[175%]"
    >
      <Image src={fileDownload} alt="Caret right" className="h-5 w-5" />
    </Link>
  );

  return (
    <>
      <Header
        title={headerTitle}
        titleAction={titleAction}
        subtitle="Software engineer and React specialist, passionate about creating beautiful designs and exceptional user interfaces. I develop custom solutions for web and mobile platforms using JavaScript, Node, and Python."
      />
      <div className="md:border-l md:pl-6 md:border-zinc-700/40 mb-16">
        <div className="flex max-w-3xl flex-col space-y-16">
          {career.map(
            ({
              company,
              role,
              description,
              technologies,
              startDate,
              endDate,
            }) => (
              <section
                key={company}
                className="md:grid md:grid-cols-4 md:items-baseline"
              >
                <div className="md:col-span-3 group relative flex flex-col items-start">
                  <h2 className="text-base font-semibold tracking-tight text-zinc-100">
                    {company}
                  </h2>
                  <time
                    className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5"
                    dateTime={startDate}
                  >
                    <span
                      className="absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-zinc-500"></span>
                    </span>
                    {formatStartEndDate(startDate, endDate)}
                  </time>
                  <p className="relative z-10 mt-2 text-sm text-zinc-400">
                    {role}
                  </p>
                  <div
                    aria-hidden="true"
                    className="relative z-10 mt-4 flex items-center text-sm font-medium text-zinc-400 whitespace-pre-line"
                  >
                    {description}
                  </div>
                  <div
                    aria-hidden="true"
                    className="relative z-10 mt-4 flex items-center text-sm font-medium text-zinc-500"
                  >
                    Technologies: {technologies}
                  </div>
                </div>
                <time
                  className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500"
                  dateTime={startDate}
                >
                  {formatStartEndDate(startDate, endDate)}
                </time>
              </section>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Career;
