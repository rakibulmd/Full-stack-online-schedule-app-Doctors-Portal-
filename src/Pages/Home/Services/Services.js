import React from "react";
import Service from "../Service/Service";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import cavity from "../../../assets/images/cavity.png";
const Services = () => {
    const services = [
        { title: "Fluride Treatment", img: fluoride },
        { title: "Cavity Filling", img: cavity },
        { title: "Teeth Whitening", img: whitening },
    ];
    return (
        <div className="text-center p-4 mt-12">
            <h2 className="text-secondary text-xl font-bold py-3">
                Our Services
            </h2>
            <h3 className="text-4xl">Services We Provide</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-5 mt-12">
                {services.map((service, i) => (
                    <Service
                        title={service.title}
                        img={service.img}
                        key={i}
                    ></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;
