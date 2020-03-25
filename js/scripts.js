$(document).ready(function() {
  // registers Greensock MorphSVG plugin
  gsap.registerPlugin(MorphSVGPlugin);
});

// initiate fullPage.js
new fullpage('#fullPage', {
	//fullPage.js options
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
	autoScrolling:true,
});

// Goes to next section when user click on "Break it down!" buttons using fullPage.js api
$(".next-btn").on("click", function(){
    fullpage_api.moveSectionDown();
});

// sets elements and svgs in place when page first loads
gsap.set("article, svg, a", {visibility:"visible"});
gsap.set("#unbranded-tagline, #num-and-lines, #google-num",{alpha: 0});
gsap.set("#u-alt, #n-alt, #b-alt, #r-alt, #a-alt, #n2-alt, #d-alt, #e-alt, #d2-alt",{alpha:0, transformOrigin: "center"});
gsap.set("#google-article, #google-next, #netflix-next, #netflix-article, #twitter-next, #twitter-article, #spotify-next, #spotify-article, #walmart-next, #walmart-article, #tom-falzani, #microsoft-article, #hero-btn",{visibility:"hidden", alpha:0});
gsap.set("#google-btn-broken, #netflix-btn-broken, #twitter-btn-broken, #spotify-btn-broken, #walmart-btn-broken, #microsoft-btn-broken",{alpha: 0});
gsap.set("#spotify-text2",{y: 10164.584, alpha: 0})
gsap.set("#lightbulb",{alpha: 0})
gsap.set("#ms-pattern2, #ms-pattern3, #ms-pattern4, #ms-pattern5",{x:-51 , y: 203.013})


// animtaions for the hero section
var fadeInHero = gsap.timeline({});

fadeInHero.to("#unbranded-text1, #unbranded-tagline",{duration:1, alpha:1, delay: .5})
.to("#u-norm",{duration:0.5, morphSVG:"#u-alt", transformOrigin:"50% 50%"}, "unbranded")
.to("#n-norm",{duration:0.5, morphSVG:"#n-alt", transformOrigin:"50% 50%"}, "unbranded")
.to("#b-norm",{duration:0.5, morphSVG:"#r-alt", transformOrigin:"50% 50%"}, "unbranded")
.to("#r-norm",{duration:0.5, morphSVG:"#b-alt", transformOrigin:"50% 50%"}, "unbranded")
.to("#a-norm",{duration:0.5, morphSVG:"#a-alt", transformOrigin:"50% 50%"}, "unbranded")
.to("#n2-norm",{duration:0.5, morphSVG:"#n2-alt", transformOrigin:"50% 50%"}, "unbranded")
.to("#d-norm",{duration:0.5, morphSVG:"#d-alt", transformOrigin:"50% 50%"}, "unbranded")
.to("#e-norm",{duration:0.5, morphSVG:"#e-alt", transformOrigin:"50% 50%"}, "unbranded")
.to("#d2-norm",{duration:0.5, morphSVG:"#d2-alt", transformOrigin:"50% 50%"}, "unbranded")
.to("#hero-btn",{duration:1, visibility:"visible", alpha:1});

// animtaions for the google section
var googleClicked = false;
var googleAnimate = gsap.timeline({paused:true});
var googleTextAnimate = gsap.timeline({paused:true});

googleAnimate.to("#num-and-lines",{alpha:1}, "google")
.to("#google-logo",{scale:.2, transformOrigin:"50% 50%"}, "google")
.to("#google-btn-broken",{alpha:1, fill: "#fff"}, "google")
.to("#google-btn-bg",{alpha:1, fill: "#000"}, "google")
.to("#google-btn-fixed",{alpha:0}, "google")
.to("#google-num",{alpha:1, x:1560});

googleTextAnimate.to("#google-article",{duration:1.5, visibility:"visible", delay: .5, alpha:1})
.to("#google-next",{duration:1.5, visibility:"visible", alpha:1, delay: .5});

$( "#google-break-it-btn" ).on( "click", function() {
  //console.log("click");
  if(googleClicked === false){
      googleAnimate.play();
      googleTextAnimate.play();
      googleClicked = true;
  }else{
      googleAnimate.reverse();
      googleClicked = false;
  }
});

// animtaions for the netflix section
var netflixClicked = false;
var netflixAnimate = gsap.timeline({paused:true});
var netflixTextAnimate = gsap.timeline({paused:true});

netflixAnimate.to("#netflix-logo",{rotation:10, transformOrigin:"50% 50%"}, "netflix")
.to("#netflix-btn-broken",{alpha:1, fill: "#fff"}, "netflix")
.to("#netflix-btn-bg",{alpha:1, fill: "#000"}, "netflix")
.to("#netflix-btn-fixed",{alpha:0}, "netflix");

netflixTextAnimate.to("#netflix-article",{duration:1.5, visibility:"visible", delay: .5, alpha:1}, "netflix")
.to("#netflix-next",{duration:1.5, visibility:"visible", alpha:1, delay: .5});

$( "#netflix-break-it-btn" ).on( "click", function() {
  //console.log("click");
  if(netflixClicked === false){
      netflixAnimate.play();
      netflixTextAnimate.play();
      netflixClicked = true;
  }else{
      netflixAnimate.reverse();
      netflixClicked = false;
  }
});

// animtaions for the twitter section
var twitterClicked = false;
var twitterAnimate = gsap.timeline({paused:true});
var twitterTextAnimate = gsap.timeline({paused:true});

twitterAnimate.to("#twitter-logo",{scale: .5}, "twitter")
.to("#bird1",{x:2800, delay: .2}, "twitter")
.to("#bird2",{y:4387, x:2800, delay: .3}, "twitter")
.to("#bird3",{y:4390, x:2680, delay: .4}, "twitter")
.to("#twitter-btn-broken",{alpha:1, fill: "#fff"}, "twitter")
.to("#twitter-btn-bg",{alpha:1, fill: "#000"}, "twitter")
.to("#twitter-btn-fixed",{alpha:0}, "twitter");

twitterTextAnimate.to("#twitter-article",{duration:1.5, visibility:"visible", delay: .5, alpha:1}, "twitter")
.to("#twitter-next",{duration:1.5, visibility:"visible", alpha:1, delay: .5});

$( "#twitter-break-it-btn" ).on( "click", function() {
  //console.log("click");
  if(twitterClicked === false){
      twitterAnimate.play();
      twitterTextAnimate.play();
      twitterClicked = true;
  }else{
      twitterAnimate.reverse();
      twitterClicked = false;
  }
});

// animtaions for the spotify section
var spotifyClicked = false;
var spotifyAnimate = gsap.timeline({paused:true});
var spotifyTextAnimate = gsap.timeline({paused:true});

spotifyAnimate.to("#spotify-text1",{y: 5542.556, alpha: 0}, "spotify")
.to("#spotify-text2",{y: 10364.584, alpha: 1}, "spotify")
.to("#spotify-btn-broken",{alpha:1, fill: "#fff"}, "spotify")
.to("#spotify-btn-bg",{alpha:1, fill: "#000"}, "spotify")
.to("#spotify-btn-fixed",{alpha:0}, "spotify");

spotifyTextAnimate.to("#spotify-article",{duration:1.5, visibility:"visible", delay: .5, alpha:1}, "spotify")
.to("#spotify-next",{duration:1.5, visibility:"visible", alpha:1, delay: .5});

$( "#spotify-break-it-btn" ).on( "click", function() {
  //console.log("click");
  if(spotifyClicked === false){
      spotifyAnimate.play();
      spotifyTextAnimate.play();
      spotifyClicked = true;
  }else{
      spotifyAnimate.reverse();
      spotifyClicked = false;
  }
});

// animtaions for the walmart section
var walmartClicked = false;
var walmartAnimate = gsap.timeline({paused:true});
var walmartTextAnimate = gsap.timeline({paused:true});

walmartAnimate.to("#spark-bottom",{alpha: 0}, "walmart")
.to("#lightbulb",{alpha: 1, delay: .5}, "walmart")
.to("#walmart-btn-broken",{alpha:1, fill: "#fff"}, "walmart")
.to("#walmart-btn-bg",{alpha:1, fill: "#000"}, "walmart")
.to("#walmart-btn-fixed",{alpha:0}, "walmart");

walmartTextAnimate.to("#walmart-article",{duration:1.5, visibility:"visible", delay: .5, alpha:1}, "walmart")
.to("#walmart-next",{duration:1.5, visibility:"visible", alpha:1, delay: .5});

$( "#walmart-break-it-btn" ).on( "click", function() {
  //console.log("click");
  if(walmartClicked === false){
      walmartAnimate.play();
      walmartTextAnimate.play();
      walmartClicked = true;
  }else{
      walmartAnimate.reverse();
      walmartClicked = false;
  }
});

// animtaions for the microsoft section
var microsoftClicked = false;
var microsoftAnimate = gsap.timeline({paused:true});
var microsoftTextAnimate = gsap.timeline({paused:true});

microsoftAnimate.to("#ms-text",{alpha: 0}, "microsoft")
.to("#ms-pattern2",{x: 46, y: 203.013, delay: .1}, "microsoft")
.to("#ms-pattern3",{x: 143, y: 203.013, delay: .2}, "microsoft")
.to("#ms-pattern4",{x: 240, y: 203.013, delay: .3}, "microsoft")
.to("#ms-pattern5",{x: 337, y: 203.013, delay: .4}, "microsoft")
.to("#microsoft-btn-broken",{alpha:1, fill: "#fff"}, "microsoft")
.to("#microsoft-btn-bg",{alpha:1, fill: "#000"}, "microsoft")
.to("#microsoft-btn-fixed",{alpha:0}, "microsoft");

microsoftTextAnimate.to("#microsoft-article",{duration:1.5, visibility:"visible", delay: .5, alpha:1}, "microsoft")
.to("#tom-falzani",{duration:1.5, visibility:"visible", alpha:1, delay: .5});

$( "#microsoft-break-it-btn" ).on( "click", function() {
  //console.log("click");
  if(microsoftClicked === false){
      microsoftAnimate.play();
      microsoftTextAnimate.play();
      microsoftClicked = true;
  }else{
      microsoftAnimate.reverse();
      microsoftClicked = false;
  }
});
