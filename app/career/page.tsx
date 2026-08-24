import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { aiNativeDevelopment, career, highlights } from "@/contents";
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
        subtitle="Senior Software Engineer focused on building scalable,
        user-facing products across the full software development lifecycle.
        I specialize in TypeScript, with a strong focus on architecture,
        AI-powered solutions, developer experience, and reliable product delivery."
      />
      <div className="mb-16 md:border-l md:border-zinc-700/40 md:pl-6">
        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-4 md:grid-cols-4">
          <h2 className="text-sm font-semibold text-zinc-100">Highlights</h2>
          <div className="md:col-span-3">
            <ul role="list" className="space-y-2">
              {highlights.map((item) => (
                <li key={item} className="text-sm text-zinc-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-16 md:border-l md:border-zinc-700/40 md:pl-6">
        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-4 md:grid-cols-4">
          <h2 className="text-sm font-semibold text-zinc-100">
            AI-native development
          </h2>
          <div className="md:col-span-3">
            <ul role="list" className="space-y-2">
              {aiNativeDevelopment.map((item) => (
                <li key={item} className="text-sm text-zinc-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-16 md:border-l md:border-zinc-700/40 md:pl-6">
        <div className="flex max-w-3xl flex-col space-y-16">
          {career.map(({ company, role, description, startDate, endDate }) => (
            <section
              key={company}
              className="md:grid md:grid-cols-4 md:items-baseline"
            >
              <div className="group relative flex flex-col items-start md:col-span-3">
                <h2 className="text-base font-semibold tracking-tight text-zinc-100">
                  {company}
                </h2>
                <time
                  className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-500 md:hidden"
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
                  className="relative z-10 mt-4 flex items-center whitespace-pre-line text-sm font-medium text-zinc-400"
                >
                  {description}
                </div>
              </div>
              <time
                className="relative z-10 order-first mb-3 mt-1 hidden items-center text-sm text-zinc-500 md:flex"
                dateTime={startDate}
              >
                {formatStartEndDate(startDate, endDate)}
              </time>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default Career;
