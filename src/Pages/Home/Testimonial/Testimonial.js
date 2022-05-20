import React from "react";

const Testimonial = ({ review }) => {
    const { name, message, img } = review;
    return (
        <div class="card ;g:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>I{message}</p>
                <div class="avatar flex justify-center">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
