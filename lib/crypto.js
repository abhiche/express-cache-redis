const crypto = require('crypto');

const algorith = 'aes192';

function encrypt(text, password) {

  const cipher = crypto.createCipher(algorith, password);

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encrypted, password) {

  const decipher = crypto.createDecipher(algorith, password);

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = {
  encrypt,
  decrypt
}