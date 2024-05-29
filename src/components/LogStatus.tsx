import { getKindeServerSession, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

const LogStatus = async()=>{
    const { isAuthenticated } = getKindeServerSession();
    return(
      <div>
        {!(await isAuthenticated()) ? 
        <LoginLink className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 mb-10">Login</LoginLink> :
         <LogoutLink className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 mb-10">Logout</LogoutLink>}
      </div>
    )
}

export default LogStatus;