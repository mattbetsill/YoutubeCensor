var images = document.getElementsByTagName("img");


function makeDark(){
    for (var i = 0; i < images.length; i++){
        images[i].setAttribute("style", "display: none;");
    }
}
makeDark();

var info = document.getElementsByClassName("details style-scope ytd-compact-video-renderer");
var movieInfo = document.getElementsByClassName("details style-scope ytd-compact-movie-renderer");
alert(movieInfo.length);
function makeDescriptionDark(){
    for (var i = 0; i < info.length; i++){
        info[i].setAttribute("style", "display: none;");
        if (i < movieInfo.length){
            movieInfo[i].setAttribute("style", "display: none;");
        }
    }
}
makeDescriptionDark();