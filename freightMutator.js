function mutate(array) {
  const newArray = [];

  array.map(array => {
    return newArray.push(array.toUpperCase());
  });

  return newArray;
}
