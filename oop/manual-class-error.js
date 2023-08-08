class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError(
        "The sum of parameter must be greater than 0!",
        "numbers"
      );
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
  if (error instanceof ValidationError) {
    console.info(`Error on field ${error.field} with error ${error.message}`);
  } else {
    console.info(`Error : ${error.message}`);
  }
} finally {
  console.info("Code Executed");
}

console.info("End");
