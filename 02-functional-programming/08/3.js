



class Container {
  static of(value) {
    return new Container(value);
  }
  // ……
}
Container.of(2).map((x) => x + 5);
