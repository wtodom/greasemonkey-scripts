// ==UserScript==
// @name        asofterworld-nav
// @include     http*
// @grant       none
// ==/UserScript==

/*
    Use the left and right arrow keys to navigate forward and backward.
    The up arrow key toggles the alt text.
*/

var script = document.createElement('script');
script.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1-rc2/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var toggle = true;

document.onkeydown = function(e) {
    e = e || window.event;

    if (e.keyCode == '37') {  //left
        window.location = $("#backbutton > a").attr('href');
    }
    else if (e.keyCode == '39') {  //right
        window.location = $("#nextbutton > a").attr('href');
    }
    else if (e.keyCode == '38') {  //up
        if (toggle) {
            $("p > img").trigger('click');
        }
        else {
            $("#alertLayer > table").trigger('click');
        }
        toggle = !toggle;
    }
};