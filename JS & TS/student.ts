
let studentName: string = "Sibgha";
let marks: number = 350;
let totalMarks: number = 500;

let percentage: number = (marks / totalMarks) * 100;

console.log("Student Name:", studentName);
console.log("Obtained Marks:", marks);
console.log("Total Marks:", totalMarks);
console.log("Percentage:", percentage + "%");

if (percentage >= 80) {
    console.log("Grade: A");
} else if (percentage >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}