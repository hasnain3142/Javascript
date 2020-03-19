var student = {name: "Hasnain Ali",age: "17",department:"CIS",class:"First Year"};
console.log(student.class);
console.log(student["age"]);

var person = {
    firstName: "Hasnain",
    lastName: "Ali",
    fullName: function name(){                   //Method
        return this.firstName+" "+this.lastName
    }
}

console.log(person.fullName());