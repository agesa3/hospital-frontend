import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { API_URL } from "../../config";
import { useHistory } from "react-router-dom";

const EditPatient = () => {
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

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`${API_URL}/update/${patient.patientIdentifier}`, patient)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
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
          <div className="col-md-6 offset-md-3">
            <br />
            <br />
            <Card>
              <Card.Header>Edit Patient Details</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      value={patient.firstName}
                      onChange={onChange}
                      name="firstName"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={onChange}
                      name="lastName"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="birthCertNo">
                    <Form.Label>Birth Certificate Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Birth Certificate Number"
                      value={birthCertificate}
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="idNumber">
                    <Form.Label>ID Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ID Number"
                      value={idNumber}
                      onChange={onChange}
                      name="idNumber"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Location"
                      value={location}
                      onChange={onChange}
                      name="location"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="dateOfBirth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Date of Birth"
                      value={dateOfBirth}
                      onChange={onChange}
                      name="dateOfBirth"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="dateOfBirth">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Gender"
                      value={gender}
                      onChange={onChange}
                      name="gender"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="dateOfBirth">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={onChange}
                      name="phoneNumber"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={handleEdit}>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPatient;
