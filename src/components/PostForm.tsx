import CreatePost from "@/actions/CreatePost"
const PostForm = ()=>{
return(
        <form action={CreatePost} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 md:w-1/3 mx-auto">
            <label htmlFor="title" className="text-lg font-semibold text-gray-300">Title</label>
            <input type="text" id="title" name="title" className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-zinc-800 font-bold" />
        </div>
        <div className="flex flex-col gap-1 w-[90%] md:w-2/3 mx-auto">
            <label htmlFor="body" className="text-lg font-semibold text-gray-300">Body</label>
            <textarea id="body" name="body" rows={5} cols={33} className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-zinc-800"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 w-1/4 mx-auto my-10">Submit</button>
    </form>

)
}

export default PostForm;