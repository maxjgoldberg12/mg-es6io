const tacoBell = [
  "Bean Burrito",
  "Burrito Supreme",
  "Beef and Potato Quarter Pounder",
  "Grilled Stuffit"
];

for (const [ i, name ] of tacoBell.entries()) {
  console.log(`${name} is the ${i}`);
}

// const menu = tacoBell.entries();
function addUpNumbers() {
  //console.log(arguments);
  let total = 0;

  for (num of arguments) {
    total += num;
    console.log(num);
  }

  console.log(total);
  return total;
}

addUpNumbers(1, 2, 3);

const name = "max";
for (const char of name) {
  console.log(char);
}
