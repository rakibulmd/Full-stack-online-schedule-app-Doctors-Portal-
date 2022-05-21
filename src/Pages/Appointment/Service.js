import React from "react";
const Service = ({ service, setTreatment }) => {
    const { name, slots, available } = service;

    return (
        <div className="card lg:m-w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {available.length ? (
                        <span>{available[0]}</span>
                    ) : (
                        <span className="text-rose-600">Try another date.</span>
                    )}
                </p>
                <p>
                    {available.length} {slots.length > 1 ? "Spaces " : "Space "}{" "}
                    Available
                </p>
                <div className="card-actions justify-center pt-4">
                    <label
                        onClick={() => {
                            setTreatment(service);
                        }}
                        disabled={available.length === 0}
                        className="btn btn-secondary text-white modal-button"
                        htmlFor="service-modal"
                    >
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;
