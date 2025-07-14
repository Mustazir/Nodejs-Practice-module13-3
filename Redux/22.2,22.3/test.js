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


// here a example for discount a price, if we use normal function we need to mention the discount value everytime ,but using curriing function just need the discount value once


const totalPrice = (discount)=>(ammount)=>ammount-ammount*discount

const withDiscount =totalPrice(0.3);

console.log(withDiscount(100));
console.log(withDiscount(280));
console.log(withDiscount(354));


