import React, {useEffect, useState} from 'react'
import {Card, Label, Rating} from "semantic-ui-react";
import Image from "../elements/Image";


const Bloke = ({blokeData}) => {


    const ids = Object.keys(blokeData);
    return ( <div className="ui modal">{ids.map(id => {

                //console.log(Math.ceil(blokeData[id].attributes[7]['value'] / 100));
                //{}
                return (
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

                                <div style={{float: 'right', width: '45%', marginTop: '3%'}}
                                     className="ui tiny indicating progress red"  >
                                    <div className="bar " data-value={blokeData[id].attributes[1]['value']} data-total="105" >
                                        <div className="progress">
                                            <i className="heart icon white tiny"></i> {blokeData[id].attributes[1]['value']}</div>
                                    </div>

                                </div>
                            </div>
                            <div className="meta">

                                <div className="ui grid">
                                    <div className="two wide column"><i
                                        className="heart icon red"></i>{blokeData[id].attributes[1]['value']}</div>
                                    <div className="two wide column"><i
                                        className="crosshairs icon green"></i>{blokeData[id].attributes[2]['value']}</div>
                                    <div className="two wide column"><i
                                        className="shield icon black"></i>{blokeData[id].attributes[3]['value']}</div>
                                    <div className="two wide column"><i
                                        className="lightning icon yellow"></i>{blokeData[id].attributes[4]['value']}</div>
                                    <div className="two wide column">
                                        <i className="plus circle icon blue"></i>{blokeData[id].attributes[5]['value']}</div>
                                    <div className="two wide column"><i
                                        className="shield alternate icon red"></i>{blokeData[id].attributes[6]['value']}</div>
                                </div>





                            </div>

                        </div>

                    </div>
                )
            })}
            </div>
        )

}

export default Bloke
/**/