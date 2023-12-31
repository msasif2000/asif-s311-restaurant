import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const Login = () => {
    const [captchaDisabled, setCaptchaDisabled] = useState(true);
    const { googleLogin, userLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    //console.log('state in the location login page', location.state)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha = e.target.value;
        if (validateCaptcha(user_captcha)) {
            setCaptchaDisabled(false);
        } else {
            setCaptchaDisabled(true);
        }
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
            .then(result => {
                // const user = result.user;
                //console.log(user);
                if (result) {
                    Swal.fire({
                        title: 'User Login Successful.',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                    navigate(from, { replace: true });
                }
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                //console.log(result.user)
                if (result) {
                    toast.success("Login with Google Successful!", {
                        position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                    });
                }


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
                <title>Asif`s Restaurant | Sign in</title>
            </Helmet>
            <div className="md:flex">
                <div className="hero min-h-screen  lg:w-4/5 md:w-5/6">
                    <div className="hero-content flex-col w-full">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card flex-shrink-2 w-full max-w-sm border-2 border-orange-600">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                                </div>
                                <div disabled={false} className="form-control mt-6">
                                    <input className={`btn btn-sm text-white py-2 rounded-xl font-bold bg-orange-600 `} type="submit" value="Sign in" disabled={captchaDisabled} />
                                </div>

                            </form>
                            <div className="flex justify-center">
                                <label className="label">
                                    <p>Don`t have an Account? <Link to="/register" className="underline text-orange-600 font-bold">Sign Up</Link></p>
                                </label>
                            </div>
                            <div className="text-center">
                                <p>--or--</p>
                                <p>continue with</p>

                            </div>
                            <div onClick={handleGoogleLogin} className="flex justify-center mx-auto mb-2 border-2 rounded-lg border-orange-600 my-1">
                                <p className="flex gap-2 p-2  bg-white"><FcGoogle className="text-2xl "></FcGoogle> Google</p>
                            </div>

                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;