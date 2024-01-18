const sumandadd = require("./libaray");
const upercase = require("./libaray");
const add1 = sumandadd.sum(2, 3);
const multi1 = sumandadd.multi(2, 3);
const upp = upercase.touppercase("prabimbhandnsd");
console.log({ add1, multi1 });
console.log({ upp });
