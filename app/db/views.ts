import { supabase } from "./client";

export const getViews = async (slug: string) => {
  const { data } = await supabase
    .from("post_views")
    .select("views")
    .eq("slug", slug)
    .single();

  const { views = 1 } = data ?? {};
  return views;
};

export const incrementViews = async (slug: string, currentViews: number) => {
  await supabase.from("post_views").upsert({ slug, views: currentViews + 1 });
};
