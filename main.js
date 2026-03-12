// Variable declarations
let name = "peter";
let age = 23;
const birthYear = 2002;

// typeof operator
console.log(typeof name);
console.log(typeof age);
console.log(typeof true);

// let vs const
let score = 100;
score = 150;

const PI = 3.14159;

// Variable practice
let myName = "peter";
let myAge = 22;
let isStudent = true;
let favoriteColors = ["blue", "red", "green"];
let today = new Date();

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Student:", isStudent);
console.log("Favorite Colors:", favoriteColors);
console.log("Today's Date:", today);
// Number operations
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Increment
let count = 0;
count++;
count--;

// String operations
let firstName = "Goerge";
let lastName = " Omondi";

let fullName = firstName + " " + lastName;

let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("George"));

// Comparison
console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

// Logical
console.log(true && true);
console.log(true || false);
console.log(!true);

// Challenge
let myAgeYears = 22;
console.log("Age in days:", myAgeYears * 365);
console.log("Age in hours:", myAgeYears * 365 * 24);
console.log("Year you turn 100:", 2026 + (100 - myAgeYears));
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Exercises
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

// Tip calculator
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

// Switch example
function getDayName(dayNumber) {
    switch(dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid";
    }
}

// Loop examples
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Even numbers
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if(b === 0){
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function modulus(a,b){
    return a % b;
}

function power(a,b){
    return a ** b;
}

function calculate(num1, operator, num2){
    switch(operator){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
        case "%":
            return modulus(num1,num2);
        case "**":
            return power(num1,num2);
        default:
            return "Invalid operator";
    }
}

// Tests
console.log(calculate(10,"+",5));
console.log(calculate(10,"-",5));
console.log(calculate(10,"*",5));
console.log(calculate(10,"/",5));
console.log(calculate(10,const numbers = [1,2,3,4,5]));

// forEach
numbers.forEach(num => console.log(num * 2));

// map
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// find
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

// reduce
const sum = numbers.reduce((total,num) => total + num,0);
console.log(sum);

// includes
console.log(numbers.includes(3));"/",0;
const person = {
    firstName: "goerge",
    lastName: "Omondi",
    age: 30,
    hobbies: ["reading","coding","gaming"],
    address:{
        city:"kisumu",
        country:"kenya"
    }
};

console.log(person.firstName);
console.log(person.address.city);

person.age = 31;
person.email = "maddisonkiarie@gmail.com"
const students = [
 { name:"John", age:22, grade:85, major:"CS"},
 { name:"Vallery", age:20, grade:72, major:"Math"},
 { name:"Mkuu", age:23, grade:90, major:"CS"},
 { name:"Dixon", age:21, grade:88, major:"Physics"},
 { name:"Eve", age:22, grade:95, major:"CS"}
];

// names
const names = students.map(s => s.name);

// high achievers
const highAchievers = students.filter(s => s.grade > 80);

// find mkuu
const charlie = students.find(s => s.name === "mkuu");

// average grade
const avgGrade = students.reduce((total,s) => total + s.grade,0) / students.length;

// cs majors
const csMajors = students.filter(s => s.major === "CS");

// sorted
const sortedByGrade = [...students].sort((a,b)=> b.grade - a.grade);

// any > 90
const hasTopStudent = students.some(s => s.grade > 90);

// all passing
const allPassing = students.every(s => s.grade >= 60);

console.log(names,highAchievers,Mkuu,avgGrade);
const gradeTracker = {

    students: [],

    addStudent(name, grades){
        this.students.push({name, grades});
    },

    getStudent(name){
        return this.students.find(s => s.name === name) || null;
    },

    getStudentAverage(name){
        const student = this.getStudent(name);
        if(!student) return null;

        const scores = Object.values(student.grades);
        const total = scores.reduce((a,b)=> a+b,0);
        return (total / scores.length).toFixed(2);
    },

    getSubjectAverage(subject){
        let total = 0;
        let count = 0;

        this.students.forEach(s=>{
            if(s.grades[subject] !== undefined){
                total += s.grades[subject];
                count++;
            }
        });

        return (total/count).toFixed(2);
    },

    getTopStudent(){
        let top = null;
        let highest = 0;

        this.students.forEach(s=>{
            const scores = Object.values(s.grades);
            const avg = scores.reduce((a,b)=>a+b,0)/scores.length;

            if(avg > highest){
                highest = avg;
                top = s.name;
            }
        });

        return top;
    },

    getStrugglingStudents(){
        return this.students.filter(s=>{
            const scores = Object.values(s.grades);
            const avg = scores.reduce((a,b)=>a+b,0)/scores.length;
            return avg < 70;
        });
    },

    getLetterGrade(score){
        if(score >= 90) return "A";
        if(score >= 80) return "B";
        if(score >= 70) return "C";
        if(score >= 60) return "D";
        return "F";
    },

    generateReportCard(name){
        const student = this.getStudent(name);
        if(!student) return "Student not found";

        const avg = this.getStudentAverage(name);

        return `
        Report Card for ${name}
        Grades: ${JSON.stringify(student.grades)}
        Average: ${avg}
        `;
    }

};

// Tests
gradeTracker.addStudent("John ",{math:95,english:88,science:92});
gradeTracker.addStudent("Vallery",{math:72,english:85,science:78});
gradeTracker.addStudent("Mkuu",{math:60,english:65,science:58});

console.log(gradeTracker.getStudentAverage("John"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("John"));
