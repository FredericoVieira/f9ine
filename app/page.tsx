import Link from "next/link";
import { Header, PhotoGrid, SocialMedia } from "@/components";

const Home = () => {
  return (
    <>
      <Header title="Hey, I'm Fred!" />
      <div className="space-y-7 text-base text-zinc-400 mb-12 sm:mb-16">
        <p>
          I am a seasoned full-stack developer with more than ten years of
          transforming complex challenges into smart user-centric solutions,
          with a deep focus on front-end excellence.
        </p>
        <p>
          With a degree in Computer Engineering, I have expertise in crafting
          high-performance applications using React and React Native, backed by
          a proven track record in creating intuitive interfaces, data
          visualization, and mobile apps.
        </p>
        <p>
          I am passionate about leveraging JavaScript, Node.js, and Python to
          build innovative products.
        </p>
      </div>
      <PhotoGrid />
      <div className="space-y-7 text-base text-zinc-400 mb-12 sm:mb-16">
        <p>
          Over the past few years, I have been writing about technology,
          programming tips, and professional growth. My goal is to share
          knowledge and help others with what I have learned.
        </p>
        <p>
          I write in both English and Portuguese, aiming to keep the content
          simple and enjoyable. You can find my work on my{" "}
          <Link
            href="/blog"
            className="underline underline-offset-2 transition-all hover:text-zinc-100"
          >
            blog
          </Link>{" "}
          and social media!
        </p>
      </div>
      <SocialMedia />
    </>
  );
};

export default Home;
