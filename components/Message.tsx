"use client";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Message = ({ user_id, text }: { user_id: string; text: string }) => {
  const [avatar, setAvatar] = useState<string>("/loading.webp");
  const [name, setName] = useState<string>("user");

  useEffect(() => {
    const getUserInfo = async () => {
      const supabase = createClient();
      const { error, data } = await supabase
        .from("users")
        .select("*")
        .eq("id", user_id)
        .single();

      if (!error) {
        setAvatar(data.avatar_url);
        setName(data.display_name);
      }
    };
    getUserInfo();
  }, []);

  return (
    <div className="pb-10">
      <div className="flex items-center gap-4">
        <div className="rounded-full overflow-hidden w-[50px] h-[50px] border-2 border-sky-500">
          <Image
            src={avatar}
            alt="user-image"
            width={50}
            height={50}
            className="object-cover"
          />
        </div>
        <p className="text-white">{name}</p>
      </div>
      <p className="text-gray-400 pl-10 pt-5 break-words w-80">{text}</p>
    </div>
  );
};

export default Message;
