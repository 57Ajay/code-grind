import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";

const Id = async({ params }: { params: {id: string}})=>{
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())){
        redirect("/api/auth/login");
  }
  await new Promise((resolve) => setTimeout(resolve, 100));
  const post = await prisma.post.findUnique({
      where: {
          id: parseInt(params.id)
      }
  })
  if (!post) {
      notFound();
  }
return (
  <main className="text-center pt-[20px] px-5 min-h-screen">
    <h1 className="text-2xl font-semibold">{post.title}</h1>
    <p className="mt-5 p-1 font-normal border border-zinc-300 rounded-md bg-zinc-800">{post.body}</p>
  </main>
)
}

export default Id;