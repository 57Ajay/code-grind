import PostLists from "@/components/AllPosts";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const All_posts=async()=> {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())){
    redirect("/api/auth/login");
  }
  return (
    <div className="flex max-h-screen flex-col pt-24 text-center py-2">
        <h1 className="text-5xl font-bold mb-7 text-stone-900">All Posts</h1>
        <PostLists />
    </div>
  )
}


export default All_posts;