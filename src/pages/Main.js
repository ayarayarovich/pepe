import React, {useState} from "react";
import "./glitch.css";
export default function Main(props){
    return (
        <div>
            <div className='main_title glitcher startglitcher' title="/adanede//" style={props.style}>
                /adanede//
            </div>
            <div className="startglitcher_mob">
                <div className='main_title glitcher startglitcher' title="ad" style={props.style}>
                    ad
                </div>
                <div className='main_title glitcher startglitcher' title="nd" style={props.style}>
                    nd
                </div>
            </div>
        </div>
    )
}