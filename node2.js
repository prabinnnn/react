const bcryptjs = require("bcryptjs");
const encript = (string) => {
  return bcryptjs.hashSync(string, 10);
};
const hasedpw = encript("password");
const compare = (string, hash) => {
  return bcryptjs.compareSync(string, hash);
};
const prabin = compare("password", hasedpw);
console.log({ prabin });
