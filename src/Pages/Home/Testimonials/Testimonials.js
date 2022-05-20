import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "../Testimonial/Testimonial";
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Jhankar Mahbub",
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in nostrum assumenda nulla tempore? Placeat impedit neque quos eligendi accusamus!",
            img: people1,
        },
        {
            _id: 2,
            name: "Jhankar Mahbub",
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in nostrum assumenda nulla tempore? Placeat impedit neque quos eligendi accusamus!",
            img: people2,
        },
        {
            _id: 3,
            name: "Jhankar Mahbub",
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in nostrum assumenda nulla tempore? Placeat impedit neque quos eligendi accusamus!",
            img: people3,
        },
    ];
    return (
        <section className="px-12 my-16">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-primary">
                        Testimonials
                    </h2>
                    <h3 className="text-3xl">What our patients say:</h3>
                </div>
                <div>
                    <img className="w-24 lg:w-48" src={quote} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                    <Testimonial key={review._id} review={review}></Testimonial>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
