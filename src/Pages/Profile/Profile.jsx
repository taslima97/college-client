import { useLoaderData } from "react-router-dom";


const Profile = () => {
    const client = useLoaderData();
    console.log(client)
    return (
        <div>
            
        </div>
    );
};

export default Profile;