class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("The sum of parameter must be greater than 0!");
    }
    let total = 0;
    for (const number of numbers) {
      total += total;
    }
    return total;
  }
}

try {
  console.info(MathUtil.sum());
} catch (error) {
  console.info(`Error : ${error.message}`);
} finally {
  console.info("Code Executed");
}

const result = MathUtil.sum(1, 1, 1, 1, 1);
console.info(result);

//Try Finally

class Counter {
  #counter = 0;
  next() {
    try {
      return this.#counter;
    } finally {
      this.#counter++;
    }
  }
}

const counter = new Counter();
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
