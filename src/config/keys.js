const fs = require('fs');
const crypto = require('crypto');

const privateKey = fs.readFileSync('./keys/private.key');
const publicKey = fs.readFileSync('./keys/public.key');

function getJwks() {
  const pubKeyObj = crypto.createPublicKey(publicKey);
  const exported = pubKeyObj.export({ format: 'jwk' });

  return {
    keys: [
      {
        ...exported,
        use: "sig",
        kid: process.env.JWT_KID,
        alg: "RS256"
      }
    ]
  };
}

module.exports = {
  privateKey,
  publicKey,
  getJwks
};
