import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from 'react-hook-form';
import { Helmet } from "react-helmet-async";



const Register = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, googleLogin, updateUserProfile } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();



    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(data.name, data.photoURL)
                    .then(result => {
                        console.log(result);
                        reset();
                        toast.success("Registration Successful & You're Logged in!", {
                            position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                        });
                        navigate('/');
                    })
                    .catch(error => {
                        console.log(error.message)
                    })

                   



                setTimeout(() => {
                    navigate(location.state?.from ? location.state.from : '/');
                }, 2000);
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Email already registered! Please Login now", {
                    position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                });


                setTimeout(() => {
                    navigate(location.state?.from ? location.state.from : '/login');
                }, 2000);
            })
    };



    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                toast.success("Login with Google Successful!", {
                    position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                });


                setTimeout(() => {
                    navigate(location.state?.from ? location.state.from : '/');
                }, 2000);
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Email or Password error!", {
                    position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                });

                setTimeout(() => {
                    navigate(location.state?.from ? location.state.from : '/login');
                }, 2000);
            })
    }


    return (
        <div>
            <Helmet>
                <title>Asif`s Restaurant | Sign up</title>
            </Helmet>
            <div className="md:flex">
                <div className="hero min-h-screen mt-4 lg:w-4/5 md:w-5/6">
                    <div className="hero-content flex-col w-full">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Sign up!</h1>
                        </div>
                        <div className="card flex-shrink-2 w-full max-w-sm border-2 border-orange-600">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Your Name</span>
                                    </label>
                                    <input type="text" name="name"  {...register("name", { required: true })} placeholder="name" className="input input-bordered text-black" />
                                    {errors.name && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Photo URL</span>
                                    </label>
                                    <input type="text" name="photoURL"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered text-black" />
                                    {errors.name && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" name="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered text-black" />
                                    {errors.email && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" name="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, maxLength: 20 })} placeholder="password" className="input input-bordered text-black" />
                                    {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be at least 6 characters</span>}
                                    {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be at most 20 characters</span>}
                                    {errors.password?.type === 'pattern' && <span className="text-red-600">Password must contain at least one special character, one uppercase letter and at least one number</span>}

                                </div>
                                <div className="form-control mt-6">
                                    <button className="text-white py-2 rounded-xl font-bold bg-orange-600">Sign Up</button>
                                </div>


                            </form>
                            <div className="flex justify-center">
                                <label className="label ">
                                    <p>Already have an Account? <Link to="/login" className="underline text-orange-600 font-bold">Sign in</Link></p>
                                </label>
                            </div>
                            <div className="text-center">
                                <p>--or--</p>
                                <p>continue with</p>
                                <div onClick={handleGoogleLogin} className="flex justify-center my-2 mx-10 border-2 rounded-lg border-orange-600">
                                    <p className="flex gap-2 p-2  bg-white"><FcGoogle className="text-2xl "></FcGoogle> Google</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;