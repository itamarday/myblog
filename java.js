function techfun() {
    document.getElementById("tech").innerHTML = "סרגי! &#x1F44D;";
    
}
function imgrev(){
    document.getElementById("img2cange").style.visibility='visible';
    }
    function imgrev2(){
        document.getElementById("movie2cange").style.visibility='visible';
        }
        
function imgrev3(){
    document.getElementById("food2cange").style.visibility= 'visible'
}
.four span {
    color: #8d6a00;
    opacity: 0;
    transform: translate(0, -100px) rotate(360deg) scale(0);
    animation: revolveDrop .3s forwards;
}


@keyframes revolveDrop {
    30% {
        transform: translate(0, -50px) rotate(180deg) scale(1);
    }

    60% {
        transform: translate(0, 20px) scale(.8) rotate(0deg);
    }

    100% {
        transform: translate(0) scale(1) rotate(0deg);
        opacity: 1;
    }
}
$(function(){
    $('.repeat').click(function(){
        var classes =  $(this).parent().attr('class');
        $(this).parent().attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function(){ 
            $(indicator).parent().addClass(classes);
        }, 20);
    });
});