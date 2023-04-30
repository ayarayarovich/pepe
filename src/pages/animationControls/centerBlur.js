import $ from "jquery";
class Centroid{
  constructor (){
    this.stop = false;
  }
  normilizeMain = () => {
    $(".bluring").css("backdrop-filter", "blur(0px)");
    $(".main").css("opacity", "1");
    $(".container-blur").css("left", "200vw");
  }
  quad(timeFraction) {
    return 2*Math.pow(timeFraction, 4)
  }
  quad2(timeFraction) {
    return Math.pow(timeFraction, 4)
  }
  stopAction(){
    this.stop = true;
  }
  centerBlur = (ctrValue = 0, direction = "forward", oneDirection=false, faasted=false) => {
      if(this.stop){
        this.stop = false;
        this.normilizeMain()
        return;
      }
      var maxValue = 200;
      var delayTime = 1;
      if(faasted) maxValue = 0;
  
      var delayBetweenChangeDirection = 1;
      
      var opacityValue = Math.ceil((1 - (ctrValue)/(maxValue)) * 100) / 100;
      var blurValue = maxValue*(this.quad(ctrValue/maxValue))
      let blur = `blur(${blurValue}px)`;
      $(".container-blur").css("left", "0");
      
      $(".bluring").css("backdrop-filter", blur);
      $(".main").css("opacity", opacityValue);
      if (direction == "forward"){
        if (blurValue < maxValue){
          setTimeout(() => {this.centerBlur(++ctrValue, "forward", oneDirection)}, delayTime)
          return
        } else {
          if (!oneDirection){
            setTimeout(() => {this.centerBlur(++ctrValue, "backward", oneDirection)}, delayBetweenChangeDirection + delayTime);
          } else {
            this.normilizeMain();
            return;
          }
        }
      } else if (direction == "backward"){
        if (blurValue > 0.5){
          setTimeout(() => {this.centerBlur(--ctrValue, "backward", oneDirection)}, delayTime)
          return
        } else {
          this.normilizeMain();
        }
      }
  }
  rightTextNotmilize = (color) => {
    $(".rightNav_item").css("text-shadow", `0 0 0 ${color}`);
  }
  rightTextBlur = (ctrValue = 0, direction = "forward", start = "black") => {
    var maxValue = 50;
    var delayTime = 20;
    var delayBetweenChangeDirection = 1000;
    var blurValue = maxValue*(2*this.quad2(ctrValue/maxValue))
    let blur = `${blurValue}px`;
    let color;
    if (start == "black" && direction == "forward"){
      color = "#000000";
    } else if (start == "black" && direction == "backward"){
      color = "#FFFFFF";
    } else if (start == "white" && direction == "forward"){
      color = "#FFFFFF";
    } else if (start == "white" && direction == "backward"){
      color = "#000000";
    }

    $(".rightNav_item").css("text-shadow", `0 0 ${blur} ${color}`);

    if (direction == "forward"){
      if (blurValue < maxValue){
        setTimeout(() => {this.rightTextBlur(++ctrValue, "forward", start)}, delayTime)
        return;
      } else {
        setTimeout(() => {this.rightTextBlur(++ctrValue, "backward", start)}, delayTime + delayBetweenChangeDirection)
      }
    } else if (direction == "backward"){
      if (blurValue > 0.5){
        setTimeout(() => {this.rightTextBlur(--ctrValue, "backward", start)}, delayTime)
        return;
      } else {
        this.rightTextNotmilize(color);
      }
    }
  }


  rightTextNormilizeClasses = () => {
    $(".rightNav_item").removeClass("forwardBlack");
    $(".rightNav_item").removeClass("forwardWhite");
    $(".rightNav_item").removeClass("backwardBlack");
    $(".rightNav_item").removeClass("backwardWhite");
  }
  
  rightTextBlurStartBlack = (stage = 0) => {
    this.rightTextNormilizeClasses();
    switch(stage){
      case 0:
        $(".rightNav_item").addClass("forwardBlack");
        setTimeout(()=>{$(".rightNav_item").css("display", "none");}, 1)
        setTimeout(() => {
          this.rightTextBlurStartBlack(1);
        }, 650);
        break;
      case 1:
        $(".rightNav_item").css("display", "block");
        $(".rightNav_item").addClass("backwardWhite");
        
        break;
    }
    return;
  }
  rightTextBlurStartWhite = (stage = 0) => {
    this.rightTextNormilizeClasses();
    switch(stage){
      case 0:
        $(".rightNav_item").addClass("forwardWhite");
        setTimeout(()=>{$(".rightNav_item").css("display", "none");}, 600)
        setTimeout(() => {
          this.rightTextBlurStartWhite(1)
        }, 1100);
        break;
      case 1:
        $(".rightNav_item").css("display", "block");
        $(".rightNav_item").addClass("backwardBlack");
        break;
    }
    return;
  }
}


export { Centroid };