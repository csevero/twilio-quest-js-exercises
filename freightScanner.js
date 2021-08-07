function scan(array) {
  let number = 0;

  array.map(array => {
    if (array === 'contraband') {
      number++;
    }
  });

  return number;
}
