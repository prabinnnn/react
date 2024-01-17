const QRCode = require("qrcode");
const data = {
  name: "prabin",
  email: "bhanbshd@gmail.com",
  age: 26,
};
let dataString = JSON.stringify(data);
QRCode.toDataURL(dataString, function (err, url) {
  if (err) {
    console.log(err);
  } else {
    console.log(url);
  }
});
