// ==UserScript==
// @name        asofterworld-nav
// @include     http*
// @grant       none
// ==/UserScript==

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var toggle = true;

document.onkeydown = function(e) {
    e = e || window.event;

    var url = document.URL.split("=");
    var base = url[0] + "=";
    var next = base + (parseInt(url[1]) + 1);
    var prev = base + (parseInt(url[1]) - 1);

    if (e.keyCode == '37') {  //left
        location.href = prev;
    }
    else if (e.keyCode == '39') {  //right
        location.href = next;
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
    else if (e.keyCode == '40') {  //down

    }
};