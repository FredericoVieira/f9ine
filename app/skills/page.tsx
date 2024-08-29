import Image from "next/image";
import { skills } from "@/contents";
import { Header } from "@/components";
import { formatTitle } from "@/lib";
import bolt from "@/public/icons/bolt.svg";

const headerTitle = "My core competencies";

export const metadata = {
  title: "Skills",
  description: headerTitle,
};

const Skills = () => {
  return (
    <>
      <Header
        title={headerTitle}
        subtitle="I am proactive in seeking collaboration and diverse perspectives to drive the best solutions. Additionally, I pay meticulous attention to layout details and code organization to ensure exceptional user experiences. I also have a keen interest in documenting information and sharing insights."
      />
      <div className="space-y-20">
        {skills.map(({ category, items }) => (
          <section
            key={category}
            aria-labelledby={category}
            className="md:border-l md:pl-6 md:border-zinc-700/40"
          >
            <div className="grid max-w-3xl grid-cols-1 gap-y-8 items-baseline md:grid-cols-4">
              <h2 id={category} className="text-sm font-semibold text-zinc-100">
                {formatTitle(category)}
              </h2>
              <div className="md:col-span-3">
                <ul role="list" className="space-y-4">
                  {items.map(({ title, level }) => (
                    <li key={title}>
                      <p className="text-sm text-zinc-400 mb-1">{title}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <Image
                            key={index}
                            src={bolt}
                            alt="Bolt"
                            className={`h-2 w-2 ${
                              level <= index ? "brightness-50" : ""
                            }`}
                          />
                        ))}
                      </div>
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

export default Skills;
