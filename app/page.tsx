import Link from "next/link";
import { Header, PhotoGrid, SocialMedia } from "@/components";

const Home = () => {
  return (
    <>
      <Header title="Hey, I'm Fred!" />
      <div className="space-y-7 text-base text-zinc-400 mb-12 sm:mb-16">
        <p>
          I am a software engineer who is passionate about creating projects
          that simplify users&apos; lives.
        </p>
        <p>
          With a degree in Computer Engineering and over a decade of experience
          in the development of technological solutions, I have been responsible
          for developing projects in different areas such as mobile
          applications, dashboards, data, design, and communication platforms.
        </p>
        <p>
          Throughout my career, I have dealt with all software parts having
          front-end, back-end, and cloud technology skills.
        </p>
        <p>
          Over the past few years, I have been extensively engaged with
          JavaScript and React, creating amazing interfaces to improve user
          experience, but I also like to venture with Node.js and Python.
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
