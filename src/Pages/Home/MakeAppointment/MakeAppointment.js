import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
    return (
        <section
            style={{ background: `url(${appointment})` }}
            className="flex items-center justify-center mt-48"
        >
            <div className="flex-1 hidden lg:block">
                <img className="-mt-32" src={doctor} alt="" />
            </div>
            <div className="flex-1 text-white">
                <h3 className="text-xl text-primary">Appointment</h3>
                <h3 className="text-3xl">Make An Appointment Today</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit iure facere, tempore numquam modi, reiciendis
                    non maxime aut natus debitis qui rerum corrupti temporibus
                    distinctio repellendus commodi cupiditate necessitatibus?
                    Neque distinctio nisi reiciendis adipisci est recusandae
                    doloribus beatae nesciunt autem.
                </p>
                <PrimaryButton text={"Make an Appointment"}></PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
