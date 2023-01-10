import React, {useEffect, useState} from 'react'
import Web3 from "web3";
import ABI from "../../mintAbi.json";
import Bloke from "./Bloke";

const BlokeDex = () => {


    const [nfts, setNfts] = useState([])


    useEffect(() => {
        async function fetchData() {
            // Connect to the Ethereum network
            const web3 = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            // Load the wallet and get its NFT contract instance
            const nftContract = new web3.eth.Contract(ABI, "0x931f88Fc7f13217ca30e5bd9AC9261a47A95DBd1");
            const nftBalance = await nftContract.methods.balanceOf(accounts[0]).call();// get balance of id

            let rows = []; // empty array;
            for (let i = 0; i < nftBalance; i++) {
                let tokenId = await nftContract.methods.tokenOfOwnerByIndex(accounts[0], i).call();
                let response = await fetch(`https://gateway.pinata.cloud/ipfs/QmcGUYsNBuuV7eFASQTeueHQiSDSZCxKxzqEH9uBMaB3z9/${tokenId}.json`)
                rows.push(await response.json());
                //rows.push(data);

            }
            setNfts(rows)
        }


        fetchData().then(r => {
        });

    }, []);

    console.log(typeof nfts)


    return (
        <Bloke blokeData={nfts}/>
    );


}

export default BlokeDex
