
const ERC777AcceptAny = require('../index.js');

const res = ERC777AcceptAny.generateDeployTx();

console.log("Sender: ", res.sender);
console.log("RawTx: ", res.rawTx);
console.log("Contract:", res.contractAddr);

setTimeout(() => {}, 200 );
