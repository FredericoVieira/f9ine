"use client";

import { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import { getLikes, incrementLikes } from "@/db";

const MAX_LIKES_PER_USER = 15;

type BoltSVGType = {
  clipPath: string;
};

const BoltSVG = ({ clipPath }: BoltSVGType) => {
  const path =
    "M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-8 h-8"
    >
      <path fill="var(--tw-color-neutral-600)" d={path} />
      <path
        fill="var(--tw-color-neutral-200)"
        d={path}
        style={{
          clipPath,
          transition: "clip-path 0.3s ease-in-out",
        }}
      />
    </svg>
  );
};

type LikesType = {
  slug: string;
  userIP: string;
};

const Likes = ({ slug, userIP }: LikesType) => {
  const [postLikes, setPostLikes] = useState(0);
  const [userLikes, setUserLikes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLikes() {
      const { postTotalLikes, userTotalLikes } = await getLikes(slug, userIP);
      setPostLikes(postTotalLikes);
      setUserLikes(userTotalLikes);
      setIsLoading(false);
    }
    fetchLikes();
  }, [slug, userIP]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const incrementPostLikes = useCallback(
    debounce(({ slug, userIP, currentLikes }) => {
      incrementLikes({ slug, userIP, currentLikes });
    }, 500),
    []
  );

  const handleIncrementLikes = async () => {
    setPostLikes((prevPostLikes) => prevPostLikes + 1);
    setUserLikes((prevUserLikes) => prevUserLikes + 1);

    incrementPostLikes({ slug, userIP, currentLikes: postLikes + 1 });
  };

  const fillPercentage = (userLikes / MAX_LIKES_PER_USER) * 100;
  const clipPath = `inset(${100 - fillPercentage}% 0 0 0)`;

  return (
    <div className="flex items-center">
      <button
        onClick={handleIncrementLikes}
        disabled={userLikes === MAX_LIKES_PER_USER}
      >
        <BoltSVG clipPath={clipPath} />
      </button>
      <span className="font-bold pl-2">{postLikes}</span>
    </div>
  );
};

export default Likes;
