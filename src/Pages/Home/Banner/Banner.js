import React from "react";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
    return (
        <div className="hero min-h-screen py-6">
            <div className="hero-content gap-6 flex-col lg:flex-row-reverse">
                <img
                    src={chair}
                    className="max-w-xl w-full rounded-lg shadow-2xl"
                    alt=""
                />
                <div>
                    <h1 className="text-5xl font-bold pr-5">
                        Your new smile starts here
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary uppercase text-white bg-gradient-to-tr from-secondary to-primary">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
