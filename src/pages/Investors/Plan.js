import React from "react";
import bottomLimiterSvg from './../img/limiter.png';
export default function Plan(props){
    return (
        <div className="main_wrapper">
            <img className="top_limiter" src={bottomLimiterSvg} />
            <div className="main_limmiter main_top_limmiter"></div>
            <div className="main_text_wrapper">
                <div className="main_stndart_title main_stndart_title1">Stage 1. Inception</div>
                <div className="main_stndart_text main_stndart_text1">
                    At this stage, we will create the most iconic and traditional projects and products. They will be simple, but premium. From here you will recognize our identity. Through the results of our work we convey our ideas, approaches and attitude to the intended visual and semantic content, show the values and foundation on which the brand will be built, and bring people together, gathering the efforts of all like-minded people for the process of creation
                    <div className="plan_bot_br"></div>
                </div>
                <div className="main_stndart_title main_stndart_title1">Stage 2. Path </div>
                <div className="main_stndart_text main_stndart_text1">
                    The longest and the most challenging period, determining the direction to strengthen our visual brand. Our focus is on assembling the right team - individuals who are worthy and committed to the cause. We do not seek thousands of onlookers but hundreds of fighters who share our vision
                    <div className="plan_bot_br"></div>
                </div>
                <div className="main_stndart_title main_stndart_title1">Stage 3. Riddle</div>
                <div className="main_stndart_text main_stndart_text1">
                    We will focus on revealing the most unexpected sides of our company. We built the entire ecosystem interconnected and filled with secret ciphers, creating a single puzzle whose solution goes beyond traditional boundaries of our computers, homes, countries, and even the NFT space. By exploring these unexpected aspects, we hope to attract a diverse and curious audience who share our passion for exploration and creativity
                    <div className="plan_bot_br"></div>
                </div>
                <div className="main_stndart_title main_stndart_title1">Stage 4. Diversity</div>
                <div className="main_stndart_text main_stndart_text1 main_stndart_text4">
                    All the while, somewhere very deep in the darkness outside from all eyes and attention, a multitude of ambitious ideas are growing and becoming more and more real. They will slowly grow to become branches on a tree, and when the tree itself is ready, all the branches will blossom. The goal is to create and develop from nothing something that can live on its own. These will be self-realized experimental products that do not require the basic resources of the entire ecosystem, but only supplement it. The association will be the basis for the realization of these products
                </div>
            </div>
            <div className="main_limmiter main_bottom_limmiter"></div>
            <img className="bottom_limiter" src={bottomLimiterSvg} />
        </div>
    )
}