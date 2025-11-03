
// Add Doctor
const addDoctorForm = document.getElementById('add-doctor-form');
const doctorList = document.getElementById('doctor-list').getElementsByTagName('tbody')[0];

addDoctorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const doctorName = document.getElementById('doctor-name').value;
    const specialization = document.getElementById('specialization').value;

    const newRow = doctorList.insertRow();
    newRow.innerHTML = `
        <td>${doctorName}</td>
        <td>${specialization}</td>
    `;

    addDoctorForm.reset();
    });

// Add Medicine
const addMedicineForm = document.getElementById('add-medicine-form');
const medicineList = document.getElementById('medicine-list').getElementsByTagName('tbody')[0];

addMedicineForm.addEventListener('submit', (e) => {
        e.preventDefault();
    const medicineName = document.getElementById('medicine-name').value;
    const quantity = document.getElementById('quantity').value;

    const newRow = medicineList.insertRow();
    newRow.innerHTML = `
        <td>${medicineName}</td>
        <td>${quantity}</td>
    `;

    addMedicineForm.reset();
    });
