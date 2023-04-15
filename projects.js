const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-button')
const currentTimeElement = videoPlayer.querySelector('.current')
const durationTimeElement = videoPlayer.querySelector('.duration')
const progress = videoPlayer.querySelector('.video-progress')
const progressBar = videoPlayer.querySelector('.video-progress-filled')
const mutebtn = videoPlayer.querySelector('.mutebtn')
// // // console.log(mutebtn)

//Play and Pause button
playButton.addEventListener('click', (e) => {
  if(video.paused){
    video.play()
    e.target.textContent = '❚ ❚'
  } else {
    video.pause()
    e.target.textContent = '►'
  }
})
//current time and duration
const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime / 60)
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
  let durationMinutes = Math.floor(video.duration / 60)
  let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

  currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
  durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`
}

video.addEventListener('timeupdate', currentTime)


//Progress bar
video.addEventListener('timeupdate', () =>{
  const percentage = (video.currentTime / video.duration) * 100
  progressBar.style.width = `${percentage}%`
})

//change progress bar on click
progress.addEventListener('click', (e) =>{
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = progressTime
})

const a = document.querySelector("#a");

// console.log(amute);
function amutefunc() {
  video.muted = !video.muted;

  if(video.muted){
    mutebtn.textContent = 'UNMUTE'
    console.log("mute hai")
  }else{
    mutebtn.textContent = 'MUTE'
    console.log("unmute hai")
  }
}

// mutebtn.addEventListener('click', (e) => {
//   if(video.muted){
//     e.target.textContent = 'UNMUTE'
//     console.log("mute hai")
//   }if(!video.muted) {
//     e.target.textContent = 'MUTE'
//     console.log("unmute hai")
//   }
// })