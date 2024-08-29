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
    <aside className="flex flex-row items-center justify-between -ml-[8px] -mr-[8px] mt-10 mb-14 tracking-tight">
      <nav id="nav" className="flex">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-400 py-1 px-2"
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
