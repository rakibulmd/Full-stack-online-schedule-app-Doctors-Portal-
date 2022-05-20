import React from "react";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:m-w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {slots.length ? (
                        <span>{slots[0]}</span>
                    ) : (
                        <span className="text-rose-600">Try another date.</span>
                    )}
                </p>
                <p>
                    {slots.length} {slots.length > 1 ? "Spaces " : "Space "}{" "}
                    Available
                </p>
                <div class="card-actions justify-center pt-4">
                    <button
                        disabled={slots.length === 0}
                        className="btn btn-secondary text-white"
                    >
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;
