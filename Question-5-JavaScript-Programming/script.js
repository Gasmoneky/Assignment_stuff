var studentName = "Jane Wanjiku";
var registrationNumber = "REG-2024-001";
var academicProgramme = "Bachelor of Computer Science";

console.log("Student Name: " + studentName);
console.log("Registration Number: " + registrationNumber);
console.log("Academic Programme: " + academicProgramme);

function calculateGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    } else if (score >= 70) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else if (score >= 40) {
        return "D";
    } else {
        return "E";
    }
}

var score = 75;
var grade = calculateGrade(score);

console.log("Score: " + score + " | Grade: " + grade);

var output = document.getElementById("gradeOutput");
if (output) {
    output.textContent = "A score of " + score + " gives a grade of " + grade + ".";
}

alert("The grade for a score of " + score + " is: " + grade);
