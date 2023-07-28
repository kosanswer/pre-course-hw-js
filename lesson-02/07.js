let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

passportMarried.married = true; 

let passportMarried2 = JSON.parse(JSON.stringify(passportMarried)); 
passportMarried2.newKey = "newValue"; 

console.log(passportMarried); 
console.log(passportMarried2); 