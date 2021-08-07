class Materializer {
  target;
  activated = false;

  constructor(argument) {
    this.target = argument;
  }

  activate() {
    this.activated = true;
  }

  materialize() {
    if (this.activated) {
      return this.target;
    }
    return undefined
  }
}
