// "use strict"
// var employeeName = "aravind thonupunuri";
// var employeeEmail = "aravind@meta.com";
// var age = 23;
// // split using specific character
// var arrayOfFirstNameAndLastName = employeeName.split(" ");
// const employeeObj = {
//     names : arrayOfFirstNameAndLastName,
//     age: age
// }
// // use typeof to verify age as number
// const checkAge = (age) => {
//      if(typeof age == "number") {
//          console.log("Age verified!, Good to go");
//      }
// }
// // use slice to break the string from the index of given character
// const checkEmail = (email) => {
//     var companyName = employeeEmail.slice(employeeEmail.lastIndexOf('@'));
//     console.log(companyName);
//     if(companyName.includes("meta.com")) console.log("email verified");
// }
// console.log(arrayOfFirstNameAndLastName);
// checkAge(age);
// checkEmail(employeeEmail);
// // parse json object to string
// const employeeObjString = JSON.stringify(employeeObj);
// console.log(employeeObjString);
// // convert string to json Object
// const employeeDetails = JSON.parse(employeeObjString);
// console.log(employeeDetails);
// console.log((employeeDetails.names)[1]);

// let employees = {
//   a: 40,
//   b: 30,
//   c: 20,
//   d: 50,
// };

// const checkMinAge = (employees) => {
//   let minAge = 100;
//   let res = null;
//   for (const [name, age] of Object.entries(employees)) {
//     if (minAge > age) {
//       minAge = age;
//       res = name;
//     }
//   }
//   return res;
// };
// var x = checkMinAge(employees);
// console.log(x);

// let arr = [1, 2, 3, 4]
// const multiply = (...arr) => {
//     let res = 1;
//     let i = 1;
//     for(i of arr) {
//         res = res * i;
//     }
//     return res;
// }
// console.log(multiply(5, ...arr));

// let arr = [1, 2, 3, 4, 5]
// let fun = () => {
//     var mul = 1;
//     return (i) => {
//         mul = mul * i;
//         return mul;
//     }
// }
// let multiply = fun();
// let res = arr.map(
//     num => multiply(num)
// );
// console.log(res);

// const fs = require("fs");
// class fileOpp {
//   static readFile = (fileName = "sample.txt") => {
//     fs.readFile(fileName, "utf-8", (err, data) => {
//       console.log(data);
//     });
//   };
// }
// module.exports = fileOpp.readFile;

// class School {
//     constructor(Name, address, phone) {
//         this.Name = Name;
//         this.address = address;
//         this.phone = phone;
//     }
//     print = () => {
//         console.log(`School details are ${this.Name} ${this.address} ${this.phone}`)
//     }
// }

// class Section extends School {
//     constructor(Name, address, phone, SectionName, teacher, age) {
//         super(Name, address, phone);
//         this.SectionName = SectionName;
//         this.teacher = teacher;
//         this.age = age;
//     }
//     print = () => {
//         console.log(`Section details are ${this.SectionName} ${this.teacher} ${this.age}`)
//     }
// }

// const someschool = new School("school name", "school address", "school phone");
// const somesection = new Section("school name", "school address", "school phone", "section name", "teacher", "23");
// someschool.print();
// somesection.print();
// const anothersection = new Section();
// Object.assign(anothersection, somesection);
// console.log(anothersection.Name);

// const axios = require("axios");
// axios
//   .get("https://api.github.com/users/aravindthonupunuri")
//   .then((response) => console.log(response.data))
//   .catch((error) => console.log(error));

let fun = function (state, phone) {
    console.log(this.name, this.age, state, phone)
} 
let obj1 = {
    name: "aravind",
    age: 23
}
let obj2 = {
    name: "thonups",
    age: 24
}
fun.call(obj1, "Telangana", 9777);
fun.apply(obj2, ["Telangana", 9777]);
let newFun = fun.bind(obj1, "Telangana", 9777);
newFun();



