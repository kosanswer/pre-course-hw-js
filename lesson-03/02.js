const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
const withoutOrangeAnswer = "Придется поискать в другом магазине…"; 

if (words.indexOf("апельсин") !== -1) {
  console.log("Ура! нашел");
} else {
  console.log(withoutOrangeAnswer); 
}