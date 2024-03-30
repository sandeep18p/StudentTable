// Fetching data from the provided URL
const url = 'https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json';

// Function to fetch data from the URL
async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
let students;
// Function to initialize the table with student data
async function initializeTable() {
   students = await fetchData();
    populateTable(students);
}

// Function to populate the table with student data
function populateTable(students) {
    const table = document.getElementById('studentTable');
    table.innerHTML="";
    students.forEach(student => {
        const row = table.insertRow();
        const id_ = row.insertCell();
        const imageCell = row.insertCell();
       
        const gender = row.insertCell();
        const classCell = row.insertCell();
        const marksCell = row.insertCell();
        const passingCell = row.insertCell();
    
        const emailCell = row.insertCell();
       
        id_.innerHTML=student.id;
        imageCell.innerHTML = `<div class="jira"><img src="${student.img_src}" alt="${student.first_name} ${student.last_name}"> <div> ${student.first_name} ${student.last_name} </div></div>`;
        gender.textContent=student.gender
        classCell.textContent = student.class;
        marksCell.textContent = student.marks;
        passingCell.textContent = student.passing ? 'Pass' : 'Failed';
        emailCell.textContent = student.email;
        
    });
}
function populateTable2(students) {
    const table = document.getElementById('studentTable');
   
    students.forEach(student => {
        const row = table.insertRow();
        const id_ = row.insertCell();
        const imageCell = row.insertCell();
       
        const gender = row.insertCell();
        const classCell = row.insertCell();
        const marksCell = row.insertCell();
        const passingCell = row.insertCell();
    
        const emailCell = row.insertCell();
       
        id_.innerHTML=student.id;
        imageCell.innerHTML = `<img src="${student.img_src}" alt="${student.first_name} ${student.last_name}"> ${student.first_name} ${student.last_name}`;
        gender.textContent=student.gender
        classCell.textContent = student.class;
        marksCell.textContent = student.marks;
        passingCell.textContent = student.passing ? 'Passing' : 'Failed';
        emailCell.textContent = student.email;
        
    });
}

// Function to search students
function search() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.first_name.toLowerCase().includes(searchInput) ||
        student.last_name.toLowerCase().includes(searchInput) ||
        student.email.toLowerCase().includes(searchInput)
    );
    populateTable(filteredStudents);
}

// Function to sort students by full name in ascending order
function sortAZ() {
    students.sort((a, b) => (a.first_name + a.last_name > b.first_name + b.last_name) ? 1 : -1);
    populateTable(students);
}

// Function to sort students by full name in descending order
function sortZA() {
    students.sort((a, b) => (a.first_name + a.last_name < b.first_name + b.last_name) ? 1 : -1);
    populateTable(students);
}

// Function to sort students by marks in ascending order
function sortByMarks() {
    console.log(students)
    students.sort((a, b) => a.marks - b.marks);
    console.log("hello")
    console.log(students)
    populateTable(students);
}

// Function to filter and show only passing students
function sortByPassing() {
    const passingStudents = students.filter(student => student.passing);
    const passingStudents2 = students.filter(student => !student.passing);
    
   
    populateTable(passingStudents);
    populateTable2(passingStudents2);
}

// Function to sort students by class in ascending order
function sortByClass() {
    students.sort((a, b) => a.class - b.class);
    populateTable(students);
}

// Function to sort students by gender
function sortByGender() {
    const maleStudents = students.filter(student => student.gender === 'Male');
    const femaleStudents = students.filter(student => student.gender === 'Female');
    populateTable(maleStudents);
    populateTable2(femaleStudents);
}

// Initializing the table
initializeTable();
