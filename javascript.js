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

let employees = {
  a: 40,
  b: 30,
  c: 20,
  d: 50,
};

const checkMinAge = (employees) => {
  let minAge = 100;
  let res = null;
  for (const [name, age] of Object.entries(employees)) {
    if (minAge > age) {
      minAge = age;
      res = name;
    }
  }
  return res;
};
var x = checkMinAge(employees);
console.log(x);