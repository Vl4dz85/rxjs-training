class CustomIterator {
  private cursor = 0;
  private value: number;

  constructor(private arr: number[], private divisor: number = 1) {}
  next() {
    while (this.cursor < this.arr.length) {
      this.value = this.arr[this.cursor++];
      if (this.value % this.divisor === 0) {
        return { done: false, value: this.value };
      }
    }
    return { done: true, value: this.value };
  }
  [Symbol.iterator]() {
    return {
      next: this.next.bind(this)
    };
  }
}

const consumer = new CustomIterator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);

for (let item of consumer) {
  console.log("iteration 1 ", item);
}

Array.from(consumer).forEach((v) => console.log("iteration 2 " + v));
