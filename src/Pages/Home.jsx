import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";
import { FaStar } from "react-icons/fa";
import ModalComponent from "./ModalComponent"; // Import Modal

export default function HeroSection() {
    const [isToggled, setIsToggled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="container-fluid home-section pt-5">
            <div>
                {/* Logo Image */}
                <img
                    src="/image/iconlogo.png"
                    alt="Top Logo"
                    className={`mb-3 top-image transition-all ${isToggled ? "grayscale" : ""}`}
                />

                {/* Heading with Toggle Button */}
                <div className="heading-container">
                    <h1 className="display-4">
                        Turning C
                        <span className="toggle-container">
                            <label className="toggle-label">
                                <input
                                    type="checkbox"
                                    className="toggle-input"
                                    checked={isToggled}
                                    onChange={() => setIsToggled(!isToggled)}
                                />
                                <span className="toggle-slider">
                                    <span className="d-block"></span>
                                </span>
                            </label>
                        </span>
                        l ideas
                    </h1>
                    <h1 className="display-4">to great products</h1>
                </div>

               
                <span className="text-secondary mt-3">U1CORE Bureau is a strategic design partner focused on</span><br/>
                <span className="text-secondary mt-3">delivering real business value through creative and efficient product design.</span>

                {/* Button */}
                <div className="button-container pt-2 mb-3">
                    <button className="book-button" onClick={handleShow}>Book a Free Call</button>
                </div>

                {/* Rating Section */}
                <div className="rating-section text-center py-4">
                    <div className="rating-badge d-inline-flex align-items-center justify-content-center">
                        <span className="rating-text">5.0</span>
                        <FaStar className="star-icon" />
                    </div>


                    <div className="company-logos d-flex justify-content-center mt-3 flex-wrap gap-3">
                        <span className="company">Upwork</span>
                        <span className="company">Clutch</span>
                        <span className="company">GoodFirms</span>
                        <span className="company">Designrush</span>
                    </div>

                </div>
            </div>
            <ModalComponent show={showModal} handleClose={handleClose} />

        </div>
    );
}
