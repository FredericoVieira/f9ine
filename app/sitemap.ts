import { getPostsData } from "@/lib";

const pages = ["", "career", "skills", "projects", "blog", "uses"];

const sitemap = () => {
  const posts = getPostsData().map(({ slug, publishedAt }) => ({
    url: `https://f9ine.com/blog/${slug}`,
    lastModified: publishedAt,
  }));

  const routes = pages.map((route) => ({
    url: `https:/f9ine.com/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
};

export default sitemap;
