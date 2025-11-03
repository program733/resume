import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientList = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/patients')
            .then(response => {
                setPatients(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the patients!", error);
            });
    }, []);

    return (
        <div>
            <h2>Patients</h2>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>{patient.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;
