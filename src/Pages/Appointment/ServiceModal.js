import { format } from "date-fns";
import React from "react";

const ServiceModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatment(null);
    };
    return (
        <div>
            <input type="checkbox" id="service-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label
                        for="service-modal"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 class="font-bold text-lg">{name}</h3>
                    <form
                        className="grid grid-cols-1 gap-3 justify-items-center mt-5"
                        onSubmit={handleBooking}
                    >
                        <input
                            type="text"
                            value={`${format(date, "PP")}`}
                            readOnly
                            class="input input-bordered w-full max-w-xs"
                        />
                        <select
                            name="slot"
                            class="select select-bordered w-full max-w-xs"
                        >
                            {slots.map((slot) => (
                                <option key={slot._id} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your name"
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Your email"
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="Your phone"
                            class="input input-bordered w-full max-w-xs"
                        />

                        <input
                            type="Submit"
                            value="submit"
                            class=" btn btn-secondary w-full max-w-xs text-white"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
