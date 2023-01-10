import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import {SectionTilesProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import {ethers, BigNumber} from "ethers";
import mintAbi from "../../../src/assets/abi/mintAbi.json";
import {Icon} from "semantic-ui-react";

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const Testimonial = ({
                         className,
                         topOuterDivider,
                         bottomOuterDivider,
                         topDivider,
                         bottomDivider,
                         hasBgColor,
                         invertColor,
                         pushLeft,
                         ...props
                     }) => {

    const outerClasses = classNames(
        'testimonial section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'testimonial-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap',
        pushLeft && 'push-left'
    );

    const sectionHeader = {
        title: 'Try your luck!',
        paragraph: 'A randomly generated BLOKéMON will be minted to your wallet!'
    };

    const mintAddress = "0x931f88Fc7f13217ca30e5bd9AC9261a47A95DBd1";
    const [mintAmount, setMintAmount] = useState(1);
    const [accounts, setAccounts] = useState([]);

    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                mintAddress,
                mintAbi,
                signer
            );
            // generate an array of random IDs based on the mint amount.
            const arr = [];
            for (let i = 0; i < mintAmount; i++) {
                let nftId = Math.round(Math.random() * (50 - 1) + 1);
                try {
                    const ownerOfResponse = await contract.ownerOf(nftId);
                    if (typeof ownerOfResponse === "string") {
                        i--;
                    }
                } catch (e) {
                    // we got the err meaning it does not exist add to arr
                    if (!arr.includes(nftId)) {
                        arr.push(nftId);
                    } else {
                        i--;
                    }

                }

            }


            console.log(arr);


            try {
                const response = await contract.mint(arr, {
                    value: ethers.utils.parseEther((0.001 * arr.length).toString())
                });
                console.log("Response: ", response)
            } catch (err) {
                console.log("Error: ", err)
            }

        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 25) return;
        setMintAmount(mintAmount + 1);
    };

    async function connectAccounts() {
        // handle connection to set accounts
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setAccounts(accounts);
        }
    }

    useEffect(() => {
        connectAccounts();
    }, []);
    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content"/>
                    {isConnected ? (
                        <div align="center" >
                            <div>
                                <button className="button button-primary button-wide-mobile button-sm"
                                        onClick={handleDecrement}>-
                                </button>
                                <input className="form-control"  style={{height: '35px', width: '120px', borderRadius: '5px'}} readOnly type="number" value={mintAmount}/>
                                <button className="button button-primary button-wide-mobile button-sm"
                                        onClick={handleIncrement}>+
                                </button>
                            </div>

                            <button className="button button-primary button-wide-mobile button-sm"
                                    onClick={handleMint}>Mint!
                            </button>

                        </div>
                    ) : (
                        <button className="button button-primary button-wide-mobile button-sm"
                                onClick={connectAccounts}>Connect Account</button>
                    )}
                </div>
            </div>
        </section>
    );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;

/**/