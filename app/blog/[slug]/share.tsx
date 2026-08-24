"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import share from "@/public/icons/share.svg";

const Share = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showTooltip) {
      timer = setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showTooltip]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowTooltip(true);
    } catch (err) {
      console.error("Failed to copy URL: ", err);
    }
  };

  return (
    <div className="relative inline-block">
      <button onClick={copyToClipboard}>
        <Image src={share} alt="Share" className="h-5 w-8" />
      </button>
      {showTooltip && (
        <div className="absolute -left-1/2 top-9 z-10 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-neutral-800 px-4 py-2 lg:left-1/2">
          <div className="absolute -top-1.5 right-4 h-3 w-3 -translate-x-1/2 rotate-45 transform bg-neutral-800 lg:left-1/2" />
          Link copied!
        </div>
      )}
    </div>
  );
};

export default Share;
