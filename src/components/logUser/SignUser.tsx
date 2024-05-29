import { getKindeServerSession, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Logout from "./Login";
import Login from "./Login";

export const SignUser = async ()=>{
    const { isAuthenticated } = getKindeServerSession();
    const session = await isAuthenticated();
    return(
        <div> 
            {session ? <Logout/> : <Login/>}
        </div>
    )
}

export default SignUser;