
//Create a progress bar to show how far the user has scrolled
window.onscroll = function(){scrollProgress()};
function scrollProgress(){
    var heightScrolled = document.documentElement.scrollTop || 
    document.body.scrollTop;
    var visibleHeight = document.documentElement.clientHeight;
    var height = document.documentElement.scrollHeight;
    var remHeight = height - visibleHeight;
    var pcHeight = (heightScrolled / remHeight) * 100;
    document.getElementById('progress-bar').style.width = 
    pcHeight + "%";
}