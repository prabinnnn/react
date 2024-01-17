const QRCode = require("qrcode");
const data = {
  name: "prabin",
  email: "bhanbshd@gmail.com",
  age: 26,
};
let datastring = json.stringify(data);
QRCode.toDataURL(datastring, function (err, url) {
  if (err) {
    console.log(err);
  } else {
    console.log(url);
  }
});
