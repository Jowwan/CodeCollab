import { User } from "@supabase/supabase-js";
import Image from "next/image";
import React from "react";

const SelfMessage = ({ user, text }: { user: User; text: string }) => {
  return (
    <div className="pb-10 justify-self-end flex flex-col items-end">
      <div className="flex items-center gap-4">
        <p className="text-white">{user.user_metadata.full_name}</p>
        <div className="rounded-full overflow-hidden w-[50px] h-[50px] border-2 border-sky-500">
          <Image
            src={user.user_metadata.avatar_url}
            alt="user-image"
            width={50}
            height={50}
            className="object-cover"
          />
        </div>
      </div>
      <p className="text-gray-400 pr-10 pt-5 text-wrap w-80 text-right">
        {text}
      </p>
    </div>
  );
};

export default SelfMessage;
