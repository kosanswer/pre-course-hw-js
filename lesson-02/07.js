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
    address: {
      ...passportMarried.address,
    },
  };
  
  console.log("passportMarried:", passportMarried);
  console.log("passportMarried2:", passportMarried2);
  