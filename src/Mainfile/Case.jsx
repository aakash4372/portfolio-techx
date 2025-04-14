import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./Case.css";

const projects = [
  {
    title: "FreshBounty",
    description:
      "At BM Techx, we developed a dynamic e-commerce website designed to revolutionize online shopping. With a user-friendly interface and advanced features, the platform ensures a seamless shopping experience for customers. It integrates intuitive navigation, secure payment options, and responsive design to cater to diverse user needs, enhancing both convenience and engagement.",
    image: "Banners/p1.png",
    link: "https://freshbounty.store",
  },
  {
    title: "Red Collar App Development",
    description:
      "Building efficient, user-friendly, and scalable mobile applications is our forte. BM Techx specializes in developing innovative mobile apps like Red Collar. Our team ensures that every app we create combines sleek design with cutting-edge technology to deliver seamless performance. From ideation to deployment, our process guarantees apps tailored to meet user needs, industry standards, and market trends. Trust us to turn your vision into a reality with robust backend support and intuitive UI/UX.",
    image: "Banners/p13.png",
  },
  {
    title: "TravellersNeed",
    description:
      "BM Techx has successfully developed a cutting-edge tour package planning website tailored for travel enthusiasts. This platform streamlines trip planning by offering personalized itineraries, seamless bookings, and destination guides, all in one place. With user-friendly navigation and advanced features, it provides a hassle-free experience, ensuring every traveler can plan their dream vacation effortlessly.",
    image: "Banners/p4.png",
    link: "https://travellersneed-client.onrender.com",
  },
  {
    title: "Bezooz",
    description:
      "We at BM Techx designed and developed the Bezooz platform to transform the learning experience. Focused on interactivity and personalized education, we crafted a user-friendly and modern design to empower students and educators alike. With seamless navigation and innovative features, we’ve built a digital space that redefines learning.",
    image: "Banners/p14.png",
    link: "https://www.bezooz.com/in",
  },
  {
    title: "Rk Global Associatees",
    description:
      "BM Techx designed the website for RK Global Associates, and they did a great job. The site is neat, user-friendly, and easy to navigate. It works well on both mobile and desktop devices. The layout is clean, with all services clearly explained. Overall, the website looks professional and helps build trust with visitors.",
    image: "Banners/p17.png",
    link: "https://rkglobalassociatees.com/",
  },
  {
    title: "CHINNA CLEANING FACILITY",
    description:
      "BM Techx presents the Professional Cleaning Website, a comprehensive platform designed to optimize cleaning operations for residential, commercial, and industrial spaces. Enhance your cleaning services with streamlined processes, improved productivity, and exceptional client satisfaction.",
    image: "Banners/p2.png",
    link: "https://chinnacleaningfacility.com/",
  },
  {
    title: "LearnEng",
    description:
      "At BM Techx, we developed a dynamic website for Communicative English Training Institute, designed to facilitate effective language learning. With an intuitive interface and engaging features, the platform enhances the learning experience for students.",
    image: "Banners/p3.png",
    link: "https://learnengedu.com/",
  },
  {
    title: "Hunts World Properties",
    description:
      "BM Techx proudly presents the Hunts World Properties website, a modern and user-friendly platform designed to streamline real estate transactions. Our goal was to create a seamless experience for buyers, sellers, and investors, ensuring easy access to property listings, services, and expert guidance. At BM Techx, we are committed to building high-performance websites that enhance business visibility and customer engagement. Hunts World Properties now has a powerful online presence to serve its clients better.",
    image: "Banners/p5.png",
    link: "https://huntsworldproperties.com/",
  },
  {
    title: "JK Coaching Academy",
    description:
      "BM Techx proudly presents the JK Coaching Academy website, designed to provide a seamless and interactive learning experience. The platform offers offline and online coaching, mock tests, study materials, and career guidance, making education accessible to all. With an easy-to-use interface and features like enquiry forms and structured courses, the website helps students achieve their academic and career goals. JK Coaching Academy is committed to excellence, ensuring every learner gets the best guidance and support.",
    image: "Banners/p6.png",
    link: "https://jkcoachingacademy.com/",
  },
  {
    title: "Zhagaram Academy of Learning and Teaching",
    description:
      "BM Techx proudly presents the Zhagaram Academy of Learning and Teaching (ZALT) website, designed to seamlessly blend innovation with functionality. This platform highlights ZALT’s wide-ranging services, including offline coaching, online classes, home tutoring, workshops, and digital learning resources. With easy navigation and interactive features such as enquiry forms, the website ensures accessibility for students, educators, and parents alike. It reflects ZALT’s dedication to quality education through its publications, career guidance programs, and free virtual classes. BM Techx delivers a platform that embodies ZALT's mission while empowering learners to achieve their goals.",
    image: "Banners/p12.png",
    link: "https://zaltindia.in/",
  },
  {
    title: "Rain Info Tech",
    description:
      "We create stunning websites that captivate and engage users. Our designs are tailored to meet client expectations with perfection. Rainpic Infotech is a reflection of our expertise and creativity. We prioritize seamless user experience and modern aesthetics. Client satisfaction is our top priority in every project we deliver. Let’s build a remarkable digital presence for your brand!",
    image: "Banners/p10.png",
    link: "https://rainpicinfotech.com/",
  },
  {
    title: "NSA Holidays Kodaikannal",
    description:
      "BM Techx crafts exceptional websites tailored to client needs. We blend creativity with technology to deliver seamless digital experiences. Our websites are designed for performance, aesthetics, and user engagement. Every project reflects our commitment to quality and innovation. We transform ideas into visually striking and functional websites. Your vision, our expertise—together, we create stunning digital success!",
    image: "Banners/p11.png",
    link: "https://nsaholidayskodaikanal.com/",
  },
  {
    title: "MyGoldInternational",
    description:
      "At BM Techx, we developed MyGold International, a secure and user-friendly platform for gold trading and investment. With a responsive design and advanced security, it ensures a seamless experience for users.",
    image: "Banners/p7.png",
    link: "https://mygoldinternational.com/",
  },
  {
    title: "Poclane",
    description:
      "BM Techx offers top-notch website development services, including the dynamic Poclane website. Our development process blends creativity with technology to craft responsive, interactive, and secure websites. By employing the latest tools and techniques, we ensure optimal functionality and aesthetics. Whether it's e-commerce, corporate, or personal websites, BM Techx guarantees solutions that simplify your digital presence and elevate user experience.",
    image: "Banners/p15.png",
  },
  {
    title: "Design Info",
    description:
      "Empowering businesses with stunning web solutions, BM Techx proudly developed the Design Info website. We integrate modern web trends and robust technologies to craft visually appealing, SEO-friendly, and mobile-responsive sites. With a focus on functionality and ease of navigation, we ensure websites cater to user expectations while standing out in competitive markets. Partner with us to create impactful websites that drive success.",
    image: "Banners/p9.png",
    link: "https://designinfosolution.com/",
  },
  {
    title: "BM Academy",
    description:
      "BM Techx proudly undertakes the complete development of BM Academy’s website, bringing their educational vision online. Our team combines innovative design with functionality, ensuring smooth navigation and accessibility. The website includes course listings, registration forms, and interactive features tailored to students and educators alike. Trust us to deliver a digital platform that effectively communicates your academy's values and services.",
    image: "Banners/p8.png",
    link: "https://thebmacademy.com/",
  },
  {
    title: "College Students Project",
    description:
      "BM Techx presents the College Management System, designed to streamline attendance and marks management for students. This efficient platform ensures accurate record-keeping, easy accessibility, and seamless monitoring, empowering institutions to enhance academic transparency and organization.",
    image: "Banners/p16.png",
  },
 

];

const Case = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const letters = ref.querySelectorAll(".case-desc span");
            letters.forEach((letter, letterIndex) => {
              setTimeout(() => {
                letter.style.color = "white";
              }, letterIndex * 50);
            });
            observer.unobserve(ref);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="case-section">
      <div className="pt-5 container">
        <Container className="case-container">
          {projects.map((project, index) => (
            <Row
              key={index} // Use index as the key
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`case-row align-items-center ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <Col md={6}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="case-img img-fluid"
                />
              </Col>
              <Col md={6} className="case-content">
                <h3 className="case-title">{project.title}</h3>
                <p className="case-desc">
                  {project.description.split("").map((letter, letterIndex) => (
                    <span key={letterIndex} style={{ color: "grey" }}>
                      {letter}
                    </span>
                  ))}
                </p>
                {project.link && project.link !== "#" && (
                  <Button
                    className="visit-btn"
                    href={project.link}
                    target="_blank"
                  >
                    Visit Site <MdOutlineArrowOutward className="ms-2" size={30} />
                  </Button>
                )}
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Case;