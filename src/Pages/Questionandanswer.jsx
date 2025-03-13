import React from "react";
import { Accordion, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Questionandanswer.css'

const FAQ = () => {
  return (
   <div className="faq-section">
     <Container className="d-flex flex-column align-items-center py-3">
      <h1 className="text-white mb-3">FAQ</h1>
      <Accordion className="w-100 mt-3" style={{ maxWidth: "700px" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do we start working together?</Accordion.Header>
          <Accordion.Body>
            <p><strong>It's simple!</strong></p>
            <p><strong>Contact Us</strong> – Fill out the contact form or email us.</p>
            <p><strong>Discovery Call</strong> – We discuss your project goals, requirements, and vision.</p>
            <p><strong>Proposal & Pricing</strong> – We provide a clear cost estimate and timeline.</p>
            <p><strong>Kickoff & Execution</strong> – Once approved, we begin the design and development process.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How do you estimate project costs?</Accordion.Header>
          <Accordion.Body>We analyze project scope, complexity, and timeline to determine costs.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How is U1CORE different from other design agencies?</Accordion.Header>
          <Accordion.Body>We offer a unique approach, focusing on user-centric designs and innovation.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is the difference between UI and UX design?</Accordion.Header>
          <Accordion.Body>
            UI (User Interface) focuses on the look and feel, while UX (User Experience) focuses on usability and functionality.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>How long does it take to complete a project?</Accordion.Header>
          <Accordion.Body>
            Project timelines vary based on complexity, but we ensure timely delivery with a structured process.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Can you redesign my existing website or app?</Accordion.Header>
          <Accordion.Body>
            Yes, we specialize in revamping websites and apps to improve design and functionality.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>What industries do you specialize in?</Accordion.Header>
          <Accordion.Body>
            We cater to various industries including tech, healthcare, e-commerce, and more.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        <p className="text-white mt-4">Ask a question if you haven't found the answer you need:</p> <br/>
      <div className="mt-1 text-center bottom-btn">
        <Button variant="warning" className="question">Ask a Question</Button>
      </div>
    </Container>
   </div>
  );
};

export default FAQ;
