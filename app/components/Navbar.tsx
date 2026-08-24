import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/career": {
    name: "career",
  },
  "/skills": {
    name: "skills",
  },
  "/projects": {
    name: "projects",
  },
  "/blog": {
    name: "blog",
  },
  "/uses": {
    name: "uses",
  },
};

const Navbar = () => {
  return (
    <aside className="-ml-[8px] -mr-[8px] mb-14 mt-10 flex flex-row items-center justify-between tracking-tight">
      <nav id="nav" className="flex">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="px-2 py-1 transition-all hover:text-neutral-400"
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Navbar;
