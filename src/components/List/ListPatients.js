import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";

const ListPatients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/all`)
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1>All Patients</h1>
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
                  {/* //delete update and print buttons */}
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                  <td>
                    <button className="btn btn-primary">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-success">Print</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListPatients;
