import React from "react";
import BluredText from './img/bluredText.png'
import BluredText1 from './img/bluredText1.png'
export default function White(props){
    return(
        <div className="main_wrapper">
            {/* <div className="aimless_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit felis, gravida vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue. Fusce vitae eros rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie metus eu elit gravida dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <br></br><br></br>
                Fusce velit felis, gravida vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue. Fusce vitae eros rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie metus eu elit gravida dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit felis, gravida vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue. Fusce vitae eros rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie metus eu elit gravida dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit felis, gravida vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue.
                <br></br><br></br><br></br>
                Fusce vitae eros rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie metus eu elit gravida dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit felis, gravida vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue. Fusce vitae eros rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie metus eu elit gravida dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit felis, gravida vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue. Fusce vitae eros rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie metus eu elit gravida dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <br></br>
                Fusce velit felis, gravida vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue. Fusce vitae eros rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie metus eu elit gravida dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit felis, gravida vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue. Fusce vitae eros rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie metus eu elit gravida dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit felis, gravida vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue.
            </div>
            <div className="text_blur"></div> */}
            <img className="centroidIme bluu1" src={BluredText1} style={{height: "106%", maxWidth: "106%"}} />
            <div className="centroid cont_stat_coms1">
                <div className='main_title s-128 glitcher' title="/coming soon//">
                    /coming soon//
                </div>
            </div>
            
            <div className="stat_texts_blur stat_texts_blur2 stat_texts_blurbl">
                First of all, Adanede is not a team. It is not a group of people united by the same activity or having similar goals. It is not a startup or a company. It does not report to anyone, it does not follow the rules, it does not guided by profit or any metrics. It is not tangible. It is not personal.
                <br></br><br></br>
                Adanede is an idea. It is defined as it is and cannot be deleted, erased, banned. All it can do is to make people believe. And that belief gives people power. It does not seek of changing anyone for now. It gathers individuals who holds the same idea somewhere very deep in their hearts
                Adanede is an idea. It is defined as it is and cannot be deleted, erased, banned. All it can do is to make people believe. And that belief gives people power. It does not seek of changing anyone for now. It gathers individuals who holds the same idea somewhere very deep in their hearts
            </div>
            <div className="cont_stat_coms cont_stat_coms2">
                <div title="Coming" className="main_title s-128 glitcher">Coming</div>
                <div title="soon" className="main_title s-128 glitcher">soon</div>
            </div>
        </div>
    );
}