import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { API_URL } from "../../config";
import { useHistory, Link } from "react-router-dom";

const PatientReport = () => {
  const history = useHistory();
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    birthCertificate: "",
    idNumber: "",
    location: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
  });
  let {
    firstName,
    lastName,
    birthCertificate,
    idNumber,
    location,
    phoneNumber,
    dateOfBirth,
    gender,
  } = patient;

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  const id = window.location.pathname.split("/")[2];
  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        console.log(res);
        setPatient(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <br />
          <br />
          <div
            className="col-md-6 offset-md-3 d-flex justify-content-between"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: "0px",
              paddingRight: "100px",
            }}
          >
            <h3>Patient Report</h3>
            <Link>
              <Button variant="primary" onClick={() => history.push("/")}>
                Back
              </Button>
            </Link>
            <Link>
              {/* print buton */}
              <Button variant="primary" onClick={() => window.print()}>
                Print
              </Button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Card
            id="print"
            >
              <Card.Body>
                <Card.Title>First Name: {firstName}</Card.Title>
                <Card.Text>Last Name: {lastName}</Card.Text>
                <Card.Text>Birth Certificate: {birthCertificate}</Card.Text>
                <Card.Text>ID Number: {idNumber}</Card.Text>
                <Card.Text>Location: {location}</Card.Text>
                <Card.Text>Phone Number: {phoneNumber}</Card.Text>
                <Card.Text>Date of Birth: {dateOfBirth}</Card.Text>
                <Card.Text>Gender : {gender}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientReport;
