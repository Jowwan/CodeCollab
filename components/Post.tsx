"use client";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface PostType {
  id: number;
  title: string;
  content: string;
  created_at: string;
  made_by: string;
}

const Post = ({ post }: { post: PostType }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("/loading.webp");

  useEffect(() => {
    const getInfo = async () => {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", post.made_by)
        .single();

      if (!error) {
        setName(data.display_name);
        setAvatar(data.avatar_url);
      }
    };

    getInfo();
  }, []);

  return (
    <div className="w-full bg-gradient-to-t rounded-3xl from-slate-800 to-slate-900 px-20 py-10 mb-20">
      <p className="text-center text-3xl font-mono font-bold text-cyan-300 mb-20 border-b-2 border-cyan-300 pb-4 break-all">
        {post.title}
      </p>
      <p className="text-cyan-100 opacity-80 text-xl break-all mb-10">
        {post.content}
      </p>
      <div className="flex justify-end items-center gap-6">
        <p className="text-gray-400">
          Made by: <span className="text-cyan-200 font-bold ml-2">{name}</span>
        </p>
        <div className="rounded-full overflow-hidden w-[50px] h-[50px] border-2 border-sky-500 sm:block hidden">
          <Image
            src={avatar}
            alt="user-image"
            width={50}
            height={50}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
