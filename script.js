// Creating values for data storage and DOM manipulation
const students = [];
let nextId = 1;

const studentNameInput = document.getElementById("student-name");
const studentGradeInput = document.getElementById("student-grade");
const addBtn = document.getElementById("add-student");
const errorMessage = document.getElementById("error-message");
const studentList = document.getElementById("student-list");
const averageGradeElement = document.getElementById("average-grade");

//Defining functions for adding students and their grades
function addStudent() {
  const name = studentNameInput.value.trim();
  const grade = parseFloat(studentGradeInput.value);

  // Input validation
  if (name === "") {
    errorMessage.textContent = "Please enter a student name.";
    return;
  }
  if (isNaN(grade) || grade < 0 || grade > 100) {
    errorMessage.textContent = "Please enter a valid grade between 0 and 100.";
    return;
  }

  errorMessage.textContent = "";

  const newStudent = { id: nextId++, name, grade };
  students.push(newStudent);

  displayStudentList();

  // Clear input fields
  studentNameInput.value = "";
  studentGradeInput.value = "";
}

addBtn.addEventListener("click", addStudent);

//creating a function that displays the student list and their grades in the DOM
function displayStudentList() {
  studentList.innerHTML = "";
  let total = 0;
  students.forEach((student) => {
    total += student.grade;
  });

  const currentAverage = students.length > 0 ? total / students.length : 0;
  students.forEach((student) => {
    const li = document.createElement("li");
    li.textContent = `${student.name}: ${student.grade} `;

    if (student.grade > currentAverage) {
      li.classList.add("above-average");
    }
    //Creating a delete button for each student entry
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.setAttribute("data-id", student.id);

    deleteBtn.addEventListener("click", () => {
      const studentId = parseInt(deleteBtn.getAttribute("data-id"));
      deleteStudent(student.id);
    });
    li.appendChild(deleteBtn);
    studentList.appendChild(li);
  });

  updateAverageGrade();
}

//Creating a function that deletes a student entry from the list and updates the average grade accordingly
function deleteStudent(id) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    displayStudentList();
    updateAverageGrade();
  }
}
function updateAverageGrade() {
  if (students.length === 0) {
    averageGradeElement.textContent = "0";
    return;
  }
  let total = 0;
  students.forEach(function (student) {
    total = total + student.grade;
  });
  const average = total / students.length;
  averageGradeElement.textContent = average.toFixed(2);
}
