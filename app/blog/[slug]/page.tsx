import { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components";
import {
  formatDate,
  getPost,
  handleLanguageChange,
  LanguageType,
  getIP,
} from "@/lib";
import { getViews, incrementViews } from "@/db";
import bolt from "@/public/icons/bolt.svg";
import Likes from "./likes";
import Share from "./share";

const BASE_URL = "https://f9ine.com";

type BlogPostType = {
  params: {
    slug: string;
  };
  searchParams: {
    language: LanguageType;
  };
};

export async function generateMetadata({
  params,
  searchParams,
}: BlogPostType): Promise<Metadata | undefined> {
  const { slug } = params;
  const { language } = searchParams;

  const { title, summary, keywords } = await getPost(slug, language);

  return {
    metadataBase: new URL(`${BASE_URL}/blog/${slug}?language=${language}`),
    title,
    description: summary,
    keywords: keywords,
    authors: [{ name: "Frederico Vieira", url: BASE_URL }],
  };
}

const BlogPost = async ({ params, searchParams }: BlogPostType) => {
  const { slug } = params;
  const { language } = searchParams;

  const userIP = getIP(headers);

  const { title, summary, publishedAt, readTime, content } = await getPost(
    slug,
    language
  );

  if (!title) {
    return <span>The blog post you have requested does not exist.</span>;
  }

  const views = await getViews(slug);
  incrementViews(slug, views);

  const subnote = (
    <div className="flex justify-between">
      <time dateTime={publishedAt}>
        <span>{formatDate(publishedAt, language)}</span>
      </time>
      <div className="flex items-center gap-1">
        <span>{readTime} min read</span>
        <Image src={bolt} alt="Bolt" className="h-2 w-2 brightness-50" />
        <span>{views} views</span>
      </div>
    </div>
  );

  const titleAction = (
    <Link
      href={`?language=${handleLanguageChange(language)}`}
      className="text-lg transition-all text-zinc-400 hover:text-zinc-100 py-1 px-2"
    >
      {handleLanguageChange(language)}
    </Link>
  );

  return (
    <article>
      <Header
        title={title}
        titleAction={titleAction}
        subtitle={summary}
        subnote={subnote}
      />
      {content}
      <div className="text-sm flex items-center justify-end gap-2 lg:mx-12 lg:flex-col lg:gap-4 lg:items-start lg:fixed lg:right-[8%] lg:bottom-[30%] xl:right-[16%] 2xl:right-[20%]">
        <Likes slug={slug} userIP={userIP} />
        <Share />
      </div>
    </article>
  );
};

export default BlogPost;
