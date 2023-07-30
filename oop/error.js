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

console.info(MathUtil.sum());

const result = MathUtil.sum(1, 1, 1, 1, 1);
console.info(result);
