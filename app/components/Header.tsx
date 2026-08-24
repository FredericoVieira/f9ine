import { ReactNode } from "react";

type HeaderProps = {
  title: string;
  titleAction?: ReactNode;
  subtitle?: string;
  subnote?: ReactNode;
};

const Header = ({ title, titleAction, subtitle, subnote }: HeaderProps) => {
  return (
    <>
      <div className="mb-4 flex items-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {titleAction}
      </div>
      {subtitle && (
        <div className={"mb-12 sm:mb-16"}>
          {subtitle && <p className="text-base text-zinc-400">{subtitle}</p>}
          {subnote && (
            <div className="mt-4 text-sm text-zinc-400">{subnote}</div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
