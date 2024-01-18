const libarary = require("");
let sum = libarary.sum((a, b) => {
  return a + b;
});
let mul = libarary.mul((a, b) => {
  return a * b;
});

module.exports = { sum, mul };
