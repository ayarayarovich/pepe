import React, {useEffect, useState} from "react";
import $ from "jquery";
import { sysColors } from "../components/colors";
import Pr1SVG from "./svg/pr1.svg";
import Pr2SVG from "./svg/pr2.svg";
import Pr3SVG from "./svg/pr3.svg";
import { connect } from 'react-redux';
import Slider from "../components/Slider";
var locs = false;

const vw = window.innerWidth / 100;
const vh = window.innerHeight / 100;
var moStart = 0, moEnd = 0;
function toStart(e){
    if(vh > vw) moStart = e.touches[0].pageX;
}
function toMove(e){
    if(vh > vw) moEnd = e.touches[0].pageX;
}
function toEnd(e){
    if(vh > vw){
        // console.log(toStart, toEnd);
        let el = document.querySelectorAll('.project_slide_control'), ind = 0;
        el.forEach((item, key)=> {
            if(item.classList.contains('project_slide_control_active')) ind = key;
        });
        if(moStart > moEnd){
            if(ind == 2) el[0].click();
            else el[ind + 1].click();
        }
        else{
            if(ind == 0) el[el.length - 1].click();
            else el[ind - 1].click();
        }

    }

}

var bloAn = false;

function Projects(props){
    const [prevSlide, setPrevSlide] = useState(1);
    const [slide, setSlide] = useState(1);
    const [slider, setSlider] = useState(null);
    const [slideAnimationLock, setSlideAnimationLock] = useState(false);
    const slideText = [
        {title1: "Neura", title2: "/nɪura/", title3: "Noun", text: "Neura is a true decentralization of art and complete freedom of expression. Every owner acts like a node in a global net. You have the power to lead your art the way you want and. The rules of the universe are clear, but the result is always unpredictable... All the answers are in Neura."},
        {title1: "SupremePunks", title2: "/supri:m panks/", title3: "Noun", text: "The collection consists of 151 unique artworks, each hand-crafted by professional artists and inspired by Suprematism and Cryptopunk. The idea of the whole collection is to rethink art in the era of the introduction of artificial intelligence and the reduction of creativity in it. "},
        // {title1: "Sakrai", title2: "/nɪura/", title3: "Noun", text: "A collection of character NFTs that immerses you in a multicultural universe full of unique characters, stories, and art. The plight of a young warrior is depicted in the mysteries of the ancient world of Sakrai, which once entered, it is impossible to get out."},
        {title1: "Sakrai", title2: "/nɪura/", title3: "Noun", text: "A collection of character NFTs that immerses you in a multicultural universe full of unique characters, stories, and art. The plight of a young warrior is depicted in the mysteries of the ancient world of Sakrai, which once entered, it is impossible to get out. Yet the application of it is still to be announced."},
     ]
    const slideLinks = [
        {control: false, value: {link: "test.test", name: "test"}},
        {control: true, value: {link: "adanede.com", name: "TBA"}},
        {control: true, value: {link: "https://supremepunks.adanede.com/", name: "supremepunks.adanede.com"}},
        {control: true, value: {link: "adanede.com", name: "TBA"}}
    ]
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    useEffect(()=>{

        props.setSystemColor(sysColors[1].main);
        props.setSubColor(sysColors[1].sub);
        props.setRightText(slideText[0]);
        props.setSpecialRightText(true);
        props.setRightLink(slideLinks[1]);
        return (() => {
            props.setSystemColor(sysColors[0].main);
            props.setSubColor(sysColors[0].sub);
            props.setSpecialRightText(false);
            props.setRightLink(slideLinks[0]);
            props.setRightText({title1: "ADANEDE", title2: "/eɪdəned/", title3: "Noun", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit felis, gravida vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue. Fusce vitae eros rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie."})
        })
    },[])
    useEffect(()=>{
        if (!slider){
            return
        }
        slider.clearThree();
    })
    useEffect(() => {
        console.log('---', 3)
        let mainSlider = document.getElementById("projectSlider");
        let mainSlides = mainSlider.getElementsByClassName("slide");
        let dispImg = mainSlider.getElementsByClassName("displacementMap")[0];
        // GETBACK
        let _slider = initSlider(mainSlider, mainSlides, dispImg, window.innerWidth, window.innerHeight);
        setSlider(_slider);
        setTimeout(()=>{_slider.change_img(1);}, 100);
        props.setProjectSlider(_slider);
        if(vh > vw){
            setTimeout(function(){
                if(document.querySelector('.project_sliders') == null){
                    if(!document.querySelector('.mobile-nav-item[data-selm="projects"]').classList.contains('mobile-nav-item-active'))
                        document.querySelector('.mobile-nav-item[data-selm="projects"]').click();
                }
            }, 300);
        }
        /* return () => {
            _slider.change_img(0);
          }; */
        document.querySelector('.rightNav_main a').classList.add('noc');
    }, [])
    let setSlideAction = (curSlide) => {
        console.log('---', 1)
        if(!bloAn){
            console.log('---', 2)
            if(curSlide == slide) return false;
            $('.slide1_text').addClass('hideOp');
            $('.slide1_text:eq(' + (curSlide - 1) + ')').removeClass('hideOp');
            if (slideAnimationLock) return;
            bloAn = true;
            setSlideAnimationLock(true);
            let pr_sel = document.getElementById('projectSlider').getAttribute('data-sel');
            let delay = props.animate1();
            slider.change_img(curSlide);
            setSlide(curSlide);
            setPrevSlide(slide);
            props.setSystemColor(sysColors[curSlide].main);
            props.setSubColor(sysColors[curSlide].sub);
            setTimeout(function(){
                props.setRightText(slideText[curSlide - 1]);
                props.setRightLink(slideLinks[curSlide]);
            }, 300);
            if(pr_sel == '2')
                setTimeout(function(){document.getElementById('projectSlider').setAttribute('data-sel', curSlide);}, 400)
            else
                document.getElementById('projectSlider').setAttribute('data-sel', curSlide);
            setSlideAnimationLock(false);
            $('.project_slide_control').removeClass('project_slide_control_active');
            $('.project_slide_control:eq(' + (curSlide - 1) + ')').addClass('project_slide_control_active');
            $('.sub_desk').removeClass('sub_desk_active');

            $('.sub_desk:eq(' + (curSlide - 1) + ')').addClass('sub_desk_active');
            if(document.querySelector('.slide_back_im') != null){
                if(curSlide == 2)
                    document.querySelector('.slide_back_im').classList.add('active');
                else
                    document.querySelector('.slide_back_im').classList.remove('active');
            }

            if(curSlide == 1 || curSlide == 3){
                document.querySelector('.rightNav_main a').classList.add('noc');
                document.querySelector('.sub_desk1').style.transform = "rotate(0deg)";
                document.querySelector('.sub_desk2').style.transform = "rotate(180deg)";
                document.querySelector('.sub_desk3').style.transform = "rotate(0deg)";
            }
            if(curSlide == 2){
                document.querySelector('.sub_desk1').style.transform = "rotate(-90deg)";
                document.querySelector('.sub_desk2').style.transform = "rotate(90deg)";
                document.querySelector('.sub_desk3').style.transform = "rotate(-90deg)";
                document.querySelector('.rightNav_main a').classList.remove('noc');
            }
            setTimeout(()=>{
                bloAn = false;
            }, 1000);
        }
    }
    let initSlider = (sliderEl, slides, dispMap, width, height, background = 0xDEDED8) => {
        const slider = new Slider(
            background,
            sliderEl,
            0, //delay
            dispMap,
            0.7, //duration
            slides,
            0.5, //intensity
            width,
            height,
            "canvas-projects"
        )
        console.log(sliderEl)
        return slider;
      }
    let roundControllerLeft;
    var block = '';
    var block_text = '';
    if(vw > vh){
        block = <><img className="slide" src="img/s0.png" />
        <img className="slide" src="img/project111.png" />
        <img className="slide" src="img/project222.png" />
        <img className="slide" src="img/project333.png" />
        </>
    }
    else{
        block = <><img className="slide" src={"img/s0.png"} />
        <img className="slide" src={"img/project1.png"} />
        <img className="slide" src={"img/project2.png"} />
        <img className="slide" src={"img/project3.png"} />
        </>;

        block_text = <>
            <div className="slide1_text" id="slide1_text_1">
                <div className="slide1_text_zag">Neura</div>
                <div className="slide1_text_t1">/ˈnʊr.ɑː/</div>
                <div className="slide1_text_t2">Noun</div>
                <div className="slide1_text_bot">TBA</div>
            </div>
            <div className="slide1_text hideOp" id="slide1_text_2">
                <div className="slide1_text_zag">SupremePunks</div>
                <div className="slide1_text_t1">/suːˈpriːm pʌŋks/</div>
                <div className="slide1_text_t2">Noun</div>
                <div className="slide1_text_bot">supremepunks.adanede.com</div>
            </div>
            <div className="slide1_text hideOp" id="slide1_text_3">
                <div className="slide1_text_zag">Sakrai</div>
                <div className="slide1_text_t1">/səkraːɪ/</div>
                <div className="slide1_text_t2">Noun</div>
                <div className="slide1_text_bot">TBA</div>
            </div>
        </>
    }
    switch (slide){
        case 2:
            roundControllerLeft = 1.8;
            break;
        case 3:
            roundControllerLeft = 3.5;
            break;
        default:
            roundControllerLeft = 0;
            break;
    }
    return (
        <>

        <div className="project_sliders" onTouchStart={(e) => {toStart(e)}} onTouchMove={(e) => {toMove(e)}} onTouchEnd={(e) => {toEnd(e)}}>
            <div className="projectsSlider" id="projectSlider" data-sel="1">
                <div className="defs">

                    {block}
                    <img className="displacementMap" src="img/water.png" />

                    {/* <div className="slide1">
                        <img className="slide_project1" src={project1} />
                    </div> */}
                </div>
            </div>
            <div className="slider_texts">
                {block_text}
            </div>

        {/*     <div id="slide1" className="project_background_wrapper project_background_wrapper_1">
                <img className="project_background project_background_1" src="img/pr1.png" />
                <div className="slider_centroid">
                    <img className="project_img" src={Pr1SVG} />
                </div>
            </div>

            <div id="slide2" className="project_background_wrapper project_background_wrapper_2">
                <img className="project_background project_background_2" src="img/pr2.png" />
                <div className="slider_centroid">
                    <img className="project_img" src={Pr2SVG} />
                </div>
            </div>
            <div id="slide3" className="project_background_wrapper project_background_wrapper_3">
                <div className="project_strange_title">in development</div>
                <img className="project_img" src={Pr3SVG} />
            </div> */}
        </div>
        <div className="project_slider_controller">
            <div className="sub_desk sub_desk1 sub_desk_active" onClick={(e) => {setSlideAction(1)}}><img className="displacementMap" src="img/Subtract.svg" />  <img className="displacementMap subActs" src="img/Subtract1.svg" /> </div>
            <div className="sub_desk sub_desk2" onClick={(e) => {setSlideAction(2)}}><img className="displacementMap" src="img/Subtract.svg" /> <img className="displacementMap subActs" src="img/Subtract1.svg" /> </div>
            <div className="sub_desk sub_desk3" onClick={(e) => {setSlideAction(3)}}><img className="displacementMap" src="img/Subtract.svg" /> <img className="displacementMap subActs" src="img/Subtract1.svg" /> </div>

            <div className={"project_slide_control project_slide_control_active"} onClick={(e) => {setSlideAction(1)}}><div style={{left: roundControllerLeft + "vw"}} className="project_slide_control_activator"></div></div>
            <div className={"project_slide_control"} onClick={(e) => {setSlideAction(2)}}><div className="project_slide_control_activator"></div></div>
            <div className={"project_slide_control"} onClick={(e) => {setSlideAction(3)}}><div className="project_slide_control_activator"></div></div>
        </div>
        </>

    )
}

const mapStateToProps = (store) => {
    return {
        page: store.main.page,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        setSystemColor: (color) => dispatch({type: "SET_SYSTEM_COLOR", payload: color}),
        setSubColor: (color) => dispatch({type: "SET_SUB_COLOR", payload: color}),
        setRightText: (text) => dispatch({type: "SET_RIGHT_TEXT", payload: text}),
        setSpecialRightText: (text) => dispatch({type: "SET_SPECIAL_RIGHT_TEXT", payload: text}),
        setRightLink: (link) => dispatch({type: "SET_RIGHT_LINK", payload: link}),
        setProjectSlider: (slider) => dispatch({type: "SET_PROJECT_SLIDER", payload: slider}),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Projects);
