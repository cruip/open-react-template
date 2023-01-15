import React, {useEffect, useState} from 'react'
import {Card, Label, Rating} from "semantic-ui-react";
import Image from "../elements/Image";
import Web3 from "web3";
import ABI from "../../mintAbi.json";


const Bloke = ({blokeData}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [error, setError] = useState(null);
    const ids = Object.keys(blokeData);

    return (<div className="scrolling content">
            <div className="ui grid">
                {ids.map(id => {

                    //console.log(Math.ceil(blokeData[id].attributes[7]['value'] / 100));
                    //{}
                    return (
                        <div className="three wide column">
                            <div className="ui card">
                                <div className="extra content">
                                    <span>{blokeData[id].attributes[0]['value'].toUpperCase()}</span>


                                    <strong style={{float: 'right'}}>{blokeData[id].name.toUpperCase()}</strong>


                                </div>
                                <div className="image">
                                    <Image
                                        src={blokeData[id].image} alt="Features split 01"
                                        width={528}
                                        height={396}/>
                                </div>
                                <div className="content">
                                    <div className="extra content">
                                        <Rating

                                            icon="star"
                                            defaultRating={Math.floor(blokeData[id].attributes[7]['value'] / 100)}
                                            maxRating={4}
                                            style={{cursor: 'pointer', width: 100}}
                                            disabled/>

                                            <Label style={{float: 'right'}} onClick={() => setIsVisible(!isVisible)}>{blokeData[id].attributes[7]['value']}</Label>
                                            <div style={{color: 'black'}}>
                                                {isVisible && <div className="ui grid">
                                                    <div className="three wide column"><i
                                                        className="heart icon red"></i>{blokeData[id].attributes[1]['value']}
                                                    </div>
                                                    <div className="three wide column"><i
                                                        className="crosshairs icon green"></i>{blokeData[id].attributes[2]['value']}
                                                    </div>
                                                    <div className="three wide column"><i
                                                        className="shield icon black"></i>{blokeData[id].attributes[3]['value']}
                                                    </div>
                                                    <div className="three wide column"><i
                                                        className="lightning icon yellow"></i>{blokeData[id].attributes[4]['value']}
                                                    </div>
                                                    <div className="three wide column">
                                                        <i className="plus circle icon blue"></i>{blokeData[id].attributes[5]['value']}
                                                    </div>
                                                    <div className="three wide column"><i
                                                        className="shield alternate icon red"></i>{blokeData[id].attributes[6]['value']}
                                                    </div>
                                                </div>}

                                            </div>

                                        </div>

                                    <div className="meta">


                                    </div>

                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Bloke
/* */