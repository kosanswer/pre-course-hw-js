const passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportCopy2 = JSON.parse(JSON.stringify(passportWithAddress)); 
passportCopy2.address.city = "Bobryisk"; 

console.log(passportWithAddress.address.city); 
console.log(passportCopy2.address.city);