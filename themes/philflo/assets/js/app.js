import 'alpinejs'
import flatpickr from "flatpickr"
import { Dutch } from 'flatpickr/dist/l10n/nl.js'

function youTubeVideos() {

  var getPlayers = document.getElementsByClassName('videoplayer');
  let playerInfoList = [];
  
  if (getPlayers && getPlayers.length) {
    Array.prototype.forEach.call(getPlayers, element => {
      let object = {
        id: element.id,
        videoId: element.dataset.video,
        width: '640',
        height: '390'
      };
      playerInfoList.push(object)
    })
  }
  
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
  
  window.onYouTubeIframeAPIReady = function() {
    if (typeof playerInfoList === 'undefined') return;
    
    for (var i = 0; i < playerInfoList.length; i++) {
        var curplayer = createPlayer(playerInfoList[i]);
    }
  }
  
  function createPlayer(playerInfo) {
    return new YT.Player(playerInfo.id, {
        height: playerInfo.height,
        width: playerInfo.width,
        videoId: playerInfo.videoId,
    });
  }
}

youTubeVideos();

function customVideos() {
  
    var videos = document.getElementsByTagName("video"),
      fraction = 0.4;
    function checkScroll() {
  
      for (var i = 0; i < videos.length; i++) {
  
        var video = videos[i];
  
        if (video.classList.contains('autoplay')) {
  
          var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;
  
          visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
          visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));
  
          visible = visibleX * visibleY / (w * h);
  
          if (visible > fraction) {
            video.play();
          } else {
            video.pause();
          }
        }
      }
  
    }
    window.addEventListener('scroll', checkScroll, false);
    window.addEventListener('resize', checkScroll, false);

}

customVideos();



const urlParams = new URLSearchParams(window.location.search);
if(urlParams.has('utm_source')) sessionStorage.setItem('utm_source', urlParams.get('utm_source') )
if(urlParams.has('utm_medium')) sessionStorage.setItem('utm_medium', urlParams.get('utm_medium') )
if(urlParams.has('utm_content')) sessionStorage.setItem('utm_content', urlParams.get('utm_content') )
if(urlParams.has('utm_campaign')) sessionStorage.setItem('utm_campaign', urlParams.get('utm_campaign') )


function init30MinDateTimeElement() {

  const picker = document.getElementById('30mindatetimepicker');

  if(!picker) return

  flatpickr(picker, {
    "locale": Dutch,
    enableTime: true,
    dateFormat: "d-m-Y H:i",
  });

}

init30MinDateTimeElement();