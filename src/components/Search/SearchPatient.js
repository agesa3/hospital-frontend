import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../../config";

const SearchPatient = () => {
  const history = useHistory();
  const [patients, setPatients] = useState([]);
  const [searchValue, setSearchValue] = useState({
    search: "",
  });
  let { search } = searchValue;

  const handleChange = (e) => {
    setSearchValue({ ...searchValue, [e.target.name]: e.target.value });
  };
  

  const handleSearchPatient = (e) => {
    e.preventDefault();
    console.log(searchValue);

    axios
      .get(`${API_URL}/${searchValue.search}`)
      .then((res) => {
        console.log(res);
        setPatients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePatientEdit = (id) => {
    history.push(`/edit/${id}`);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 offset-md-3 d-flex justify-content-between"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: "10px",
              paddingRight: "100px",
              paddingTop: "200px",
            }}
          >
            <div className="row d-flex justify-content-between">
              <div className="col-md-6 offset-md-3">
                <br />
              </div>
              <Form onSubmit={handleSearchPatient}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Search Patient</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search Patient by ID Number"
                    name="search"
                    value={search}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Form>
            </div>
          </div>
        </div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Patient Identifier</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birth Certificate</th>
                <th>ID Number</th>
                <th>Location</th>
                <th>Phone Number</th>
                <th>Date of Birth</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody className="table table-striped">
              {/* check if patient is greate than 0 else display the single patient */}
              {patients.length > 0 ? (
                patients.map((patient) => (
                  <tr key={patient.patientIdentifier}>
                    <td>{patient.patientIdentifier}</td>
                    <td>{patient.firstName}</td>
                    <td>{patient.lastName}</td>
                    <td>{patient.birthCertificate}</td>
                    <td>{patient.idNumber}</td>
                    <td>{patient.location}</td>
                    <td>{patient.phoneNumber}</td>
                    <td>{patient.dateOfBirth}</td>
                    <td>{patient.gender}</td>
                    <td>
                      <Button
                        onClick={() =>
                          handlePatientEdit(patient.patientIdentifier)
                        }
                        variant="primary"
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>{patients.patientIdentifier}</td>
                  <td>{patients.firstName}</td>
                  <td>{patients.lastName}</td>
                  <td>{patients.birthCertificate}</td>
                  <td>{patients.idNumber}</td>
                  <td>{patients.location}</td>
                  <td>{patients.phoneNumber}</td>
                  <td>{patients.dateOfBirth}</td>
                  <td>{patients.gender}</td>
                  <td>
                    <Button
                      onClick={() =>
                        handlePatientEdit(patients.patientIdentifier)
                      }
                      variant="primary"
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div
          className="spacer"
          style={{
            paddingTop: "100px",
          }}
        ></div>
      </div>
    </>
  );
};

export default SearchPatient;
