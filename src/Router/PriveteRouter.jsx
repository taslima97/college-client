import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const PriveteRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

if (loading) {
    <progress className="progress w-56"></progress>
}

    if (user?.email) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PriveteRouter;