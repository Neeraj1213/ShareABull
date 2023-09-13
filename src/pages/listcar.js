import React from "react";
import { Link } from "react-router-dom";
import "./listcar.css";

export const MacbookAir = () => {
    return (
        <div className="macbook-air">
            <div className="div">
                <div className="group">
                    <div className="overlap-group">
                        <div className="text-wrapper">ShareABull</div>
                        <div className="text-wrapper-2">Login/Signup</div>
                        <Link className="text-wrapper-3" to="/macbook-air-u45-2">
                            List Your Car
                        </Link>
                        <div className="text-wrapper-4">Find a Car</div>
                        <div className="text-wrapper-5">Book and Drive</div>
                        <div className="text-wrapper-6">Review and Share</div>
                    </div>
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap">
                        <div className="text-wrapper-7">Add a new car</div>
                    </div>
                </div>
                <p className="model-hyundai-verna">
                    Model: Hyundai Verna
                    <br />
                    Location: Lot 36, USF
                    <br />
                    Availability: M/W/F&nbsp;&nbsp;
                    <br />
                    Times : 1:00PM-5:00PM
                </p>
                <p className="model-toyota-camry">
                    Model: Toyota Camry
                    <br />
                    Location: Lot 6, FIU
                    <br />
                    Availability: TR&nbsp;&nbsp;
                    <br />
                    Times : 8:00AM-5:00PM
                </p>
                <img className="image" alt="Image" src="image-1.png" />
                <img className="img" alt="Image" src="image-2.png" />
            </div>
        </div>
    );
};
