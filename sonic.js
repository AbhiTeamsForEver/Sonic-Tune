let get = document.getElementById("side-menu")
let net = document.getElementById("burger-menu")

net.addEventListener('click', a => {
    get.classList.remove('active')
    get.style.boxShadow = "0px 0px 100px 1800px rgba(0, 0, 0, 0.7)"
    a.stopPropagation()

})
document.addEventListener('click', a => {
    if (!get.contains(a.target) && a.target !== net) {
        get.classList.add('active')
        get.style.boxShadow = 'none'
    }
})
function sidemenuremover() {
    get.classList.add('active')
    get.style.boxShadow = 'none'
}
let p = document.getElementById("Play")
let Favourite = document.getElementById("Favourite")
let Progress = document.getElementById("progress")
let song = document.getElementById("song")

song.onloadedmetadata = function () {
    Progress.max = song.duration;
    Progress.value = song.currentTime;
}
function playpause() {
    if (p.classList.contains("bi-pause-circle")) {
        p.classList.remove("bi-pause-circle")
        p.classList.add("bi-play-circle")
        song.pause()

    } else {
        p.classList.remove("bi-play-circle")
        p.classList.add("bi-pause-circle")
        song.play()
    }
}
if (song.play()) {
    setInterval(() => {
        Progress.value = song.currentTime;
        if (song.ended) {
            p.classList.remove("bi-pause-circle")
            p.classList.add("bi-play-circle")
        }
    }, 500)
}
Progress.onchange = function () {
    song.currentTime = Progress.value;
    song.play()
    p.classList.remove("bi-play-circle")
    p.classList.add("bi-pause-circle")
    // if(p.classList.contains("bi-play-circle")){
    //     song.pause()
    //     song.currentTime = Progress.value;
    // }else{
    //     song.currentTime = Progress.value;
    // }
}
// let progress = document.getElementById("music-progress-bar")
// let song = document.getElementById("song")
// let ctrlIcon = document.getElementById("ctrlIcon")

// song.onloadedmetadata = function(){
//     progress.max = song.duration;
//     progress.value = song.currentTime;
// }

// function playPause(){
//     if(ctrlIcon.classList.contains("bi-pause-circle-fill")){
//         song.pause();
//         ctrlIcon.classList.remove("bi-pause-circle-fill")
//         ctrlIcon.classList.add("bi-play-circle-fill")
//     }else{
//         song.play()
//         ctrlIcon.classList.remove("bi-play-circle-fill")
//         ctrlIcon.classList.add("bi-pause-circle-fill")
//     }
// }

// if(song.play()){
//     setInterval(() => {
//         progress.value = song.currentTime;
//     }, 500)
// }

// progress.onchange = function(){
//     song.currentTime = progress.value;
//     // ctrlIcon.classList.remove("bi-play-circle-fill");
//     // ctrlIcon.classList.add("bi-pause-circle-fill")
//     // song.play();
// }


function goBackward() {
    song.currentTime -= 5;
}
function goForward() {
    song.currentTime += 10;
}
function Fav() {
    if (Favourite.style.color != "red") {
        Favourite.classList.remove("bi-heart")
        Favourite.classList.add("bi-heart-fill")
        Favourite.style.color = "red";
    } else {
        Favourite.classList.remove("bi-heart-fill")
        Favourite.classList.add("bi-heart")
        Favourite.style.color = "white"
    }
}
var volumeDiv = document.getElementById('volume');

function handleVolume() {
    volumeDiv.style.display = 'block'
}

