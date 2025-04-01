import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./imagemarqueeslide.css";
import ModalComponent from "./ModalComponent"; // Import Modal

const images = [
    "Banners/p1.png",
    "Banners/p2.png",
    "Banners/p3.png",
    "Banners/p4.png",
    "Banners/p5.png",
    "Banners/p6.png",
    "Banners/p7.png",
    "Banners/p8.png",
    "Banners/p9.png",
    "Banners/p10.png",
    "Banners/p11.png",
    "Banners/p12.png",
    "Banners/p13.png",
    "Banners/p14.png",
];

const Imagemarquee = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <div className="Imagemarqueeslid">


                <div className="hero-section text-center text-dark p-5">
                    <>
                        <h1 >Innovate to Elevate</h1>
                        <p className="lead pt-3 text-center">
                        BM TechX is your reliable technology partner, delivering cutting-edge solutions that drive growth, enhance efficiency, and maximize business potential.
                        </p>
                        <div className="bottom-btn">
                        <Button className="btn-dark mt-4" onClick={handleShow}>Become a Client</Button>
                        </div>
                    </>
                </div>


                <Container fluid className="marquee-container pb-5">
                    <div className="marquee">
                        {[...images, ...images].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="marquee-image"
                            />
                        ))}
                    </div>
                </Container>

                <ModalComponent show={showModal} handleClose={handleClose} />


        </div>

    );
};

export default Imagemarquee;
