import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import image from '../../assets/image/mobile-login.jpg'


const SignUp = () => {

    const { createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const { register, handleSubmit,} = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            navigate(from, {replace:true})
          })

    };
    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">

            <img className="h-80 ml-12" src={image} alt="" />
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" {...register("photo", { required: true })} placeholder="your photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: true, minLength: 6,
                          
                        })} placeholder="password" className="input input-bordered" />
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm password</span>
                            </label>
                            <input type="password" {...register("confirm password", { required: true })} placeholder="password" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-amber-500" type="submit" value="Sign up" />
                    </div>
                </form>
                <SocialLogin></SocialLogin>
                <p><small>Already have an account please <Link to='/login'>Login</Link></small></p>
            </div>
        </div>
    </div>
    );
};

export default SignUp;