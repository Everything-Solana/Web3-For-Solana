"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { Keypair } = require("@solana/web3.js");
var web3_js_1 = require("@solana/web3.js");
var fs = require("fs");
// If you are not generating you own keypair and using already available code 
var secret = JSON.parse(fs.readFileSync("my-keypair.json").toString());
var secretKey = Uint8Array.from(secret);
var keypair = web3_js_1.Keypair.fromSecretKey(secretKey);
console.log("The public key is: ", keypair.publicKey.toBase58());
console.log("The secret key is: ", keypair.secretKey);
