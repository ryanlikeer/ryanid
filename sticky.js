/*
 Kode ini adalah iklan Sticky Responsive yang dibuat dengan Google AdManager ukuran bisa menyesuaikan terhadap perangkat, dengan waktu Refresh setiap 60 detik. Bisa menurunkan RKT Halaman...
*/

// Menambahkan JavaScript Ke Bagian Header

var head_ID = document.getElementsByTagName("head")[0]; 
var script_element = document.createElement('script');
script_element.type = 'text/javascript';
script_element.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
head_ID.appendChild(script_element);


  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/21920883086/StickyFixedBawah', ['fluid'], 'div-gpt-ad-1620665618177-0').addService(googletag.companionAds()).addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().enableVideoAds();
    googletag.companionAds().setRefreshUnfilledSlots(true);
    googletag.enableServices();
  });


// Membuat CSS
var css = '.RyanSticky{position:fixed;text-align:center;bottom:0;width:100%;z-index:999;max-height:104px;background:rgba(0,0,0,0.20)!important;margin:0 0 0 -4px;padding-top:0;padding-bottom:0;animation:animekux 1.3s}.RyanStickyHide{position:fixed;top:-300px}@keyframes animekux{from{bottom:-300px}to{bottom:0}}.RyanStickyClose{position:absolute;width:20px;height:20px;top:-20px;right:40px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAL5JREFUOI2l0TsKwlAQheEzLtAmsRF8IO7BwsZlqJ2FLkYUdA2CjeAWjk0uXMfMnUk89Z8vCQP8MZLDSESS00BXN+3LCoTfmxWwtWrfHpY2bsFWRvvQv2ltlHUnp31G0Yrk0WkIAKIP4h3DmojID9gXTVgr2BXNMROMohoDgIGBnQMfNw80AMmbd81sSw+7d8DSJhZ27YGlLTR28Z5outLqhG0iWPby0qoUHSKYh+poH8Es1Ip2EUyjXrSNYNY+UCui/Qn48lcAAAAASUVORK5CYII=);background-size:10px 10px;background-position:5px;background-color:#000;color:#fff;background-repeat:no-repeat;box-shadow:0 -1px 1px 0 rgba(0,0,0,.2);border:none;border-radius:50%;cursor:pointer}.RyanStickyClose:before{position:absolute;content:"";top:-20px;right:0;left:-20px;bottom:0}';

    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

// Membuat Konten
var HTMLX = '<div class="RyanSticky" id="stickyAd"><div id="div-gpt-ad-1620665618177-0"></div><button aria-label="Close this ad" class="RyanStickyClose" onClick="document.getElementById(\'stickyAd\').style=\'display:none\'"></button></div>';
var elem = document.createElement('div');
elem.innerHTML = HTMLX;
document.body.appendChild(elem);

// Menjalankan Skrip Ads
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1620665618177-0'); });











