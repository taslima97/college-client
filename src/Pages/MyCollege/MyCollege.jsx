import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Client from "./Client";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";


const MyCollege = () => {
    const [clients, setClients] = useState([]);
    // console.log(clients)
    const { user } = useContext(AuthContext);
    // console.log(user.email)
    const url = `http://localhost:5000/users/${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setClients(data))
    }, [url])

    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    };



    return (
        <div className="my-20">
            <SectionTitle heading={'my college'}></SectionTitle>

            <div className="grid grid-cols-2 gap-10">
                {
                    clients.map(client => <Client key={client._id} client={client}></Client>)
                }
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-slate-200 my-10">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Please add review</span>
                </label>
                <input type="text" {...register("review", { required: true })} placeholder="your review" className="input input-bordered " />
            </div>
            <div className="form-control mt-2 w-1/3 mx-auto">
                <input className="btn bg-amber-500" type="submit" value="submit" />
            </div>
            </form>

        </div>

    );
};

export default MyCollege;