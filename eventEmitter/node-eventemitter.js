const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("STARTED");
});

eventEmitter.on("start number", (number) => {
  console.log(`STARTED ${number}`);
});

eventEmitter.on("start two numbers", (start, end) => {
  console.log(
    `STARTED from ${start} to ${end} and the sum is: [${start + end}]`
  );
});

eventEmitter.emit("start");
eventEmitter.emit("start number", 39);
eventEmitter.emit("start two numbers", 39, 50);
