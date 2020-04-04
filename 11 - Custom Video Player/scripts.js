const startButton = document.querySelector('.toggle')
console.log('startButton',startButton)
const videoItem = document.querySelector('.player__video')
let progressBar = document.querySelector('.progress__filled')
let isPaused = true;
let duration = 0
let currentTime = 0;
let timer = null;
// 事件在指定视频/音频（audio/video）的元数据加载后触发。
videoItem.onloadedmetadata = function(){
    duration =videoItem.duration
    console.log(duration)
}
// startButton.addEventListener('click',function(e){
//     if(e.target ===startButton){
//         if(isPaused){
//             startButton.innerHTML ='||'
//             videoItem.play();
//             timer =setInterval(()=>{
//                 currentTime = videoItem.currentTime || 0
//                 if(!videoItem.end){
//                     progressBar.style.cssText = 'flex-basis:'+(currentTime/duration)*100+ '%'
//                 }else{
//                     progressBar.style.cssText = 100 + '%'
//                     startButton.innerHTML ='►'
//                     videoItem.currentTime=0
//                 }         
//             },1000)
//             isPaused = false;
//         }else{
//             startButton.innerHTML ='►'
//             videoItem.pause(timer);
//             clearInterval()
//             isPaused = true;
            
//         }
//     }

// })
let videoiSpeedItem = document.getElementsByName('playbackRate')[0]

function changeSpeed(){
    console.log(typeof videoiSpeedItem.value)
    videoItem.playbackRate  = Number(videoiSpeedItem.value||0)
    console.log(videoItem.playbackRate)
}
let videoiLoundItem = document.getElementsByName('volume')[0]

function changeLound(){
    videoItem.volume   = Number(videoiLoundItem.value||0)
    console.log(videoItem.volume)
}

let minuItem =document.getElementsByClassName('minus')[0]

let minusNum = Number(minuItem.getAttribute('data-skip'))
minuItem.addEventListener('click',function(e){
    if(videoItem.currentTime>0){
        videoItem.currentTime = videoItem.currentTime - minusNum
    }else{
        videoItem.currentTime= 0;
    }
})


let plustem =document.getElementsByClassName('plus')[0]

let plusNum = Number(plustem.getAttribute('data-skip'))
plustem.addEventListener('click',function(e){
    if(videoItem.currentTime+ plusNum>=duration){
        videoItem.currentTime = duration
        progressBar.style.cssText = 'flex-basis:0%'
        startButton.innerHTML ='►'
    }else{
        videoItem.currentTime = videoItem.currentTime+ plusNum
    }
})


// let progressContainer = document.getElementsByClassName('player__controls')[0];
// progressContainer.addEventListener('click',function(e){
//     // 点击音量等，也会拖动进度条
//     const {layerX} = e;
//     console.log(e)
//     console.log('layerX',layerX)
//     let rate = layerX/640
//     progressBar.style.cssText = 'flex-basis:'+rate*100+ '%'
//     videoItem.currentTime = duration * rate
// })
