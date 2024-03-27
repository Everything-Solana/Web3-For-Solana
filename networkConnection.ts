import { Connection, PublicKey, clusterApiUrl , LAMPORTS_PER_SOL } from "@solana/web3.js";

let getBalance = async() => {
const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
const balance = await connection.getBalance(address);
console.log(`The balance of the account at ${address} is ${balance / LAMPORTS_PER_SOL} SOL`); 
console.log(`✅ Finished!`)
}

getBalance()
