const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("eventFn", function (a, b) {
  console.log(a, b, this, this === myEmitter);
});

myEmitter.on("eventArrow", (a, b) => {
  console.log(a, b, this);
});

myEmitter.emit("eventFn", "a", "b");
myEmitter.emit("eventArrow", "c", "d");
