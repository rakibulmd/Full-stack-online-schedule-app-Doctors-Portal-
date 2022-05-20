import React from "react";
import { useForm } from "react-hook-form";
import doctor from "../../../assets/images/appointment.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const ConnectForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div style={{ background: `url(${doctor})` }} className="mt-10 py-10">
            <h2 className="text-center text-xl text-primary">Contact us</h2>
            <h2 className="text-3xl text-center text-white">
                Stay Connected With Us
            </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-xs mx-auto mt-10"
            >
                <div className="mb-5">
                    <input
                        className="input input-bordered input-accent w-full max-w-xs"
                        placeholder="Email Address"
                        type="email"
                        {...register("email")}
                    />
                </div>
                <div className="mb-5">
                    <input
                        className="input input-bordered input-accent w-full max-w-xs"
                        placeholder="Subject"
                        type="text"
                        {...register("subject")}
                    />
                </div>
                <div>
                    <textarea
                        className="input input-bordered input-accent w-full max-w-xs h-20"
                        placeholder="Your Message"
                        type="text"
                        {...register("message")}
                    />
                </div>

                <PrimaryButton text={"Submit"} type="submit"></PrimaryButton>
            </form>
        </div>
    );
};

export default ConnectForm;
