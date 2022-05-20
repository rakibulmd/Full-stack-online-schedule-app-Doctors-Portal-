import React from "react";

const PrimaryButton = ({ text }) => {
    return (
        <button className="btn btn-primary uppercase text-white bg-gradient-to-tr from-secondary to-primary">
            {text}
        </button>
    );
};

export default PrimaryButton;
