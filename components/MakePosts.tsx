"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState } from "react";

const MakePosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitPost = async (e: any) => {
    e.preventDefault();

    const supabase = createClient();

    if (!title || !content) return;

    const { error } = await supabase.from("posts").insert({ title, content });

    setTitle("");
    setContent("");
  };
  return (
    <div>
      <p className="text-xl mb-3 font-bold mt-5">Make a post: </p>
      <form
        onSubmit={submitPost}
        className="w-80 py-10 gap-5 flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <div>
          <p className="text-cyan-300 font-mono">Title:</p>
          <textarea
            className="rounded-lg mt-2 h-7 px-2 font-mono resize-none"
            placeholder="A Project"
            maxLength={50}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <p className="text-cyan-300 font-mono">Content:</p>
          <textarea
            className="rounded-lg mt-2 h-20 px-2 font-mono resize-none"
            placeholder="My project is..."
            maxLength={1700}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-cyan-800"
        >
          Publish post
        </button>
      </form>
    </div>
  );
};

export default MakePosts;
