import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";
import { FaStar } from "react-icons/fa";
import { bookFreeCall } from "../Whatsapp/whatsappUtils";

export default function HeroSection() {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <div className="container-fluid home-section pt-5">
            <div>
                {/* Logo Image */}
                <img
                    src="Banners/Logo.png"
                    alt="Top Logo"
                    className={`mb-1 top-image transition-all ${isToggled ? "grayscale" : ""}`}
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

                <span className="text-secondary mt-3">BM Techx is your trusted digital partner, dedicated to</span><br/>
                <span className="text-secondary mt-3">driving business growth with innovative and effective digital strategies.</span>

                {/* Button using the imported WhatsApp function */}
                <div className="button-container pt-2 mb-3">
                    <button className="book-button" onClick={bookFreeCall}>Book a Free Call</button>
                </div>

                {/* Rating Section */}
                <div className="rating-section text-center py-4">
                    <div className="rating-badge d-inline-flex align-items-center justify-content-center">
                        <span className="rating-text">5.0</span>
                        <FaStar className="star-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}