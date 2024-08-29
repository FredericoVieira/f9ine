import Image from "next/image";
import Link from "next/link";
import instagram from "@/public/icons/instagram.svg";
import github from "@/public/icons/github.svg";
import linkedin from "@/public/icons/linkedin.svg";
import xTwitter from "@/public/icons/x-twitter.svg";
import email from "@/public/icons/email.svg";

const socialMedia = [
  {
    icon: instagram,
    title: "Instagram",
    url: "https://www.instagram.com/f9ine.dev",
  },
  {
    icon: github,
    title: "Github",
    url: "https://github.com/FredericoVieira",
  },
  {
    icon: linkedin,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/frederico-vieira/",
  },
  {
    icon: xTwitter,
    title: "X twitter",
    url: "https://twitter.com/f9inedev",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-4 md:gap-6">
      {socialMedia.map(({ icon, title, url }) => (
        <Link
          key={title}
          href={url}
          target="_blank"
          className="text-zinc-400 hover:text-zinc-100"
        >
          <Image
            src={icon}
            alt={title}
            className="h-5 w-5 hover:brightness-[175%]"
          />
        </Link>
      ))}
      <div className="border-r-2 border-zinc-700/40" />
      <Link href="mailto:f9nine.dev@gmail.com" target="_blank">
        <div className="flex gap-4 text-zinc-400 hover:brightness-[175%]">
          <Image src={email} alt="Email" className="h-5 w-5" />
          <span className="text-sm">f9nine.dev@gmail.com</span>
        </div>
      </Link>
    </div>
  );
};

export default SocialMedia;
