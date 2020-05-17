"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = require('../../src/config');
const Web3 = require('web3');
if (config.addrCurr != '') { // allow for blockchainless debugging
    exports.web3 = new Web3(config.addrCurr);
}
const gbaToken = __importStar(require("../../../build/contracts/GBAToken.json"));
config.tokens.forEach((tName) => {
    config.token[tName].contract = new exports.web3.eth.Contract(gbaToken.abi, config.token[tName].address, { data: gbaToken.bytecode });
});
let taskQ = []; // blockchain queue set-up
let lastTx = -1;
setInterval(checkQ, 1000);
function checkQ() {
    return __awaiter(this, void 0, void 0, function* () {
        if (taskQ.length === 0)
            return;
        let { account, tx } = taskQ.shift();
        alert(account + ' - ' + JSON.stringify(tx));
        let tcount = yield exports.web3.eth.getTransactionCount(account.address);
        if (tcount === lastTx)
            return;
        lastTx = tcount;
        yield tx.send({ from: account.address, gas: 500000, nonce: tcount }).catch((e) => console.log("ethQ tx send ERROR: " + e));
    });
}
;
try {
    checkQ();
}
catch (e) {
    console.log;
}
function getAcct() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!window['ethereum']) {
            alert("Metamask is either not installed or disabled");
            return '';
        }
        var web3 = new Web3(window['ethereum']);
        window['ethereum'].enable();
        var accounts = yield web3.eth.getAccounts();
        if (accounts.length == 0) {
            alert("You need be logged in to Metamask and allow the connection!");
            return '';
        }
        ;
        return accounts[0];
    });
}
function sendTokens(token, blockchain, address, destBChain, destAddr, amount, memo) {
    return __awaiter(this, void 0, void 0, function* () {
        if (blockchain != 'GBA Hub') {
            alert("Hive/Steem origin");
            return;
        }
        var account = yield getAcct();
        if (account == '')
            return;
        if (account != 'address') {
            alert("You must switch to that account in Metamask in order to send from it!");
            return;
        }
        if (blockchain === destBChain) {
            alert("GBA Hub ==> GBA Hub transfers will be available again on Monday");
            var tx = config.tokens[token].contract.methods.memoTransferFrom(account, destAddr, amount, memo);
            // taskQ.push({ account, tx })
        }
        else {
            alert("GBA Hub ==> Hive transfers will be available Monday");
        }
    });
}
exports.sendTokens = sendTokens;
;
//# sourceMappingURL=EtherOps.js.map