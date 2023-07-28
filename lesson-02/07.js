const passport = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

passport.married = true; 

const passport2 = JSON.parse(JSON.stringify(passport)); 
passport2.newKey = "newValue"; 
delete passport2.newKey; 

console.log(passport); 
console.log(passport2); 