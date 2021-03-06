import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Service from "./Service";
import ServiceModal from "./ServiceModal";

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${format(date, "PP")}`)
    //         .then((res) => res.json())
    //         .then((data) => setServices(data));
    // }, [date, treatment]);

    const {
        isLoading,
        error,
        data: services,
        refetch,
    } = useQuery(["available", date], () =>
        fetch(
            `http://localhost:5000/available?date=${format(date, "PP")}`
        ).then((res) => res.json())
    );
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen w-40">
                {" "}
                <button className="btn loading">loading</button>
            </div>
        );
    }
    return (
        <div className="my-10">
            <h2 className="text-center text-secondary text-xl pb-5">
                Available Appointments on Date: {format(date, "PP")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services?.map((service) => (
                    <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>
                ))}
            </div>
            {treatment && (
                <ServiceModal
                    treatment={treatment}
                    date={date}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></ServiceModal>
            )}
        </div>
    );
};

export default AvailableAppointment;
