function calculateMass(array) {
  let totalLength = array.reduce((length, array) => length + array.length, 0);

  return totalLength;
}

const teste = calculateMass(['teste', 'teste']);

console.log(teste);
