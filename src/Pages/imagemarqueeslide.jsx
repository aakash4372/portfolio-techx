import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/imagemarqueeslide.css";
import { bookFreeCall } from "../Whatsapp/whatsappUtils";

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


    return (
        <div className="Imagemarqueeslid">


                <div className="hero-section text-center text-dark p-5">
                    <>
                        <h1 >Innovate to Elevate</h1>
                        <p className="lead pt-3 text-center">
                        BM Techx is your reliable technology partner, delivering cutting-edge solutions that drive growth, enhance efficiency, and maximize business potential.
                        </p>
                        <div className="bottom-btn">
                        <Button className="btn-dark mt-4" onClick={bookFreeCall}>Become a Client</Button>
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

                


        </div>

    );
};

export default Imagemarquee;
