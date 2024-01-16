const bcryptjs = require("bcryptjs");
const encriptpw = (string) => {
  return bcryptjs.hashsync(string, 10);
};
const hashedpw = encriptpw("password");
const comparePW = (string, hash) => {
  return bcryptjs.compareSync(string, hash);
};
comparePW("passwrod", hashedpw);
