function scanAndFilter(array, string) {
  const filteredArray = [];

  array.filter(array => {
    if (array !== string) {
      filteredArray.push(array);
    }
  });

  return filteredArray;
}

const cargo = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];

const filteredCargo = scanAndFilter(cargo, 'ray guns');

console.log(filteredCargo);
