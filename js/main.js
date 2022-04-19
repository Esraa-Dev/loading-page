// loading page
let spinner=document.getElementById('spinner');
let body=document.body;
body.onload=function(){
    body.style.overflow="hidden";
    setTimeout(() => {
        body.style.overflow="auto";
        spinner.style.display="none"
    }, 1000);
}
// button
let button = document.getElementById('button');
window.onscroll=function(){
    if(document.documentElement.scrollTop>700){
        button.style.display = "block"
    }
    else{
        button.style.display = "none"
    }
}
button.onclick=function(){
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
}
function scrollWin() {
    window.scrollTo(0, 500);
}

