import React from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./imagemarqueeslide.css";

const images = [
    "/image/p1.jpg",
    "/image/p2.jpg",
    "/image/p3.jpg",
    "/image/p4.jpg",
    "/image/p5.jpg",
    "/image/p6.jpg",
];

const Home = () => {
    return (
        <div className="Imagemarqueeslid">


                <div className="hero-section text-center text-dark p-5">
                    <>
                        <h1 >Create to Captivate</h1>
                        <p className="lead pt-3">
                        U1Core is your trusted design partner, helping you achieve success and boost sales with expert-driven, impactful solutions.
                        </p>
                        <div className="bottom-btn">
                        <Button className="btn-dark mt-4">Become a Client</Button>
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

export default Home;
