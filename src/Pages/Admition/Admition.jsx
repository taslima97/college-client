import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";



const Admition = () => {

    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/users', {
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
        <div>
            <SectionTitle heading={'our admission panel'}></SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-slate-200 my-10">
           <div className="grid md:grid-cols-2 gap-6">
           <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} placeholder="your name" className="input input-bordered " />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photo", { required: true })} placeholder="your photo" className="input input-bordered " />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered " />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Phone</span>
                </label>
                <input type="text" {...register("phone", { required: true })} placeholder="your phone" className="input input-bordered " />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">address</span>
                </label>
                <input type="text" {...register("address", { required: true })} placeholder="your address" className="input input-bordered " />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Subject</span>
                </label>
                <input type="text" {...register("subject", { required: true })} placeholder="your subject" className="input input-bordered " />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Date of birth</span>
                </label>
                <input type="text" {...register("born", { required: true })} placeholder="your born" className="input input-bordered " />
            </div>
           </div>


            <div className="form-control mt-2 w-1/3 mx-auto">
               <Link to='/mycollege'> <input className="btn bg-amber-500" type="submit" value="submit" /></Link>
            </div>
        </form>
        </div>
    );
};

export default Admition;