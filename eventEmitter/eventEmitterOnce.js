const { EventEmitter } = require("node:events");

const eventEmitter = new EventEmitter();

eventEmitter.on("myEvent", (data) => {
  console.log(data, "- on");
});

eventEmitter.once("myEvent", (data) => {
  console.log(data, "- once");
});

eventEmitter.emit("myEvent", "Emitted Statement");
eventEmitter.emit("myEvent", "Emitted Statement");
eventEmitter.emit("myEvent", "Emitted Statement");
