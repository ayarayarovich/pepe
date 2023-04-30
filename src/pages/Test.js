import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import "./test/test.css";
import aboutSVG from "./svg/navigation/active/about.svg";
import contactsSVG from "./svg/navigation/active/contacts.svg";
import projectsSVG from "./svg/navigation/active/projects.svg";
import whitepaperSVG from "./svg/navigation/active/whitepaper.svg";
import planSVG from "./svg/navigation/active/plan.svg";
import visionSVG from "./svg/navigation/active/vision.svg";
import statsSVG from "./svg/navigation/active/stats.svg";
import investorsSVG from "./svg/navigation/active/investors.svg";

export function Test(props){
    const [nextAction, setNextAction] = useState(null);
    const [slider, setSlider] = useState(null)
    useEffect(()=>{
/*         const container = document.getElementById('slider')
        const images = document.querySelectorAll('.slide')
        const displacementMap = document.querySelectorAll('.displacementMap')[0]
        const slideSize = 50

        const slider = new Slider({
            background: 0xDEDED8, 
            container,
            delay: 0,
            displacementMap,
            duration: 0.5,
            images,
            intensity: 0.5, //0.05,
            width: 200,
            height: 40
        })
        setNextAction(slider.next);
        setSlider(slider) */
    },[])

    return(
    <>
        <div className="content" id="slider" >
            <div className="defs">
                <img className="slide" src="img/nav/not_active/about.png" />
                <img className="slide" src="img/nav/not_active/investors.png" />
                <img className="displacementMap" src="img/water.png" />  
            </div>
        </div>
        <div onClick={(e)=> {slider.next()}}>следующий</div>
    </>
    )
}