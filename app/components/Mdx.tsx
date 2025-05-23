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

const ol = (props: ComponentPropsWithoutRef<"ol">) => (
  <ol className="list-decimal pl-6 my-4" {...props} />
);

const ul = (props: ComponentPropsWithoutRef<"ul">) => (
  <ul className="list-disc pl-6 my-4" {...props} />
);

const li = (props: ComponentPropsWithoutRef<"li">) => (
  <li className="pl-4 mb-4" {...props} />
);

const p = (props: ComponentPropsWithoutRef<"p">) => (
  <p className="mb-4" {...props} />
);

const pre = (props: ComponentPropsWithoutRef<"pre">) => (
  <pre
    className="text-sm text-wrap bg-neutral-800 my-8 p-4 rounded-lg"
    {...props}
  />
);

const MdxComponents: MdxComponentsType = {
  code,
  img,
  ol,
  ul,
  li,
  p,
  pre,
};

export default MdxComponents;
