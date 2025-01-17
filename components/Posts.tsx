"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useEffect, useState } from "react";
import Post from "./Post";

interface PostType {
  id: number;
  title: string;
  content: string;
  created_at: string;
  made_by: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) {
        setPosts(data);
        console.log(data);
      } else {
        console.error(error);
      }
    };

    getPosts();
  }, []);

  useEffect(() => {
    const supabase = createClient();

    const channel = supabase
      .channel("posts-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "posts" },
        (payload) => {
          setPosts((prevPosts) => [payload.new as PostType, ...prevPosts]);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return (
    <div className="">
      <p className="text-xl mb-3 font-bold">Users Posts: </p>
      <div className="w-full ">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
