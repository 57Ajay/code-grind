'use server'
import prisma from "@/lib/db";
const CreatePost= async(formData: FormData)=> {
  const title = formData.get('title') as string;
  const body = formData.get('body') as string;
  await prisma.post.create({
    data: {
      title,
      body,
    },
  });
  
}

export default CreatePost;