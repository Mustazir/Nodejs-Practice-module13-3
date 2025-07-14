// its for mutation
/*
const employee ={
name :"AbortController",
address:{
    country:"Bangladsh",city:"dhaka"
}
}
const employee2=employee
employee2.name="employee"   

console.log(employee)
console.log(employee2)
*/

// immutation


const employee ={
name :"AbortController",
address:{
    country:"Bangladsh",city:"dhaka"
}
}
const employee2 = {
  ...employee,
  name: "employee",
};  

console.log(employee)
console.log(employee2)


// mutation immutation end


// Function Curriying 

// normal function

const add =(a,b)=>a+b
console.log(add(1, 2));

// curried /curring function

const addd=(a)=>(b)=>a+b
console.log(addd(1)(2))

