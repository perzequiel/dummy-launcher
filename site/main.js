"use strict"

// animation: floating 1s infinite both ease;
$(document).ready(function () {
    const buttons = document.querySelectorAll('.btn');
    const logos = document.querySelectorAll('.game-logo');
    
    let clickEventType = ((document.ontouchstart!==null)? false : true );

    const scrolling = ()=>{
        if (clickEventType && screen.height>screen.width) {
            let scrollingLine = document.documentElement.scrollTop;
            if(scrollingLine<100){
                buttons.forEach((button, i) => {
                    $(buttons[i]).css({animation: '',
                                        opacity: '0'});
                });
                $(buttons[0]).css({animation: 'floating 2s infinite both linear',
                                    opacity: '1'});
                $(logos[0]).css({transform: 'scale(1.15)'})
            }
            if(scrollingLine> 70 && scrollingLine<250){
                buttons.forEach((button, i) => {
                    $(buttons[i]).css({animation: '',
                                        opacity: '0'});
                });
                $(buttons[1]).css({animation: 'floating 2s infinite both linear',
                                    opacity: '1'});
                $(logos[1]).css({transform: 'scale(1.15)'})
            }
            if(scrollingLine>201 && scrollingLine<900){
                buttons.forEach((button, i) => {
                    $(buttons[i]).css({animation: '',
                                        opacity: '0'});
                });
                $(buttons[2]).css({animation: 'floating 2s infinite both linear',
                                    opacity: '1'});
                $(logos[2]).css({transform: 'scale(1.15)'})
            }
            console.log(scrollingLine)
        }
    }
    window.addEventListener('scroll', scrolling)
});