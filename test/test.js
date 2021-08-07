//test_jwt.js

const env = require('node-env-file');
const jwt = require('jsonwebtoken');

env(__dirname + "/../env.cfg");

let token = jwt.sign({ id : 'bsjung'}, process.env.secret, { expiresIn : '5m'} );

console.log (" token " + token);

try {
  var check = jwt.verify(token, process.env.secret);
  if (check) console.log("ret : " + JSON.stringify(check));
} catch (e) {
  console.log(e);
}
