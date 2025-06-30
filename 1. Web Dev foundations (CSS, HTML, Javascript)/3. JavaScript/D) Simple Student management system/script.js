// init students array
const students = [];

// add student
function addStudent(name, grade) {
    students.push({
        name,
        grade,
    });
}

// function to remove student
function removeStudent(name) {
    const index = students.findIndex(student => student.name === name)
    if (index !== -1) {
    students.splice(index, 1);
    console.log(name, "has been removed");
    } else {
    console.log(name, "was not found");
    }

}

// function to filter students
function filterTopStudents(minGrade) {
    return students.filter(student => student.grade >= minGrade);
}

function filterBottomStudents(minGrade) {
    return students.filter(student => student.grade <= minGrade);
}



// function to map students in formatted list
function formatStudentList() {
    return students.map(student => `${student.name} – Grade: ${student.grade}`);
}



// TESTING DEFINED STUDENT MANAGEMENT FUNCTIONS:



// start
console.log("students =", students);

// add students
addStudent("Alice", 85);
addStudent("Bob", 90);
addStudent("Charles", 78);
addStudent("Davie", 60);
addStudent("Emma", 92);

//Format students
console.log("STUDENT LIST:");
console.log(formatStudentList());

//remove
removeStudent("Charles");

//Format after removing
console.log("STUDENT LIST:");
console.log(formatStudentList());


//Filtering students
console.log("Students with Grade equal to or higher than 80:");
console.log(filterTopStudents(80));

console.log("Students who are equal to or lower than 60:")
console.log(filterBottomStudents(60));

