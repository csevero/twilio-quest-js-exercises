function scan(array) {
  let indexes = [];

  array.map((array, i) => {
    if (array === 'contraband') {
      indexes.push(i);
    }
  });

  return indexes;
}
