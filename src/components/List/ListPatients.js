import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const ListPatients = () => {
  const [patients, setPatients] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`${API_URL}/all`)
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);
      });
  }, []);

  const handlePatientEdit = (id) => {
    history.push(`/edit/${id}`);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>List of Patients</h1>
            <Link to="/add">
              <button className="btn btn-primary">Add Patient</button>
            </Link>
          </div>
        </div>
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
            {patients.map((patient) => (
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
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      console.log("delete");
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    //navigate to edit page
                    onClick={() => {
                      handlePatientEdit(patient.patientIdentifier);
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      history.push(`/report/${patient.patientIdentifier}`);
                    }}
                  >
                    Print
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListPatients;
