class Ducktypium {
  color;
  calibrationSequence = [];

  constructor(crystalColor) {
    if (
      crystalColor !== 'red' &&
      crystalColor !== 'yellow' &&
      crystalColor !== 'blue'
    ) {
      throw new Error('');
    }
    this.color = crystalColor;
  }

  refract(value) {
    if (value !== 'red' && value !== 'yellow' && value !== 'blue') {
      return console.log('Color must be red, yellow, or blue!');
    }

    if (this.color === value) {
      return value;
    } else if (
      (this.color === 'red' && value === 'blue') ||
      (this.color === 'blue' && value === 'red')
    ) {
      return 'purple';
    } else if (
      (this.color === 'red' && value === 'yellow') ||
      (this.color === 'yellow' && value === 'red')
    ) {
      return 'orange';
    } else if (
      (this.color === 'yellow' && value === 'blue') ||
      (this.color === 'blue' && value === 'yellow')
    ) {
      return 'green';
    }
  }

  calibrate(array) {
    const arraySorted = array.sort();

    arraySorted.map(array => {
      this.calibrationSequence.push(array * 3);
    });
  }
}
