var prds = document.querySelector ("#prd-parent #products");
var prdimg = document.querySelectorAll(".card");

prds.style.width = prdimg[0].getBoundingClientRect().width*[prdimg.length+1] + prdimg[0].getBoundingClientRect ().left*[prdimg.length-3] + 'px';

var current = prds.getBoundingClientRect ().left;

document.querySelector ("#prd-parent").addEventListener ("scroll", function (){
    var newpos = prds.getBoundingClientRect ().left;
    var diff = newpos - current;
    var speed = diff*0.44;
    current = newpos;
    prdimg.forEach (function (elem){
        elem.style.transform = `skewX(${speed}deg)`
    })
})