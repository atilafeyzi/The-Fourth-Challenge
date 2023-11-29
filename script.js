// Challenge: Extract name and last name

// with array

// const name = "Atila Feyzi";
// const splitedName = name.split(" ");
// const finalText = `Your name is ${splitedName[0]}, and your last name ${splitedName[1]}`
// console.log(finalText)

// with object

const fullName = "Atila Feyzi";
const spaceIndex = fullName.indexOf(" ");
const name = fullName.slice(0, spaceIndex);
const lastName = fullName.slice(spaceIndex + 1);
const text = `Your name is ${name} and your last name ${lastName}`;
console.log(text);
