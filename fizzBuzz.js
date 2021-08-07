const vars = process.argv;

const numberFormatted = Number(vars[2]);

if (numberFormatted % 3 === 0 && numberFormatted % 5 === 0) {
  console.log('JavaScript');
} else if (numberFormatted % 3 === 0) {
  console.log('Java');
} else if (numberFormatted % 5 === 0) {
  console.log('Script');
} else {
  console.log(numberFormatted);
}
