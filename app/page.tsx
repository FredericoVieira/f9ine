import Link from "next/link";
import { Header, PhotoGrid, SocialMedia } from "@/components";

const Home = () => {
  return (
    <>
      <Header title="Hey, I'm Fred!" />
      <div className="mb-12 space-y-7 text-base text-zinc-400 sm:mb-16">
        <p>
          I&apos;m a Senior S Engineer with 10+ years of experience building
          user-facing products at the intersection of engineering, product, and
          design, turning complex requirements into intuitive, high-performance
          interfaces.
        </p>
        <p>
          I enjoy turning complex requirements into simple, intuitive
          experiences, working closely with product and design to deliver
          high-impact features.
        </p>
        <p>
          With a degree in Computer Engineering, my background spans the full
          software development lifecycle, from design and development to
          testing, deployment, and maintenance, while driving architectural
          decisions that improve engineering quality, developer experience, and
          product delivery.
        </p>
      </div>
      <PhotoGrid />
      <div className="mb-12 space-y-7 text-base text-zinc-400 sm:mb-16">
        <p>
          Over the past few years, I&apos;ve been writing about technology,
          sharing practical insights on programming and professional growth
          based on what I&apos;ve learned along the way.
        </p>
        <p>
          I write in both English and Portuguese, focusing on keeping the
          content simple and accessible. My work is available on my{" "}
          <Link
            href="/blog"
            className="underline underline-offset-2 transition-all hover:text-zinc-100"
          >
            blog
          </Link>{" "}
          and social platforms.
        </p>
      </div>
      <SocialMedia />
    </>
  );
};

export default Home;
