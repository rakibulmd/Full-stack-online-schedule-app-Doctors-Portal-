import React from "react";
import auth from "../../firebase.init";
import {
    useSignInWithGoogle,
    useCreateUserWithEmailAndPassword,
    useSendEmailVerification,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, verificationError] =
        useSendEmailVerification(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        const displayName = data.name;
        async function register() {
            await createUserWithEmailAndPassword(data.email, data.password);
            await sendEmailVerification();
            await updateProfile({ displayName });
            navigate("/appointment");
        }
        register();
    };
    // if (googleUser || user) {
    //     console.log(googleUser, user);
    // }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-secondary">
                        Register to Doctors Portal
                    </h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    className="input input-bordered input-accent w-full max-w-xs"
                                    placeholder="Your name"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required!",
                                        },
                                        minLength: {
                                            value: 3,
                                            message:
                                                "Name minimum 3 characters",
                                        },
                                    })}
                                />
                                {errors.name?.type === "minLength" && (
                                    <span className="text-rose-600">
                                        {errors.name?.message}
                                    </span>
                                )}
                                {errors.name?.type === "required" && (
                                    <span className="text-rose-600">
                                        {errors.name?.message}
                                    </span>
                                )}
                            </div>
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

                            {loading || updating ? (
                                <button className="btn loading w-full mt-5 text-white">
                                    loading
                                </button>
                            ) : (
                                <input
                                    className="btn bg-accent w-full mt-5 text-white"
                                    type="submit"
                                    value="Register"
                                />
                            )}
                        </form>
                        <p>
                            Already registered?{" "}
                            <Link
                                to="/login"
                                className="text-blue-700 underline"
                            >
                                Log In here
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

export default Register;
