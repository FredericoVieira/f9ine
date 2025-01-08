import Link from "next/link";
import { Header, PhotoGrid, SocialMedia } from "@/components";

const Home = () => {
  return (
    <>
      <Header title="Hey, I'm Fred!" />
      <div className="space-y-7 text-base text-zinc-400 mb-12 sm:mb-16">
        <p>
          I&apos;m a Senior Product Engineer with 10+ years of experience
          building scalable, user-focused applications. I specialize in React
          and modern frontend architectures, with a strong focus on UX and
          product development.
        </p>
        <p>
          I enjoy turning complex requirements into simple, intuitive
          experiences, working closely with product and design to deliver
          high-impact features.
        </p>
        <p>
          With a degree in Computer Engineering, my background spans front-end,
          back-end, and cloud, but my core strength is building
          high-performance, user-facing interfaces.
        </p>
      </div>
      <PhotoGrid />
      <div className="space-y-7 text-base text-zinc-400 mb-12 sm:mb-16">
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
