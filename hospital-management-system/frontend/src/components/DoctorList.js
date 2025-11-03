import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/doctors')
            .then(response => {
                setDoctors(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the doctors!", error);
            });
    }, []);

    return (
        <div>
            <h2>Doctors</h2>
            <ul>
                {doctors.map(doctor => (
                    <li key={doctor.id}>{doctor.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorList;
