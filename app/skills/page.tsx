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
        subtitle="I collaborate closely with product and design to deliver effective, user-focused solutions, while contributing across the full stack and driving architectural decisions. I have strong attention to detail in UI implementation, system design, and code organization, ensuring high-quality, scalable solutions. I also value clear documentation and knowledge sharing to support team efficiency and long-term maintainability."
      />
      <div className="space-y-20">
        {skills.map(({ category, items }) => (
          <section
            key={category}
            aria-labelledby={category}
            className="md:border-l md:border-zinc-700/40 md:pl-6"
          >
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 id={category} className="text-sm font-semibold text-zinc-100">
                {formatTitle(category)}
              </h2>
              <div className="md:col-span-3">
                <ul role="list" className="space-y-4">
                  {items.map(({ title, level }) => (
                    <li key={title}>
                      <p className="mb-1 text-sm text-zinc-400">{title}</p>
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
