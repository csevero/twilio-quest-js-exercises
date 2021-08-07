function getFirstAmountSorted(array, number) {
  const sortedArray = array.sort().slice(0, number);

  return sortedArray;
}