import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components";
import { LANGUAGES, formatDate, getPostsData } from "@/lib";
import caretRight from "@/public/icons/caret-right.svg";

const { EN } = LANGUAGES;

const headerTitle = "Writing on software, but not only";

export const metadata = {
  title: "Blog",
  description: headerTitle,
};

const Blog = () => {
  const postsData = getPostsData();

  return (
    <>
      <Header
        title={headerTitle}
        subtitle="All of my long-form thoughts on technology, career development, programming tips, lifestyle, insights, and more listed here."
      />
      <div className="md:border-l md:pl-6 md:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {postsData.map(({ slug, title, summary, publishedAt }) => (
            <article
              key={slug}
              className="md:grid md:grid-cols-4 md:items-baseline"
            >
              <div className="md:col-span-3 group relative flex flex-col items-start">
                <h2 className="text-base font-semibold tracking-tight text-zinc-100">
                  <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-4 sm:rounded-2xl bg-zinc-800/50"></div>
                  <Link href={`/blog/${slug}?language=${EN}`}>
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span className="relative z-10">{title}</span>
                  </Link>
                </h2>
                <time
                  className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5"
                  dateTime={publishedAt}
                >
                  <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-500"></span>
                  </span>
                  {formatDate(publishedAt)}
                </time>
                <p className="relative z-10 mt-2 text-sm text-zinc-400">
                  {summary}
                </p>
                <div
                  aria-hidden="true"
                  className="relative z-10 mt-4 flex items-center text-sm font-medium"
                >
                  Read article
                  <Image
                    src={caretRight}
                    alt="Caret right"
                    className="ml-1 h-4 w-4"
                  />
                </div>
              </div>
              <time
                className="mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-sm text-zinc-500"
                dateTime={publishedAt}
              >
                {formatDate(publishedAt)}
              </time>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
