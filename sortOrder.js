let var1 = process.argv[2];
let var2 = process.argv[3];

var1 = var1.toLowerCase();
var2 = var2.toLowerCase();

if (var1 < var2) {
  console.log('-1');
} else if (var1 === var2) {
  console.log('0');
} else {
  console.log('1');
}
