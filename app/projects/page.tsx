import Image from "next/image";
import Link from "next/link";
import { projects } from "@/contents";
import { Header } from "@/components";
import link from "@/public/icons/link.svg";
import code from "@/public/icons/code.svg";

const headerTitle = "Things I have created trying to leave my mark";

export const metadata = {
  title: "Projects",
  description: headerTitle,
};

const Projects = () => {
  return (
    <>
      <Header
        title={headerTitle}
        subtitle="Most of the projects are from private companies but feel free to explore if pique your interest. Don't forget to review the code from the open-source ones and contribute if you see room to improvement!"
      />
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map(
          ({ image, title, description, displayUrl, url, source }) => (
            <li
              key={title}
              className="group relative flex flex-col items-start"
            >
              <Image
                alt={`${title} project`}
                loading="lazy"
                decoding="async"
                className="relative z-10 aspect-[1.3/1] rounded-2xl object-cover bg-zinc-800 w-48 lg:w-32"
                src={image}
              />
              <h2 className="mt-6 text-base font-semibold text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl bg-zinc-800/50"></div>
                <span className="relative z-10">{title}</span>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-400">
                {description}
              </p>
              {url && displayUrl && (
                <Link href={url} target="_blank">
                  <p className="relative z-10 mt-6 flex items-center text-sm font-medium transition text-zinc-200">
                    <Image src={link} alt="Link" className="h-4 w-4" />
                    <span className="ml-2">{displayUrl}</span>
                  </p>
                </Link>
              )}
              {source && (
                <Link href={source} target="_blank">
                  <p className="relative z-10 mt-2 flex items-center text-sm font-medium transition text-zinc-200">
                    <Image src={code} alt="Link" className="h-4 w-4" />
                    <span className="ml-2">source code</span>
                  </p>
                </Link>
              )}
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Projects;
