// const { Keypair } = require("@solana/web3.js");
import { Keypair } from "@solana/web3.js";
import * as fs from "fs";

// If you are not generating you own keypair and using already available code 

const secret = JSON.parse(fs.readFileSync("my-keypair.json").toString())as number[];
const secretKey = Uint8Array.from(secret)
const keypair = Keypair.fromSecretKey(secretKey);

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);