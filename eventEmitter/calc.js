const eventEmitter = require("events");

class Calculator extends eventEmitter {
  calculate() {
    this.emit("before");
    console.log("We are calculating process");
    this.emit("after", { result: 14 });
  }
}

const calculator = new Calculator();

calculator.on("before", () => {
  console.log("We are before calculation...");
});

calculator.on("after", (data) => {
  console.log("We are after calculation and this is the data:", data);
});

calculator.calculate();
