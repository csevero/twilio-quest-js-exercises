const number = process.argv[2];

const numberFormatted = Number(number);

if (numberFormatted === 0) {
  console.log('alive');
} else if (numberFormatted === 1) {
  console.log('flowering');
} else if (numberFormatted === 2) {
  console.log('shedding');
} else {
  console.log('other');
}
