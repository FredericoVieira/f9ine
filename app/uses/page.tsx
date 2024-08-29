import { uses } from "@/contents";
import { Header } from "@/components";
import { formatTitle } from "@/lib";

const headerTitle = "Softwares I use and additional recommendations";

export const metadata = {
  title: "Uses",
  description: headerTitle,
};

const Uses = () => {
  return (
    <>
      <Header
        title={headerTitle}
        subtitle="Here is a list of the tools and resources I use for building
        software, working on personal projects, studying or trying to be more
        productive. Hope you find something useful here!"
      />
      <div className="space-y-20">
        {uses.map(({ id, items }) => (
          <section
            key={id}
            aria-labelledby={id}
            className="md:border-l md:pl-6 md:border-zinc-700/40"
          >
            <div className="grid max-w-3xl grid-cols-1 gap-y-8 items-baseline md:grid-cols-4">
              <h2 id={id} className="text-sm font-semibold text-zinc-100">
                {formatTitle(id)}
              </h2>
              <div className="md:col-span-3">
                <ul role="list" className="space-y-16">
                  {items.map(({ title, description }) => (
                    <li key={title} className="flex flex-col items-start">
                      <h3 className="text-base font-semibold tracking-tight text-zinc-100 mb-2">
                        {title}
                      </h3>
                      <p className="text-sm text-zinc-400">{description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Uses;
