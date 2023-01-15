import React, {useEffect, useState} from 'react';
import {Button, Modal, Image} from 'semantic-ui-react';
import BlokeDex from "./BlokeDex";
import Web3 from "web3";
import ABI from "../../mintAbi.json";
import Bloke from "./Bloke";

function Header() {
    const [errorMessage, setErrorMessage] = useState('');
    const [open, setOpen] = React.useState(false);
    const [nfts, setNfts] = useState([])
    const showNfts = async () => {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const contract = await new web3.eth.Contract(ABI, "0x931f88Fc7f13217ca30e5bd9AC9261a47A95DBd1");
        const nftBalance = await contract.methods.balanceOf(accounts[0]).call();// get balance of id
        let rows = []; // empty array;
        for (let i = 0; i < nftBalance; i++) {
            try {
                let tokenId = await contract.methods.tokenOfOwnerByIndex(accounts[0], i).call();
                let response = await fetch(`https://gateway.pinata.cloud/ipfs/QmcGUYsNBuuV7eFASQTeueHQiSDSZCxKxzqEH9uBMaB3z9/${tokenId}.json`)
                let data = await response.json();
                console.log(tokenId);
                rows.push(data);
            } catch (e) {
                setErrorMessage(e);
            }


        }

        setNfts(rows)
    }



    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="large"
            onClick={showNfts}
            trigger={<Button color='black'><i className="th icon"></i> </Button>}
            style={{width:'95%', height:'100%'}}
        >
            <Modal.Header>
                BLOKéDEX
                <div style={{float:'right'}}></div>
                <Button floated='right' color='black' icon='close' onClick={() => setOpen(false)}/>
            </Modal.Header>

            <Modal.Content>
                <Bloke blokeData={nfts}></Bloke>
            </Modal.Content>

        </Modal>
    )
}

export default Header;
/*
       <div>
            <Button onClick={showNfts} className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">Show</div>
                <div className="visible content">
                    <i className="eye icon"></i>
                </div>
            </Button>
            <div className="ui modal">

            </div>
            <Bloke blokeData={nfts}></Bloke>
        </div>*/


/*

 const showNfts = async () => {
     const web3 = new Web3(window.ethereum);
     const accounts = await window.ethereum.request({
         method: "eth_requestAccounts",
     });
     const contract = await new web3.eth.Contract(ABI, "0x931f88Fc7f13217ca30e5bd9AC9261a47A95DBd1");
     const nftBalance = await contract.methods.balanceOf(accounts[0]).call();// get balance of id
     let rows = []; // empty array;
     for (let i = 0; i < nftBalance; i++) {
         try {
             let tokenId = await contract.methods.tokenOfOwnerByIndex(accounts[0], i).call();
             let response = await fetch(`https://gateway.pinata.cloud/ipfs/QmcGUYsNBuuV7eFASQTeueHQiSDSZCxKxzqEH9uBMaB3z9/${tokenId}.json`)
             let data = await response.json();
             console.log(tokenId);
             rows.push(data);
         } catch (e) {
             console.log(e);
         }


     }

     setNfts(rows)
 }*/
