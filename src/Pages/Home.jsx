import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";

export default function HeroSection() {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <div className="container-fluid home-section pt-5">
            {/* Logo */}
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
                <h1 className="sub-heading">to great products</h1>
            </div>

            {/* Description */}
            <p className="text-secondary mt-3 px-3">
                U1CORE Bureau is a strategic design partner focused on delivering real business value through creative and efficient product design.
            </p>

            {/* Button */}
            <button className="book-button">
                Book a Free Call
            </button>
        </div>
    );
}
