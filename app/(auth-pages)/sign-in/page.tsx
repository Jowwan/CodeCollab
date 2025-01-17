import DiscrodBtn from "@/components/DiscrodBtn";
import GithubBtn from "@/components/GithubBtn";
import GoogleBtn from "@/components/GoogleBtn";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Login() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/");
  }

  return (
    <div className="w-full rounded-2xl shadow border-4 md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-b from-slate-950 to-slate-800 border-sky-950">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-gray-300 mb-10">
          Sign in to CodeCollab
        </h1>
        <Image
          src={"/codecollab.png"}
          alt="logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <div className="pt-8">
          <GoogleBtn />
          <GithubBtn />
          <DiscrodBtn />
        </div>
      </div>
    </div>
  );
}
