import { supabase } from "./client";

type GroupedUserLikes = Record<string, number>;

export const getLikes = async (slug: string, userIP: string) => {
  const { data } = await supabase
    .from("post_likes")
    .select("user_ip, likes")
    .eq("slug", slug);

  const groupedData =
    data?.reduce((acc, { user_ip, likes }) => {
      if (!acc[user_ip]) {
        acc[user_ip] = 0;
      }

      acc[user_ip] += likes;
      return acc;
    }, {} as GroupedUserLikes) ?? {};

  const userTotalLikes = groupedData[userIP] || 0;

  const postTotalLikes = Object.values(groupedData).reduce(
    (sum, likes) => sum + likes,
    0
  );

  return {
    postTotalLikes,
    userTotalLikes,
  };
};

type IncrementLikesType = {
  slug: string;
  userIP: string;
  currentLikes: number;
};

export const incrementLikes = async ({
  slug,
  userIP,
  currentLikes,
}: IncrementLikesType) => {
  await supabase
    .from("post_likes")
    .upsert({ slug, user_ip: userIP, likes: currentLikes });
};
