import React, { useEffect } from "react";
import {
    useSignInWithGoogle,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    useEffect(() => {
        if (googleUser || user) {
            navigate(from, { replace: true });
        }
    }, [user, from, location, googleUser, navigate]);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-secondary">
                        Login
                    </h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    className="input input-bordered input-accent w-full max-w-xs"
                                    placeholder="Your email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required!",
                                        },
                                        pattern: {
                                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                            message: "Provide valid email",
                                        },
                                    })}
                                />
                                {errors.email?.type === "pattern" && (
                                    <span className="text-rose-600">
                                        {errors.email?.message}
                                    </span>
                                )}
                                {errors.email?.type === "required" && (
                                    <span className="text-rose-600">
                                        {errors.email?.message}
                                    </span>
                                )}
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    className="input input-bordered input-accent w-full max-w-xs"
                                    placeholder="Your email"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required!",
                                        },
                                        minLength: {
                                            value: 6,
                                            message:
                                                "At least 6 character long",
                                        },
                                    })}
                                />
                                {errors.password?.type === "required" && (
                                    <span className="text-rose-600">
                                        {errors.password?.message}
                                    </span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className="text-rose-600">
                                        {errors.password?.message}
                                    </span>
                                )}
                            </div>
                            {error && (
                                <span className="text-rose-600">
                                    {error?.message}
                                </span>
                            )}

                            {loading ? (
                                <button className="btn loading w-full mt-5 text-white">
                                    loading
                                </button>
                            ) : (
                                <input
                                    className="btn bg-accent w-full mt-5 text-white"
                                    type="submit"
                                    value="Log In"
                                />
                            )}
                        </form>
                        <p>
                            New to Doctors Portal?{" "}
                            <Link
                                to="/register"
                                className="text-blue-700 underline"
                            >
                                Create an account
                            </Link>
                        </p>
                    </div>
                    <div className="divider">OR</div>
                    {googleError && (
                        <span className="text-rose-500">
                            {googleError?.message}
                        </span>
                    )}
                    {googleLoading ? (
                        <button className="btn loading">loading</button>
                    ) : (
                        <button
                            onClick={() => {
                                signInWithGoogle();
                            }}
                            className="btn btn-outline"
                        >
                            Continue with GOOGLE
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
