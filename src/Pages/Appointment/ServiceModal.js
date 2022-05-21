import { format } from "date-fns";
import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const ServiceModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots, available } = treatment;
    const formattedDate = format(date, "PP");
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            patientEmail: user.email,
            patientName: user.displayName,
            patientPhone: event.target.phone.value,
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
        };

        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast.success(
                        `Your booking is successful at ${formattedDate} at ${slot}`
                    );
                } else {
                    toast.error(
                        `Your already have an appointment on ${data?.booking?.date} at ${data?.booking?.slot}`
                    );
                }
                refetch();
                setTreatment(null);
            });
    };
    return (
        <div>
            <input
                type="checkbox"
                id="service-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label
                        htmlFor="service-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form
                        className="grid grid-cols-1 gap-3 justify-items-center mt-5"
                        onSubmit={handleBooking}
                    >
                        <input
                            type="text"
                            value={`${format(date, "PP")}`}
                            readOnly
                            className="input input-bordered w-full max-w-xs"
                        />
                        <select
                            name="slot"
                            className="select select-bordered w-full max-w-xs"
                        >
                            {available.map((slot, i) => (
                                <option readOnly key={i} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            name="name"
                            type="text"
                            value={user?.displayName}
                            readOnly
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            name="email"
                            type="email"
                            value={user?.email}
                            readOnly
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            name="phone"
                            type="text"
                            required
                            placeholder="Your phone"
                            className="input input-bordered w-full max-w-xs"
                        />

                        <input
                            type="Submit"
                            value="submit"
                            readOnly
                            className=" btn btn-secondary w-full max-w-xs text-white"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
