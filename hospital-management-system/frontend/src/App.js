import React from 'react';
import PatientList from './components/PatientList';
import DoctorList from './components/DoctorList';

function App() {
  return (
    <div>
      <h1>Welcome to the Hospital Management System</h1>
      <PatientList />
      <DoctorList />
    </div>
  );
}

export default App;
