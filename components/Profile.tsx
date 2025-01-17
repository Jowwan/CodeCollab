"use client";

import { createClient } from "@/utils/supabase/client";
import { data } from "autoprefixer";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Profile = (id: any) => {
  const [avatar, setAvatar] = useState<string>("/loading.webp");
  const [name, setName] = useState<string>("user");

  useEffect(() => {
    const getInfo = async () => {
      const supabase = createClient();

      const { error, data } = await supabase
        .from("users")
        .select("*")
        .eq("id", id.id)
        .single();

      setAvatar(data.avatar_url);
      setName(data.display_name);
    };

    getInfo();
  }, []);
  return (
    <div>
      <p className="text-xl mb-3 font-bold">Signed in as: </p>
      <div className="w-80 py-16 gap-14 flex flex-col justify-center items-center bg-gradient-to-b from-slate-950 to-slate-800">
        <div className="rounded-full overflow-hidden w-32 h-32 border-2 border-sky-500">
          <Image
            src={avatar}
            alt="user-image"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>

        <p className="font-mono text-2xl text-bold border-b-2 border-sky-500 text-sky-300">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Profile;
