const config = require('../../src/config');
const Web3 = require('web3');
export var web3;
if (config.addrCurr != '') {                                                        // allow for blockchainless debugging
    web3 = new Web3(config.addrCurr);
}

import * as  gbaToken from '../../../build/contracts/GBAToken.json';
config.tokens.forEach((tName) => {
    config.token[tName].contract = new web3.eth.Contract(gbaToken.abi, config.token[tName].address, { data: gbaToken.bytecode })
});

let taskQ = [];                                                             // blockchain queue set-up
let lastTx = -1;
setInterval(checkQ, 1000);
async function checkQ() {
    if (taskQ.length === 0) return;
    let { account, tx } = taskQ.shift();
    alert(account + ' - ' + JSON.stringify(tx));
    let tcount = await web3.eth.getTransactionCount(account.address);
    if (tcount === lastTx) return;
    lastTx = tcount;
    await tx.send({ from: account.address, gas: 500000, nonce: tcount }).catch((e) => console.log("ethQ tx send ERROR: " + e));
};
try { checkQ(); } catch (e) { console.log }

async function getAcct() {
    if (!window['ethereum']) { alert("Metamask is either not installed or disabled"); return ''; }
    var web3 = new Web3(window['ethereum']);
    window['ethereum'].enable();
    var accounts = await web3.eth.getAccounts();
    if (accounts.length == 0) { alert("You need be logged in to Metamask and allow the connection!"); return ''; };
    return accounts[0];
}

export async function sendTokens(token, blockchain, address, destBChain, destAddr, amount, memo) {
    if (blockchain != 'GBA Hub') { alert("Hive/Steem origin"); return; }
    var account = await getAcct();
    if (account == '') return;
    if (account != 'address') { alert("You must switch to that account in Metamask in order to send from it!"); return; }
    if (blockchain === destBChain) {
        alert("GBA Hub ==> GBA Hub transfers will be available again on Monday");
        var tx = config.tokens[token].contract.methods.memoTransferFrom(account, destAddr, amount, memo);
        // taskQ.push({ account, tx })
    } else {
        alert("GBA Hub ==> Hive transfers will be available Monday");
    }
};


