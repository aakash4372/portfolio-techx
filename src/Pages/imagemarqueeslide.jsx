import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./imagemarqueeslide.css";
import ModalComponent from "./ModalComponent"; // Import Modal

const images = [
    "/image/p1.jpg",
    "/image/p2.jpg",
    "/image/p3.jpg",
    "/image/p4.jpg",
    "/image/p5.jpg",
    "/image/p6.jpg",
];

const Imagemarquee = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <div className="Imagemarqueeslid">


                <div className="hero-section text-center text-dark p-5">
                    <>
                        <h1 >Create to Captivate</h1>
                        <p className="lead pt-3">
                        U1Core is your trusted design partner, helping you achieve success and boost sales with expert-driven, impactful solutions.
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
