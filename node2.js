const bcryptjs = require("bcryptjs");
const encript = (string) => {
  return bcryptjs.hashSync(string, 10);
};
const hasedpw = encript("password");
const compare = (string, hash) => {
  return bcryptjs.compareSync(string, hash);
};
console.log(compare("password", hasedpw));
