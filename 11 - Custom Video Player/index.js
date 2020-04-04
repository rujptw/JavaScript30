
// 播放暂停功能实现
const video = document.querySelector('.player__video')
const startBtn = document.querySelector('.toggle')
const progressBar = document.querySelector('.progress__filled') 
// 获取时长实现，用于计算播放进度
let duration = 0
video.onloadedmetadata = function(){
    duration =video.duration
    console.log(duration)
}
function handlePlay(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}
function updateBtn(){
     let icon =  this.paused?  '►':'||'
     startBtn.innerHTML = icon;
}

video.addEventListener('click',handlePlay)
video.addEventListener('play',updateBtn)
video.addEventListener('pause',updateBtn)
startBtn.addEventListener('click',handlePlay)
// 播放条实现
function updateProgress(){
    let percent = (video.currentTime/duration) *100;
    progressBar.style.cssText ='flex-basis:'+ percent + '%'
}
video.addEventListener('timeupdate',updateProgress)

// 快放，慢放，实现
const quickBtn = Array.from(document.getElementsByClassName('player__button')).slice(1)
function getStep(){
    video.currentTime+=parseInt(this.dataset.skip)
}
quickBtn.forEach(item=>{
    item.addEventListener('click',getStep)})

//音量/速度实现
const ranges = document.querySelectorAll('.player__slider') 

function handleRangeChange(){
    video[this.name] = this.value;
}

ranges.forEach(item=>{
    item.addEventListener('change',handleRangeChange)
})
ranges.forEach(item=>{
    item.addEventListener('click',handleRangeChange)
})

// 进度条拖动
let progress = document.querySelector('.progress') 

function mutiOperate(e){
    const {layerX} = e;
    let rate = layerX/progress.offsetWidth
    video.currentTime = duration * rate

}
console.log(progress);
let mouseDown = false;
// // progress.addEventListener('click',function(e){
// //     mutiOperate(e)
// // })
progress.addEventListener('click', function(e){
    mutiOperate(e)
})
progress.addEventListener('mousemove', function(e){
    return mouseDown&&mutiOperate(e)
})
progress.addEventListener('mousedown', function(e){
    mouseDown = true;
})
progress.addEventListener('mouseup', function(e){
    mouseDown = false;
})