import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Id = async({ params }: { params: {id: string}})=>{
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())){
        redirect("/api/auth/login");
  }
    return(
        <p>{params.id}</p>
    )
}

export default Id;