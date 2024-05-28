'use server'

const CreatePost= async(formData: FormData)=> {
  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  console.log(title, body);
}

export default CreatePost;