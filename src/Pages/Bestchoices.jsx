import React from "react";
import { Table, Button } from "react-bootstrap";
import { CheckCircleFill, XCircleFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Bestchoices.css"; // Ensure the CSS file is correctly imported

const BestChoiceComparison = () => {
  const data = [
    { feature: "Onboarding time", u1core: "1 day", agency: "5-15 days", freelancers: "2-4 days", hiring: "1-2 weeks" },
    { feature: "Delivery time for one request", u1core: "Async or 15 min call", agency: "Meetings, discussions, agreements", freelancers: "Endless texts, calls", hiring: "Endless texts, calls" },
    { feature: "Unlimited design & dev requests", u1core: <CheckCircleFill className="text-success" />, agency: <XCircleFill className="text-danger" />, freelancers: <XCircleFill className="text-danger" />, hiring: <XCircleFill className="text-danger" /> },
    { feature: "Flexible resources", u1core: <CheckCircleFill className="text-success" />, agency: <XCircleFill className="text-danger" />, freelancers: <XCircleFill className="text-danger" />, hiring: <XCircleFill className="text-danger" /> },
    { feature: "Art Director and Tech Lead supervision", u1core: <CheckCircleFill className="text-success" />, agency: <XCircleFill className="text-danger" />, freelancers: <XCircleFill className="text-danger" />, hiring: <XCircleFill className="text-danger" /> },
    { feature: "Contract is needed", u1core: <CheckCircleFill className="text-success" />, agency: <XCircleFill className="text-danger" />, freelancers: <XCircleFill className="text-danger" />, hiring: <XCircleFill className="text-danger" /> },
    { feature: "Cancel or pause subscription any time", u1core: <CheckCircleFill className="text-success" />, agency: <XCircleFill className="text-danger" />, freelancers: <XCircleFill className="text-danger" />, hiring: <XCircleFill className="text-danger" /> },
    { feature: "Pro team in place and growing together", u1core: <CheckCircleFill className="text-success" />, agency: <XCircleFill className="text-danger" />, freelancers: <XCircleFill className="text-danger" />, hiring: <XCircleFill className="text-danger" /> },
  ];

  return (
    <div className="table-section">
      <Table bordered hover responsive className="text-center mt-5">
        <thead>
          <tr className="table-warning">
            <th></th>
            <th>
              <img src="https://www.u1core.com/wp-content/themes/u1core/img/logo/logo.svg" alt="U1Core Logo" width="140" />
            </th>
            <th>Agency</th>
            <th>Freelancers</th>
            <th>Hiring</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "odd-row" : "even-row"}>
              <td className="fw-bold">{row.feature}</td>
              <td>{row.u1core}</td>
              <td>{row.agency}</td>
              <td>{row.freelancers}</td>
              <td>{row.hiring}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td className="button-td">
              <Button variant="warning">Choose us</Button>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BestChoiceComparison;
