import React from "react";
import twitterSVG from './svg/twitter.svg';
import instSVG from './svg/inst.svg';
import seaSVG from './svg/sea.svg';
import ethSVG from './svg/eth.svg';
import "./css/contacts.css";
export default function Contacts(props){
    return(
        <div className="main_contacts main_contacts1">
            <div className="cont_item">
                <img src="img/i1.png" className="cont_img" />
                <div className="cont_text_container">
                    <div className="cont_text_header">
                    Adanede
                    </div>
                    <div className="cont_text_subheader">
                        <a href="https://twitter.com/adanedeofficial" target="_blank">@adanedeofficial</a><br></br><br></br>
                        info@adanede.com<br></br><br></br>
                        adanede.eth
                    </div>
                </div>
            </div>
            <div className="cont_item">
                <img src="img/i22.png" className="cont_img" />
                <div className="cont_text_container">
                    <div className="cont_text_header">
                    Associated
                    </div>
                    <div className="cont_text_cont_row">
                        <div className="cont_text_left_cont">
                            <div className="cont_text_link"><a href="https://twitter.com/vronsoeth" target="_blank">@vronsoeth</a></div>
                            <div className="cont_text_link"><a href="https://twitter.com/bamboo__eth" target="_blank">@bamboo_eth</a></div>
                            <div className="cont_text_link"><a href="https://twitter.com/BigFloppaEth" target="_blank">@BigFloppaeth&nbsp;&nbsp;</a></div>
                        </div>
                        <div className="cont_text_left_cont">
                            <div className="cont_text_link"><a href="https://twitter.com/reezo_eth" target="_blank">@reezo_eth</a></div>
                            <div className="cont_text_link"><a href="https://twitter.com/OptoAI_" target="_blank">@optoai_</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cont_item">
                <img src="img/i33.png" className="cont_img" />
                <div className="cont_text_container">
                    <div className="cont_text_header">
                    Behind the scene
                    </div>
                    <div className="cont_text_text">
                    These people were the architects of our technological universe, the guardians of our digital realm. They worked tirelessly in the shadows. Their work was not for fame or recognition, but for the satisfaction of knowing that they were part of something bigger than themselves, something that would make a change
                    </div>
                </div>
            </div>

            <div className="cont_text_mobile cont_text_mobile_co">
                <div className="main_stndart_title">Adanede</div>
                <div className="main_stndart_text main_stndart_text2">
                <a href="https://twitter.com/adanedeofficial" target="_blank">@adanedeofficial</a><br></br><br></br>
                info@adanede.com<br></br><br></br>adanede.eth
                </div>
                <div className="main_stndart_title">Associated</div>
                <div className="main_stndart_text main_stndart_text2">
                <a href="https://twitter.com/vronsoeth" target="_blank">@vronsoeth</a><br></br><br></br>
                <a href="https://twitter.com/bamboo__eth" target="_blank">@bamboo_eth</a><br></br><br></br>
                <a href="https://twitter.com/BigFloppaEth" target="_blank">@BigFloppaeth</a><br></br><br></br>
                <a href="https://twitter.com/OptoAI_" target="_blank">@optoai_</a><br></br><br></br>
                <a href="https://twitter.com/reezo_eth" target="_blank">@reezo_eth</a>
                </div>
            </div>
        </div>
    );
}