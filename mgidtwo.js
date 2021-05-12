
var ads = '<div id="M493082ScriptRootC742072"></div>';
// Run Scripts
insertAd('adsRefresh2', ads);
function insertAd(div,v){
document.getElementById(div).innerHTML=v;
}

function jsLoader(url){
var head_ID = document.getElementsByTagName("head")[0]; 
var script_element = document.createElement('script');
script_element.type = 'text/javascript';
script_element.src = url;
head_ID.appendChild(script_element);
}
// Muat Javascript Eksternal
jsLoader("//jsc.mgid.com/r/y/ryanjhr350.blogspot.com.742072.js");


