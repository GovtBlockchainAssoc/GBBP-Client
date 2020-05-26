const config = require('../../src/config');
const Web3 = require('web3');
var web3;
import { replaceErrors } from './debug';
import * as  gbaToken from '../../../build/contracts/GBAToken.json';

let taskQ = [];                                                             // blockchain queue set-up
let lastTx = -1;
setInterval(checkQ, 1000);
let inCheckQ = false;

async function checkQ() {
    if (web3 == undefined || taskQ.length === 0 || inCheckQ) return;
    inCheckQ = true;
    var account = await getAcct();
    var tx = taskQ.shift();
    var tcount = await web3.eth.getTransactionCount(account);
    if (tcount === lastTx) { inCheckQ = false; return; }
    lastTx = tcount;
    await tx.send({ from: account, gas: 500000, nonce: tcount }).catch((e) => alert(JSON.stringify(e, replaceErrors)));
    inCheckQ = false;
};
try { checkQ(); } catch (e) { console.log }

async function getAcct() {
    if (!window['ethereum']) { alert("Metamask is either not installed or disabled"); return ''; }
    web3 = new Web3(window['ethereum']);
    window['ethereum'].enable();
    var accounts = await web3.eth.getAccounts();
    if (accounts.length == 0) { alert("You need be logged in to Metamask and allow the connection!"); return ''; };
    return accounts[0];
}

export async function sendTokens(token, blockchain, address, destBChain, destAddr, amount, memo) {
    if (blockchain != 'GBA Hub') { alert("Hive/Steem origin"); return; }
    var account = await getAcct();
    if (account == '') return;
    if (account != address) { alert("You must switch to that account in Metamask in order to send from it!"); return; }
    if (config.token[token].contract == undefined)
        config.token[token].contract = await new web3.eth.Contract(gbaToken.abi, config.token[token].address, { data: gbaToken.bytecode })
    var qty = amount * (10 ** config.token[token].decimals);
    if (blockchain === destBChain) {
        taskQ.push(config.token[token].contract.methods.memoTransferFrom(account, destAddr, qty, memo));
    } else {
        taskQ.push(config.token[token].contract.methods.cbTransferFrom(account, config.coldStorage, qty, destBChain, destAddr, memo));
    }
};
