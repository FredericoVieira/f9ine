import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { MdxComponents } from "@/components";
import { LANGUAGES } from "@/lib";

const { EN } = LANGUAGES;
const BLOGS_DIRECTORY = path.join(process.cwd(), "app/contents/blog");

const getReadTime = (contentLength: number) => {
  const readTime = Math.ceil((contentLength / 268) * 0.6);

  return readTime;
};

const getData = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return data;
};

type DataType = {
  title: string;
  summary: string;
  keywords: string;
  publishedAt: string;
  readTime: number;
};

const getContent = async (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    components: MdxComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  const { title, summary, keywords, publishedAt } = frontmatter as DataType;

  return {
    data: {
      title,
      summary,
      keywords,
      publishedAt,
      readTime: getReadTime(fileContent.length),
    },
    content,
  };
};

export const getPostsData = () => {
  const posts = fs
    .readdirSync(BLOGS_DIRECTORY)
    .filter((file) => file.includes(`_${EN}`) && file.endsWith(".mdx"));

  const postsMetadata = posts.map((post) => {
    const slug = post.replace(/_[a-z]{2}\.mdx/i, "");
    const filePath = path.join(BLOGS_DIRECTORY, post);

    const { title, summary, publishedAt } = getData(filePath);

    return {
      slug,
      title,
      summary,
      publishedAt,
    };
  });

  return postsMetadata;
};

export const getPost = async (slug: string, language?: string) => {
  const currentLanguage = language ?? EN;

  const filePath = path.join(BLOGS_DIRECTORY, `${slug}_${currentLanguage}.mdx`);

  const { data, content } = await getContent(filePath);
  const { title, summary, keywords, publishedAt, readTime } = data;

  return {
    title,
    summary,
    keywords,
    publishedAt,
    readTime,
    content,
  };
};
