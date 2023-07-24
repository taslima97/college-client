import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    
    const navigate = useNavigate();
const location = useLocation();

// eslint-disable-next-line no-unused-vars
const from = location.state?.from?.pathname || '/';
const handelGoogleSignIn = () =>{
    googleSignIn()
    .then(result=>{
        const loggedInUser = result.user;
        console.log(loggedInUser)
        
           .then(res=>res.json()) 
           .then(()=>{
           navigate(from, {replace:true});  
          
           })
        
      
    })
    
}
    return (
        <div>
            <div className="divider">OR</div>
            <div className="w-full text-center my-4">
                <button onClick={handelGoogleSignIn} className="btn btn-outline">
                   Google 
                </button>
            </div>
        </div>
    )
};

export default SocialLogin;