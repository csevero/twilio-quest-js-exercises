function calculatePower(array) {
  const arraySorted = array.sort();

  const totalPower = arraySorted.reduce((sum, item) => sum + item * 2, 0);

  return totalPower;
}
