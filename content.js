// var images = document.getElementsByTagName("img");


// function makeDark(){
//     for (var i = 0; i < images.length; i++){
//         images[i].setAttribute("style", "display: none;");
//     }
// }
// makeDark();
// var durations = document.getElementsByTagName("ytd-thumbnail-overlay-time-status-renderer");

// var info = document.getElementsByClassName("details style-scope ytd-compact-video-renderer");
// var movieInfo = document.getElementsByClassName("details style-scope ytd-compact-movie-renderer");

// function makeDescriptionDark(){
//     for (var i = 0; i < info.length; i++){
//         info[i].setAttribute("style", "display: none;");
//         if (i < movieInfo.length){
//             movieInfo[i].setAttribute("style", "display: none;");
//         }
//         if (i < durations.length){
//             durations[i].setAttribute("style", "display: none;");
//         }
//     }
// }
// makeDescriptionDark();
var block = document.getElementsByTagName("ytd-item-section-renderer");
for (var i = 0; i < block.length; i++){
    block[i].setAttribute("style", "display: none;");
}