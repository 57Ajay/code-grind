import PostForm from "@/components/PostForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Post = async()=> {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())){
    redirect("/api/auth/login");
  }
  return (
    <main className="flex max-h-screen flex-col pt-24 text-center py-2">
        <h1 className="text-5xl font-bold mb-7 text-stone-900">Post Here</h1>
        <PostForm />
    </main>
  )
}


export default Post;
