import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Bestchoices.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "./ModalComponent"; // Import Modal

const BestChoice = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
   <div className="table-section">
        <h2 className="text-center fw-bold pt-5 pb-5 mb-5">Our Services</h2>
     <section className="best-choice text-white best-choice--home section--visible d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="best-choice__content">
          <ul className="best-choice__list">
            {/* First Row */}
            <li className="best-choice__li">
              <div className="best-choice__li-body">
                <div className="best-choice__li-body-cell"></div>
                <div className="best-choice__li-body-cell">Onboarding time</div>
                <div className="best-choice__li-body-cell">Delivery time for one request</div>
                <div className="best-choice__li-body-cell">Unlimited design & dev requests with monthly flat-rate</div>
                <div className="best-choice__li-body-cell">"Flexible resources"</div>
                <div className="best-choice__li-body-cell">Art Director and Tech Lead supervision</div>
                <div className="best-choice__li-body-cell">Contract is needed</div>
                <div className="best-choice__li-body-cell">Cancel or pause subscription any time</div>
                <div className="best-choice__li-body-cell">Pro team in place and growing together for years</div>
              </div>
            </li>

            {/* Second Row */}
            <li className="best-choice__li best-choice__li--main">
              <div className="best-choice__li-body">
                <div className="best-choice__li-body-cell">
                  <img src="https://www.u1core.com/wp-content/themes/u1core/img/logo/logo.svg" alt="Logo" />
                </div>
                <div className="best-choice__li-body-cell">1 day</div>
                <div className="best-choice__li-body-cell">Async or 15 min call</div>
                <div className="best-choice__li-body-cell">2-3 business days</div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faCheckCircle} className="icon correct-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faCheckCircle} className="icon correct-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faCheckCircle} className="icon correct-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faCheckCircle} className="icon correct-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faCheckCircle} className="icon correct-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <button className="btn btn--yellow best-choice__li-body-cell-btn js-contact-btn" onClick={handleShow}>Choose us</button>
                </div>
              </div>
            </li>

            {/* Third Row */}
            <li className="best-choice__li">
              <div className="best-choice__li-body">
                <div className="best-choice__li-body-cell">Agency</div>
                <div className="best-choice__li-body-cell">5-15 days</div>
                <div className="best-choice__li-body-cell">Meetings, discussions, agreements, contracts etc.</div>
                <div className="best-choice__li-body-cell">3-15 business days</div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell"></div>
              </div>
            </li>

            {/* Fourth Row */}
            <li className="best-choice__li">
              <div className="best-choice__li-body">
                <div className="best-choice__li-body-cell">Freelancers</div>
                <div className="best-choice__li-body-cell">2-4 days</div>
                <div className="best-choice__li-body-cell">Endless texts, calls, time wasted on explaining</div>
                <div className="best-choice__li-body-cell">3-7 business days</div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell"></div>
              </div>
            </li>

            {/* Fifth Row */}
            <li className="best-choice__li">
              <div className="best-choice__li-body">
                <div className="best-choice__li-body-cell">Hiring</div>
                <div className="best-choice__li-body-cell">1-2 weeks</div>
                <div className="best-choice__li-body-cell">Endless texts, calls, time wasted on explaining</div>
                <div className="best-choice__li-body-cell">3-7 business days</div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell">
                  <FontAwesomeIcon icon={faTimesCircle} className="icon wrong-icon" />
                </div>
                <div className="best-choice__li-body-cell"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <ModalComponent show={showModal} handleClose={handleClose} />
   </div>
  );
};

export default BestChoice;