let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
      country: "USA",
      city: "Bobryisk",
    },
  };
  
  let passportMarried2 = {
    ...passportMarried,
    married: true,
    }
  
  console.log("passportMarried:", passportMarried);
  console.log("passportMarried2:", passportMarried2);
  