import React, {useState, useEffect, useRef} from 'react';
import mojs from '@mojs/core'
import $ from "jquery";
import Main from './pages/Main';
import EmptyPage from './pages/EmptyPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Plan from './pages/Investors/Plan';
import Contacts from './pages/Contacts';
import White from './pages/White';
import Stats from './pages/Investors/Stats';
import Vision from './pages/Investors/Vision';
import { Test } from './pages/Test';
import { connect } from 'react-redux';
import Slider from './components/Slider';
import logo from './logo.svg';
import logoWhite from "./log_white.svg";
import dot from './dot.svg';
import dotWhite from "./dot_white.svg";
import logoPart from "./pages/svg/logo_part.svg";
import logoGlitchRightBottom from './pages/svg/logo_glitch_right_bottom.svg';
import logoGlitchRightTop from './pages/svg/logo_glitch_right_top.svg';
import logoGlitchLeftBottom from './pages/svg/logo_glitch_left_bottom.svg';
import './App.css';
import './Color.css';
import './Anima.css';
import './Slider.css';
import './Blur.css';
import bigLogoSVG from './pages/svg/big_logo.svg';
import logoGlitchSVG from './pages/svg/logo_glitch.svg';
import logoGlitch2 from './pages/svg/logo_glitch_2.svg';
import logoGlitchDop from './pages/svg/logo_glitch_dop.svg';
import logoGlitchDop2 from './pages/svg/logo_glitch_dop2.svg';
import logoDot from './pages/svg/logo_dot.svg';
import logoDot2 from './pages/svg/logo_dot2.svg';
import logoDot3 from './pages/svg/logo_dot3.svg';


import letterA from './pages/svg/letterA.svg';
import letterD from './pages/svg/letterD.svg';
import letterE from './pages/svg/letterE.svg';
import letterN from './pages/svg/letterN.svg';
import letterMob from './i1.png';
import e from "./e.svg"
import { Interpolant } from 'three';

import { Centroid } from './pages/animationControls/centerBlur';
class Stager{
  constructor(){
    this.stage = 0;
  }
}

var activeMenus = '';
var blocAn = false;
var bloMe = false;
var timerOutBlack, timerOut2, timerOut3;
var ee_e = '', ee_text = '';

function setStyInv(){
  // document.querySelector('.dopNavigation-container').style.top = 'calc(' + document.querySelector('.leftNav').getBoundingClientRect().top + 'px + 17vw)';
  // if(document.querySelector('.startglitcher') != null)
  //   document.querySelector('.startglitcher').style.top = 'calc(' + (document.querySelector('.leftNav').clientHeight / 2 + 84) + 'px)';
  // if(document.getElementById('s3_dot_1') != null && document.querySelector('.top_limiter') != null)
  //   document.querySelector('.top_limiter').style.top = (document.querySelector('#s3_dot_1').getBoundingClientRect().top - 235) + 'px';

  var vw = window.innerWidth;
  var vh = window.innerHeight;

  if(document.querySelector('.stage0_container') != null){
    if(vh <= 1080 && vw > vh){
      $('.glitchCont').attr('style', "top: calc(" + (document.querySelector('.stage0_text_container').getBoundingClientRect().top - document.getElementById('s1_letter_d2').offsetHeight) + "px - 10vh)");
      $('.word_container').attr('style', "top: calc(" + (document.querySelector('.stage0_text_container').getBoundingClientRect().top - document.getElementById('s1_letter_d2').offsetHeight) + "px - 14vh)");
    }
  }
  if(document.getElementById("s3_dot_1") != null && document.querySelector('.stage0_container') == null){
    if(vh > 1080 && vw > vh){
      $("#s3_dot_1").css("top", "9.6vw");
      $("#s3_dot_2").css("top", "9.6vw");
    }
    else{
      $("#s3_dot_1").css("bottom", "calc(85vh - 0.8vw)");
      $("#s3_dot_2").css("bottom", "calc(85vh - 0.8vw)");
    }
  }
  // if(document.querySelector('.top_limiter') != null){
  //   if(vh <= 1080 && vw > vh){
  //     $('.top_limiter').attr('style', "height: 200px; top: unset; bottom: calc(85vh - " + (document.getElementById('s3_dot_1').getBoundingClientRect().top * 0.5) + "px)");
  //   }
  // }
}
setTimeout(setStyInv, 500);
setTimeout(setStyInv, 1000);


function corrMenus(){
  clearTimeout(timerOutBlack);
  activeMenus = ee_text;
  let parent = (ee_e.target.className == 'animeText') ? ee_e.target : ee_e.target.parentElement;
  let els = document.querySelectorAll('.animeText');
  const navigation1 = ["plan", "vision", "stats"];
  let old_el = document.querySelector('.menCl');
  els.forEach((item, key) => {
    item.classList.remove('anacb');
    if(item.getAttribute('data-val') != ee_text){
      // if(item.classList.contains('menCl')){
        let ff = false;
        if(!(activeMenus == "investors" && item.getAttribute('data-val') == 'vision') && !(navigation1.indexOf(activeMenus) != -1 && item.getAttribute('data-val') == 'investors')){
          // if($(item).find('.adActive1').length > 0){
          //   var ev = new MouseEvent("mouseout", {
          //     bubbles: true,
          //     cancelable: true,
          //     view: window,
          //     relatedTarget: null
          //   });
          //   item.dispatchEvent(ev);
          // }

          // setTimeout(function(){
          //   let el1 = item;
          //   let els1 = el1.querySelectorAll('.adActive1');
          //   els1.forEach(item1 => {
          //     item1.className = 'ad';
          //   });
          // }, 1000);
        }
      // }
      // setTimeout(function(){
        item.classList.remove('menCl');

        if(activeMenus == "investors"){
          let el1 = document.querySelector('[data-val="vision"]');
          el1.classList.add('menCl');
          // let els1 = el1.querySelectorAll('.ad');
          // els1.forEach(item1 => {
          //   item1.className = 'adActive1';
          // });
        }
        if(navigation1.indexOf(activeMenus) != -1){
          let el1 = document.querySelector('[data-val="investors"]');
          el1.classList.add('menCl');
          // let els1 = el1.querySelectorAll('.ad');
          // els1.forEach(item1 => {
          //   item1.className = 'adActive1';
          // });
        }
      // }, 100);


      // let els1 = item.querySelectorAll('.adActive1');
      // els1.forEach(item1 => {
      //   item1.className = 'ad';
      // });
    }
    else{
      item.classList.add('menCl');
      // setTimeout(function(){
      //   item.classList.add('menCl');
      //   let els1 = item.querySelectorAll('.ad');
      //   els1.forEach(item1 => {
      //     item1.className = 'adActive1';
      //   });
      // }, 1000);
    }
  });
  let sttout = 0;
  if(old_el != null && old_el.getAttribute('data-val') == "projects")
    sttout = 1000;

  setTimeout(function(){
    if(activeMenus != "projects"){
      document.querySelector('.rightNav_main > div').innerHTML = 'The word is formed by combining terms "ada" and "eden”.  It reflects the idea of exploring and using the resources that are around us at the moment and creating something new out of them, as well as the idea of technology and the pursuit of the ideal place that humanity has dreamed of.';
    }
    // if(activeMenus == 'contacts'){
    //   document.querySelector('.rightNav_main > div').innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing\n elit. Fusce velit felis, gravida vel mattis eget, molestie non sem. Vestibulum aliquam sagittis neque sit amet congue. Fusce vitae eros rutrum, commodo mi non, convallis ex. Sed vitae lorem nibh. Aliquam molestie.';
    // }
  }, sttout);
  if(activeMenus != 'projects'){
    timerOutBlack = setTimeout(function(){$('.App').removeClass('App_black'); }, 1000);
  }
}


function NavItem(props){
  const [text, setText] = useState(props.text);
  const [stageObject, setStageObject] = useState(new Stager());
  const [maxStage, setMaxStage] = useState(10);
  const [timeOffset, setTimeOffset] = useState(100);
  const [forwardTimer, setForwardTimer] = useState(null);
  const [backwardTimer, setBackwardTimer] = useState(null);
  const [word, setWord] = useState(null)
  const container = useRef(null);
  useEffect(()=>{
    let word = []
    for (let i = 0; i < props.text.length; ++i){
      word.push(<div className='ad'>{props.text[i]}</div>)
    }
    setWord(word);
  }, []);

  function randomInt(max) {
      return Math.floor(Math.random() * max);
  }
  // function animation(){
  //     let newCurtext = [];
  //     let stageCounter = 0;
  //     for (let i = 0; i < text.length; ++i){
  //         let classstring = "";
  //         if (stageCounter < stageObject.stage && randomInt(5) != 1){
  //             classstring = "adActive1";
  //             ++stageCounter;
  //         } else {
  //             classstring = "ad";
  //         }
  //         let letter = text[randomInt(text.length)];
  //         newCurtext.push(<span className={classstring}>{letter}</span>);
  //     }
  //     // console.log('----------------------------------------------------')
  //     // for(let i = 0; i < newCurtext.length; i++){
  //     //   console.log(newCurtext[i].props)
  //     // }
  //     setWord(newCurtext);
  // }
  // function animationEnd(direction = "forward"){
  //   if (direction == "forward") stageObject.stage = maxStage-1;
  //   if (direction == "backward") stageObject.stage = 0;
  //   let newCurtext = [];
  //   for (let i = 0; i < text.length; ++i){
  //       let letter = text[i];
  //       newCurtext.push(<span className={direction == "forward" ? "adActive1" : "ad"}>{letter}</span>)
  //   }
  //   setWord(newCurtext);
  // }
  // function animate(direction = "forward"){
  //   // if(props.active && !blocAn) { console.log('*****1'); return }
  //   if (direction == "forward" && forwardTimer != null) {return; }
  //   if (direction == "backward" && backwardTimer != null && !blocAn) {return; }
  //   if (direction == "backward" && props.active && !blocAn) {return; }
  //   if (direction == "forward" && backwardTimer != null) {clearInterval(backwardTimer); setBackwardTimer(null)}
  //   if (direction == "backward" && forwardTimer != null) {clearInterval(forwardTimer); setForwardTimer(null)}
  //   blocAn = false;

  //   let subPages = ["plan", "vision", "stats"];
  //   if(subPages.indexOf(props.text) != -1 || props.text == 'investors'){
  //     setStyInv();
  //   }
  //   let timer = setInterval(() => {
  //     if(stageObject.stage >= maxStage || stageObject.stage < 0){
  //       if(activeMenus == props.text){
  //         direction = 'forward'
  //       }
  //       if(activeMenus != props.text || direction != 'backward'){
  //         setForwardTimer(null);
  //         clearInterval(forwardTimer);
  //         clearInterval(backwardTimer);
  //         clearInterval(timer);
  //         animationEnd(direction);
  //       }

  //         return;
  //     }
  //     var newStage = 0;
  //     if (direction == "forward") newStage = stageObject.stage + 1;
  //     if (direction == "backward") newStage = stageObject.stage - 1;
  //     stageObject.stage = newStage;
  //     // if(activeMenus != props.text)
  //      animation();
  //   }, timeOffset);
  //   if (direction == "forward") setForwardTimer(timer);
  //   if (direction == "backward") setBackwardTimer(timer);
  // }

  function clickMenus(e){
    props.action();
    clearInterval(backwardTimer);
    blocAn = true;
    ee_text = props.text;





    activeMenus = props.text;
    let parent = (e.target.className == 'animeText') ? e.target : e.target.parentElement;
    let els = document.querySelectorAll('.animeText');
    const navigation1 = ["plan", "vision", "stats"]
    // $('.animeText').removeClass('menCl');
      // els.forEach((item, key) => {
      //   if(parent != item){
          // if(item.classList.contains('menCl')){
          //   let ff = false;
          //   if(!(activeMenus == "investors" && item.getAttribute('data-val') == 'vision') && !(navigation1.indexOf(activeMenus) != -1 && item.getAttribute('data-val') == 'investors')){
          //     // var ev = new MouseEvent("mouseover", {
          //     //   bubbles: true,
          //     //   cancelable: true,
          //     //   view: window,
          //     //   relatedTarget: null
          //     // });
          //     // item.dispatchEvent(ev);
          //     setTimeout(function(){
          //       var ev = new MouseEvent("mouseout", {
          //         bubbles: true,
          //         cancelable: true,
          //         view: window,
          //         relatedTarget: null
          //       });
          //       item.dispatchEvent(ev);
          //     }, 1100)
          //   }
          // }
          // setTimeout(function(){
          //   item.classList.remove('menCl');

          //   if(activeMenus == "investors"){
          //     let el1 = document.querySelector('[data-val="vision"]');
          //     el1.classList.add('menCl');
          //     let els1 = el1.querySelectorAll('.ad');
          //     els1.forEach(item1 => {
          //       item1.className = 'adActive1';
          //     });
          //   }
          //   if(navigation1.indexOf(activeMenus) != -1){
          //     let el1 = document.querySelector('[data-val="investors"]');
          //     el1.classList.add('menCl');
          //     let els1 = el1.querySelectorAll('.ad');
          //     els1.forEach(item1 => {
          //       item1.className = 'adActive1';
          //     });
          //   }
          // }, 100);


          // let els1 = item.querySelectorAll('.adActive1');
          // els1.forEach(item1 => {
          //   item1.className = 'ad';
          // });
        // }
        // else{
          // item.classList.add('menCl');
        //   let els1 = item.querySelectorAll('.ad');
        //   els1.forEach(item1 => {
        //     item1.className = 'adActive1';
        //   });
      //   }
      // });








      ee_e = e;
      // clearInterval(timerOut1);
      clearInterval(timerOut2);
      // clearInterval(timerOut3);
      // timerOut1 = setTimeout(corrMenus, 1000);
      timerOut2 = setTimeout(corrMenus, 0);
      // timerOut3 = setTimeout(corrMenus, 2000);
  }
  // onMouseEnter={(e) => {animate()}} onMouseLeave={(e) => {animate("backward")}}
  return <div className="animeText anacb" onClick={(e) => {clickMenus(e)}} ref={container} id="ad" data-val={text}>{word}</div>
}

var invActive = false;

window.onresize = function(){
  setTimeout(function(){
    setStyInv();
  }, 700);
}
document.addEventListener('DOMContentLoaded', function(){
  setTimeout(function(){
    setStyInv();
  }, 1400);
});

function App(props) {
  const [anime, setAnime] = useState(true);
  const [animeFate, setAnimeFate] = useState(1);

  const [dopNavigationVisible, setDopNavigationVisible] = useState(false);
  const [dotsColor, setDotsColor] = useState("black")
  const [navigation, setNavigation] = useState([
    "about", "projects", "whitepaper", "investors", "contacts"
  ])
  const [navigation1, setNavigation1] = useState([
    "plan", "vision", "stats"
  ])
  const [isBlack, setIsBlack] = useState(true);
  const centroid = new Centroid();
  let animateRightLock = false;
  const vw = window.innerWidth / 100;
  const vh = window.innerHeight / 100;
  var counter = 0;
  var stage = 0;
  var mouseLock = false;
  let glitchImgsArray = ["#s0_img_glitch1", "#s0_img_glitch2", "#s0_img_glitch3",
    "#s0_img_glitch4","#s0_img_glitch5","#s0_img_glitch6","#s0_img_glitch7",
    "#s0_img_glitch8","#s0_img_glitch9","#s0_img_dot1","#s0_img_dot2","#s0_img_dot3",
    "#s0_img_dot4","#s0_img_dot5","#s0_img_dot6","#s0_img_dot21","#s0_img_dot22","#s0_img_dot23",
    "#s0_img_dot24","#s0_img_dot25","#s0_img_dot26","#s0_img_dot31","#s0_img_dot32"];
  let letterCounters = [0, 0, 0, 0, 0, 0, 0, 0];


  // $('.animeText:eq(3), .dopNavigation-container').on('mouseover', function(){
  //   invActive = true;
  //   $('.dopNavigation-container').css('display', 'flex');
  //   setTimeout(() => { $('.dopNavigation-container').css('opacity', '1'); }, 100);
  // });
  // $('.animeText:eq(3), .dopNavigation-container').on('mouseleave', function(){
  //   invActive = false;
  //   setTimeout(function(){
  //     if(!invActive) $('.dopNavigation-container').css('opacity', '0');
  //     setTimeout(() => { if(!invActive) $('.dopNavigation-container').css('display', 'none'); }, 500);
  //   }, 1000)
  // });

  let animLetterFade = (letterId, letterNum, nextStage) => {

    if (1 - (letterCounters[letterNum]*0.05) < 0.8 && stage < nextStage){
      stage = nextStage;
    }
    if (1 - (letterCounters[letterNum]*0.05) > 0.1){
      $(letterId).css("filter", "blur(" + letterCounters[letterNum]*1 + "px)");
      $(letterId).css("opacity", 1 - (letterCounters[letterNum]*0.05));
      ++letterCounters[letterNum];
    } else {
      $(letterId).css("opacity", 0);
    }
  }
  function animGlitch(e = true){
    if (mouseLock && e != true) {return};
    mouseLock = true;
    if (stage == 0){
      stage = 1;
    } else if (stage == 1){
      if (1 - counter*0.05 > 0.1){
        for (let i = 0; i < glitchImgsArray.length; ++i){
          $(glitchImgsArray[i]).css("opacity", 0.8 - counter*0.05);
        }
        ++counter;
      } else {
        for (let i = 0; i < glitchImgsArray.length; ++i){
          $(glitchImgsArray[i]).css("opacity", 0);
        }
        stage = 2;
        counter = 0;
      }
    } else if (stage == 2){
      let letterWidth = $("#s1_letter_a1").width() / vw;
      let letterEWidth = $("#s1_letter_e1").width() / vw;
      let left = 14;
      let right = 82.12;
      let lettersGapsNum = 6;
      let offset = (right - left - letterWidth*5 - letterEWidth)/lettersGapsNum;
      console.log(offset)

      if(vh > vw){
        $('#s0_letter_log, #s0_text_container').css({"opacity": 0, "filter": "blur(13.5px)"});
        // $('#s0_letter_log, #s0_letter_log2').css("opacity", 0.8);
        // $('#s0_letter_log, #s0_letter_log2').css("filter", "blur(5px)");
      }

      $("#s1_letter_a1").css("left", left + "vw");
      $("#s1_letter_d1").css("left", (left + (letterWidth + offset)) +"vw");
      $("#s1_letter_a2").css("left", (left + (letterWidth + offset)*2) +"vw");
      $("#s1_letter_n1").css("left", (left + (letterWidth + offset)*3) +"vw");
      $("#s1_letter_e1").css("left", (left + (letterWidth + offset)*4) +"vw");
      $("#s1_letter_d2").css("left", (left + (letterWidth + offset)*4 + letterEWidth + offset) +"vw");
      $("#s1_letter_e2").css("left", right + "vw");
      if(vw >= vh) $("#s0_text_container").css("left", "14vw");
      if(vh > 10.80 && vw > vh){
        $("#s3_dot_1").css("top", "9.6vw");
        $("#s3_dot_2").css("top", "9.6vw");
      }
      else{
        $("#s3_dot_1").css("bottom", "calc(85vh - 0.8vw)");
        $("#s3_dot_2").css("bottom", "calc(85vh - 0.8vw)");
      }

      stage = 2.5;
    } else if (stage == 2.5) {
      $("#s3_dot_2").css("left", "16.2vw");
      $("#s3_dot_3").css("left", "16.2vw");
      stage = 3;

      if(vh > vw){
        $("#header_block").css("opacity", 1);
        $("#main_block").css("opacity", 1);
        setAnime(false);
        // GETBACK
        // setPage("EmptyPage", 1);
        return;
      }

    } else if (stage > 2 && stage < 11){
      stage = 4;

      animLetterFade("#s1_letter_a1", 0, 5);
      animLetterFade("#s0_text_container", 7, 5);
    }
    if (stage > 4 && stage < 11){
      animLetterFade("#s1_letter_d1", 1, 6);
    }
    if (stage > 5 && stage < 11){
      animLetterFade("#s1_letter_a2", 2, 7);
    }
    if (stage > 6 && stage < 11){
      animLetterFade("#s1_letter_n1", 3, 8);
    }
    if (stage > 7 && stage < 12){
      animLetterFade("#s1_letter_e1", 4, 9);
    }
    if (stage > 8 && stage < 12){
      animLetterFade("#s1_letter_d2", 5, 10);
    }
    if (stage > 9 && stage < 12){
      animLetterFade("#s1_letter_e2", 6, 11);
    }
    if (stage == 11){
      ++counter;
      if (counter > 30){
        stage = 12;
      }
      document.querySelector('.rightNav_main > div').innerHTML = 'The word is formed by combining terms "ada" and "eden”.  It reflects the idea of exploring and using the resources that are around us at the moment and creating something new out of them, as well as the idea of technology and the pursuit of the ideal place that humanity has dreamed of.';
    }
    if (stage == 12){
      $("#header_block").css("opacity", 1);
      $("#main_block").css("opacity", 1);
      stage = 13;
    }
    if (stage == 13){
      setAnime(false);
    }
    if (stage == 1){
      setTimeout(animGlitch, 5);
    } else if (stage == 2){
      setTimeout(animGlitch, 100);
    } else if (stage == 2.5){
      setTimeout(animGlitch, 1000);
    } else if (stage == 3){
      setTimeout(animGlitch, 1000);
    } else if (stage > 3 && stage < 12){
      setTimeout(animGlitch, 30);
    } else if (stage == 12){
      setTimeout(animGlitch, 10);
    } else if (stage == 13){
      $('.App').addClass('App_stage');
      setTimeout(animGlitch, 1000);
    }
    return;
  }
  let animateRight = () => {
    if(animateRightLock){return 250}
    animateRightLock = true;
    $(".rightNav").animate({opacity: 0}, 250).animate({opacity: 1}, 700, function(){animateRightLock = false});
    return 250;
  }
  let setPage = (page, bacl = 0) => {
    let subPages = ["plan", "vision", "stats"];

    let invCl = false;

    // if(vh > vw && !document.querySelector('.mobile-nav').classList.contains('hide') && page == "main1") return;

    if(vh > vw && page == "investors"){
        $('.mobile_nav_b').toggleClass('active');
        invCl = true;
    }
    if(vh > vw && subPages.indexOf(page) != -1){
        $('.mobile_nav_b').removeClass('active');
    }

    // if(vh > vw){ //&& page != "main" && page != "main1"
    //   // document.querySelector('.main_wrapper').innerHTML = '';
    //   if(document.querySelector('.startglitcher_mob') != null)
    //     document.querySelector('.startglitcher_mob').classList.remove('poc');
    // }

    if(subPages.indexOf(page) != -1 || page == 'investors'){
      $('.dopNavigation-container').addClass('active');
    }
    else{
      setTimeout(function(){
        $('.dopNavigation-container').removeClass('active');
        $('.dopNavigation-container').removeAttr('style');
      }, 500);
    }

    if(!invCl){
      let curPage = page;
      let oldPage = props.page;
      let markerAllAnimation = 0;
      let mainDelay = 1000;
      let tout = 1500;
      let touts1 = 0;

      if(!(page == "projects" && document.querySelector('.mobile-nav').classList.contains('hide')) && bacl == 0){
        document.querySelector('.mobile-nav').classList.toggle('hide');
        document.querySelector('.header_title').classList.toggle('clh');
        document.querySelector('.header_img').classList.toggle('clh');

        document.querySelector('.menu_zag').innerHTML = page;
        document.querySelector('.menu_zag').classList.remove('hide');
        // if(!document.querySelector('.mobile-nav').classList.contains('hide') && vh > vw) return
      }

      if(vw >= vh || ((page == "projects" || page == "main") && vh > vw)) touts1 = 0;
      if(vh > vw && page != "EmptyPage"){
        if(page != "main" && page != "projects"){
          setPage("main", 2);
          if(bacl != 2)
            touts1 = 2500;
        }
      }

      if(vw > vh){
        if(page == "projects")
          document.querySelector('.back_noise').style.zIndex = "1";
        else
          document.querySelector('.back_noise').style.zIndex = "0";
      }

      if(page == "projects"){
        setTimeout(function(){
          document.querySelector('.rightNav').style.filter = "blur(20px)";
          setTimeout(function(){ document.querySelector('.rightNav').style.opacity = "0"; }, 300);
        }, 0);
        setTimeout(function(){
          document.querySelector('.rightNav').style.filter = "blur(0px)";
          document.querySelector('.rightNav').style.opacity = "1";
        }, 1500);
      }

      setTimeout(function(){

        if(page == "projects")
          document.querySelector('body').style.overflow = "hidden";
        else
          document.querySelector('body').style.visibility = "unset";

        if (page == props.page && vh <= vw) return;
        if (isBlack){
          if (page != "projects"){

          }
          setIsBlack(false);
        }

        // if(page == "main" && oldPage == "main") tout = 500;
        setTimeout(function(){
          if(vh > vw && document.querySelector('.startglitcher') != null){
            // if((oldPage != "main" && oldPage != "main1") ) //|| page == "main"
              document.querySelector('.startglitcher_mob').classList.add('poc');
            // else
              // document.querySelector('.startglitcher_mob').classList.remove('poc');
          }
        }, tout);

        // if (curPage == "investors"){
        //   curPage = "plan";
        // }

        let oldMarkerSub = subPages.includes(oldPage)
        let markerSub = subPages.includes(curPage)
        console.log(oldMarkerSub, markerSub)
        if (!oldMarkerSub){
          setDopNavigationVisible(true);
        }
        if(page != "investors" && subPages.indexOf(page) == -1){
          setDopNavigationVisible(false);
        }
        if (oldMarkerSub && !markerSub){

          oldPage = "investors";
        }

        if (oldPage == "projects") {
          if (props.projectsSlider != null){
            props.projectsSlider.change_img(0);
          }
          props.setSysColor("white")
          markerAllAnimation = 1; mainDelay = 1000;
        };
        if (page != "projects"){
          setDotsColor("#000000");
          if (curPage != "main"){

          }
          // centroid.rightTextBlurStartWhite();
        }
        if (curPage == "projects") {
          markerAllAnimation = 1;
          mainDelay = 0;
          props.setSysColor("black")
        };
        if (curPage == "projects"){
          //centroid.centerBlur(0, "forward", true);

          // centroid.rightTextBlurStartBlack();

        }
        if(oldPage == "projects"){
          // centroid.rightTextBlurStartBlack();
        }
        if (oldPage != "projects" || curPage != "projects"){
          if(vh > vw && page == "EmptyPage")
            centroid.centerBlur(0, "forward", false, true);
          else
            centroid.centerBlur();

          if (oldMarkerSub && markerSub){

          } else {
          }

        }

        if (markerAllAnimation == 0){
          $("#" + oldPage + "Page").animate({opacity: 0}, 500);
          $("#" + curPage + "Page").animate({opacity: 0}, 500);
        }
        if (curPage == "projects"){
          setDotsColor("#FFFFFF")
        }
        else{
          props.setSysColor("black")
        }
        setTimeout(() => {
          if (curPage == "projects"){
            centroid.stopAction();
          }
          props.setPage(curPage);
          if (markerAllAnimation == 0){
            $("#" + oldPage + "Page").animate({opacity: 0.3}, 500)
            $("#" + curPage + "Page").animate({opacity: 1}, 500)

          }
          if(page == "about")
            document.querySelector('.main').classList.add("main_abouts");
          else
            document.querySelector('.main').classList.remove("main_abouts");

          if(page == "contacts")
            document.querySelector('.main').classList.add("main_contacts");
          else
            document.querySelector('.main').classList.remove("main_contacts");

          if(page == "stats" || page == "whitepaper")
            document.querySelector('.main').classList.add("main_stats");
          else
            document.querySelector('.main').classList.remove("main_stats");

          if(page == "contacts")
            document.querySelector('.main').classList.add("main_contsts");
          else
            document.querySelector('.main').classList.remove("main_contsts");

          if(page == "vision" || page == "investors")
            document.querySelector('.main').classList.add("main_vision");
          else
            document.querySelector('.main').classList.remove("main_vision");

          if(page == "plan")
            document.querySelector('.main').classList.add("main_plan");
          else
            document.querySelector('.main').classList.remove("main_plan");
          /* if (markerAllAnimation == 1){$("#" + oldPage + "Page").css("opacity", 0.3);$("#" + curPage + "Page").css("opacity", 1)} */
        }, mainDelay)
      }, touts1);
    }
  }


  let setMainPage = (nums) => {
    // document.querySelector('.mobile-nav').classList.remove('hide');
    // document.querySelector('.header_img').classList.add('clh');
    // document.querySelector('.header_title').classList.add('clh');
    if(vh > vw){
      if(nums == '1' && document.querySelector('.mobile-nav ').classList.contains('hide')) return;
      document.querySelector('.App').classList.remove('App_sub_black1');
      document.querySelector('.App').classList.remove('App_sub_black2');
      document.querySelector('.App').classList.remove('App_sub_grey');
    }
    $('.animeText').addClass('anacb');
    $('.menCl').removeClass('menCl');
    // if (props.page == "main") return;
    //GETBACK
    // setPage((vw >= vh) ? "main" : "EmptyPage");
    setPage('main')

    setIsBlack(true);
    document.querySelector('.menu_zag').classList.add('hide');
  }
  let setMainPage2 = () => {
    if(vh > vw){
      document.querySelector('.App').classList.remove('App_sub_black1');
      document.querySelector('.App').classList.remove('App_sub_black2');
      document.querySelector('.App').classList.remove('App_sub_grey');
    }

    //GETBACK
    // setPage((vw >= vh) ? "main" : "EmptyPage");
    setPage('main')
    document.querySelector('.menu_zag').classList.add('hide');
  }
  useEffect(()=> {
    window.addEventListener("wheel", animGlitch);
    window.addEventListener("touchmove", animGlitch);
    window.addEventListener("click", animGlitch);
  }, [])

  useEffect(() => {
    const pageRouter = (e) => {
      console.log(e.state)
      setPage(e.state || 'main')
    }
    window.addEventListener('popstate', pageRouter)
    return () => {
      window.removeEventListener('popstate', pageRouter)
    }
  }, [])

  useEffect(() => {
    if (window.location.pathname === '/') {
      setPage('main')
    }
    else {
      setPage(window.location.pathname.replace('/', ''))
    }
  }, [])

  let navigationItems = navigation.map(value =>
    <NavItem text={value} active={props.page == value ? true : false} action={(e) => {setPage(value)}} id={"navItem" + value.name} />
    )

  let dopNavigationSliders = navigation1.map(value =>
    <NavItem text={value} active={props.page == value ? true : false} action={(e) => {setPage(value)}} id={"navItem" + value.name} />
    )

  let mobileNavigation1 = ["about", "projects", "whitepaper", "investors"]
  let mobileItems1 = mobileNavigation1.map((value) => <div onClick={(e) => {setPage(value)}} className={'mobile-nav-item ' + (props.page == value ? "mobile-nav-item-active" : "")} data-selm={value}>{value}</div>)
  let mobileNavigation2 = ["vision", "plan", "stats"]
  let mobileItems2 = mobileNavigation2.map((value) => <div onClick={(e) => {setPage(value)}} className={'mobile-nav-item ' + (props.page == value ? "mobile-nav-item-active" : "")} data-selm={value}>{value}</div>)
  let mobileNavigation3 = ["contacts"]
  let mobileItems3 = mobileNavigation3.map((value) => <div onClick={(e) => {setPage(value)}} className={'mobile-nav-item ' + (props.page == value ? "mobile-nav-item-active" : "")} data-selm={value}>{value}</div>)
  return (
    <div className={"App App_" + props.systemcolor + " App_sub_" + props.subcolor + (props.page != "main" ?  " App_state_1" : "")} /* style={{background: props.systemcolor == "white" ? "#DEDED8" : "#000000"}} */>
      <div className='back_noise'></div>
      {anime &&
        <div className='stage0_container' style={{zIndex: (anime ? 5 : 0)}}>
          <div className='word_container'>

            <img className='logo_start_img logo_start_img1' id='s0_letter_log' src={letterMob} />

            <img src={letterA} className='letters' id='s1_letter_a1' />
            <img src={letterD} className='letters' id='s1_letter_d1' />
            <img src={letterA} className='letters' id='s1_letter_a2' />
            <img src={letterN} className='letters' id='s1_letter_n1' />
            <img src={letterE} className='lettersE' id='s1_letter_e1' />
            <img src={letterD} className='letters' id='s1_letter_d2' />
            <img src={letterE} className='lettersE' id='s1_letter_e2' />
          </div>
          {/* <img src={bigLogoSVG} id='s0_main_img' /> */}
          <div className='glitchCont'>
            <img src={logoGlitch2} id="s0_img_glitch1" />
            <img src={logoGlitchSVG} id="s0_img_glitch2" />
            <img src={logoGlitchRightBottom} id="s0_img_glitch3" />
            <img src={logoGlitchRightTop} id="s0_img_glitch4" />
            <img src={logoGlitchLeftBottom} id="s0_img_glitch5" />
            <img src={logoGlitchDop2} id="s0_img_glitch6" />
            <img src={logoGlitchDop} id="s0_img_glitch7" />
            <img src={logoGlitchRightTop} id="s0_img_glitch8" />
            <img src={logoGlitchLeftBottom} id="s0_img_glitch9" />
            <img src={logoDot} id='s0_img_dot1' className='s0_dot'/>
            <img src={logoDot} id='s0_img_dot2' className='s0_dot'/>
            <img src={logoDot} id='s0_img_dot3' className='s0_dot'/>
            <img src={logoDot} id='s0_img_dot4' className='s0_dot'/>
            <img src={logoDot} id='s0_img_dot5' className='s0_dot'/>
            <img src={logoDot} id='s0_img_dot6' className='s0_dot'/>

            <img src={logoDot2} id='s0_img_dot21' className='s0_dot2'/>
            <img src={logoDot2} id='s0_img_dot22' className='s0_dot2'/>
            <img src={logoDot2} id='s0_img_dot23' className='s0_dot2'/>
            <img src={logoDot2} id='s0_img_dot24' className='s0_dot2'/>
            <img src={logoDot2} id='s0_img_dot25' className='s0_dot2'/>
            <img src={logoDot2} id='s0_img_dot26' className='s0_dot2'/>

            <img src={logoDot3} id='s0_img_dot31'/>
            <img src={logoDot3} id='s0_img_dot32'/>


          </div>

          <div className='stage0_text_container' id='s0_text_container'>
            <div className='stage0_text_item s-15'>
              ADANEDE
            </div>
            <div className='stage0_text_item s-12'>
              /eɪdəned/
            </div>
            <div className='stage0_text_item s-10'>
              Noun
            </div>
            <div className="stage0_text_item s-11">
              The word is formed by combining terms "ada" and "eden”.  It reflects the idea of exploring and using the resources that are around us at the moment and creating something new out of them, as well as the idea of technology and the pursuit of the ideal place that humanity has dreamed of.
            </div>
          </div>
        </div>
      }
      <svg id='s3_dot_1' className='s3_dot' width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path style={{fill: dotsColor}} className='s3_dot_path' fillRule="evenodd" clipRule="evenodd" d="M18 15L18 -7.86805e-07L-6.55671e-07 0L0 15L18 15Z" fill="black"/></svg>
      <svg id='s3_dot_2' className='s3_dot' width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path style={{fill: dotsColor}} className='s3_dot_path' fillRule="evenodd" clipRule="evenodd" d="M18 15L18 -7.86805e-07L-6.55671e-07 0L0 15L18 15Z" fill="black"/></svg>
      <svg id='s3_dot_3' className='s3_dot' width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path style={{fill: dotsColor}} className='s3_dot_path' fillRule="evenodd" clipRule="evenodd" d="M18 15L18 -7.86805e-07L-6.55671e-07 0L0 15L18 15Z" fill="black"/></svg>
      <svg id='s3_dot_4' className='s3_dot' width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path style={{fill: dotsColor}} className='s3_dot_path' fillRule="evenodd" clipRule="evenodd" d="M18 15L18 -7.86805e-07L-6.55671e-07 0L0 15L18 15Z" fill="black"/></svg>

      <header id='header_block'>
        <div className='menu_zag hide' onClick={(e) => {setMainPage2()}}>Меню</div>
        <svg className='header_img clh' onClick={(e) => {setMainPage('1')}} viewBox="0 0 17 50" xmlns="http://www.w3.org/2000/svg"><path className='header_logo_dot' fillRule="evenodd" clipRule="evenodd" d="M0.5 49.5H17V0H0.5V49.5ZM12.875 4.125H4.625V25.41H12.875V4.125ZM12.875 29.535H4.625V45.375H12.875V29.535Z"  fill={dotsColor}/></svg>
        <div className='header_title clh' style={{color: dotsColor}} onClick={(e) => {setMainPage('2')}}>ADANEDE</div>
      </header>
      <main id='main_block'>
        <div className='leftNav not_mobile_trash'>
          <img className='visible_none visible_none1' src={props.systemcolor == "white" ? dot : dotWhite} />
              {navigationItems}
              <div className='dopNavigation-container' style={{opacity: dopNavigationVisible ? "1" : "0"}}>
                {dopNavigationSliders}
              </div>
          <img className='visible_none visible_none2' src={props.systemcolor == "white" ? dot : dotWhite} />
        </div>
        <div className='mobile mobile-nav'>
          {mobileItems1}
          <div className='mobile_nav_b'>
            {mobileItems2}
          </div>
          {mobileItems3}
        </div>
        <div className='container-blur'><canvas className='bluring'></canvas><canvas className='bluring'></canvas><canvas className='bluring'></canvas></div>
        <div className='main' style={{opacity: animeFate}}>
          {props.page == "test" && <Test />}
          {props.page == "main" && <Main />}
          {props.page == "about" && <About />}
          {props.page == "projects" && <Projects animate1={animateRight} />}
          {props.page == "plan" && <Plan />}
          {props.page == "vision" && <Vision />}
          {props.page == "investors" && <Vision />}
          {props.page == "stats" && <Stats />}
          {props.page == "contacts" && <Contacts />}
          {props.page == "whitepaper" && <White />}
        </div>
        <div className='rightNav'>
          <img className='visible_none visible_none3' src={props.systemcolor == "white" ? dot : dotWhite} />
          <div className={'rightNav_main' + (props.specialRightText ? " rightNav_main_revert" : "")}>
            <a style={{visibility: props.rightLink.control ? "visible" : "hidden"}} className='rightLink rightNav_item' target="_blank" href={props.rightLink.value.link}>{props.rightLink.value.name}</a>
            <div className={'rightNav_item rightNav_item_strange' + (props.page == "projects" ? " s-12 s-122" : "")}>
              {props.rightText.text}
            </div>
            <div className='rightNav_item rightNav_item_strange s-10'>
              {props.rightText.title3}
            </div>
            <div className='rightNav_item rightNav_item_strange s-12 s-121'>
              {props.rightText.title2}
            </div>
            <div className='rightNav_item rightNav_item_strange s-15 non_italic'>
              {props.rightText.title1}
            </div>
          </div>
          <img className='visible_none visible_none4' src={props.systemcolor == "white" ? dot : dotWhite} />
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
      page: store.main.page,
      systemcolor: store.main.systemcolor,
      subcolor: store.main.subcolor,
      rightText: store.main.rightText,
      specialRightText: store.main.specialRightText,
      rightLink: store.main.rightLink,
      animation: store.main.animation,
      projectsSlider: store.main.projectsSlider
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      setPage: (page) => dispatch({type: "SET_PAGE", payload: page}),
      setAnimation: (anima) => dispatch({type: "SET_ANIMATION", payload: anima}),
      setSysColor: (color) => dispatch({type: "SET_SYSTEM_COLOR", payload: color}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
