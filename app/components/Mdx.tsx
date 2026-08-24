import Image from "next/image";
import { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { ComponentPropsWithoutRef } from "react";
import { highlight } from "sugar-high";

type MdxComponentsType = MDXRemoteProps["components"];

const code = (props: ComponentPropsWithoutRef<"code">) => {
  const { children, ...propsRest } = props;
  const codeHTML = highlight(children as string);

  return (
    <code
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      className="block w-full overflow-x-auto"
      {...propsRest}
    />
  );
};

const img = (props: ComponentPropsWithoutRef<"img">) => {
  const { src = "", alt = "" } = props ?? {};

  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      className="mx-auto my-8 rounded-lg"
    />
  );
};

const h2 = (props: ComponentPropsWithoutRef<"h2">) => (
  <h2 className="mb-4 mt-8 text-xl font-semibold" {...props} />
);

const ol = (props: ComponentPropsWithoutRef<"ol">) => (
  <ol className="my-4 list-decimal pl-6" {...props} />
);

const ul = (props: ComponentPropsWithoutRef<"ul">) => (
  <ul className="my-4 list-disc pl-6" {...props} />
);

const li = (props: ComponentPropsWithoutRef<"li">) => (
  <li className="mb-4 pl-4" {...props} />
);

const p = (props: ComponentPropsWithoutRef<"p">) => (
  <p className="mb-4" {...props} />
);

const pre = (props: ComponentPropsWithoutRef<"pre">) => (
  <pre
    className="my-8 text-wrap rounded-lg bg-neutral-800 p-4 text-sm"
    {...props}
  />
);

const MdxComponents: MdxComponentsType = {
  code,
  img,
  h2,
  ol,
  ul,
  li,
  p,
  pre,
};

export default MdxComponents;
