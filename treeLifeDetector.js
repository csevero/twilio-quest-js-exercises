const number = process.argv[2];

const numberFormatter = Number(number);
if (numberFormatter === 0) {
  console.log('alive');
} else {
  console.log('other');
}
