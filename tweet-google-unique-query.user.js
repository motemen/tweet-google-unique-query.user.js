// ==UserScript==
// @name           Tweet Google Unique Query
// @namespace      http://motemen.github.com/
// @description    Tweet your unique search query!
// @match          *://www.google.com/search*
// @match          *://www.google.co.jp/search*
// ==/UserScript==

var msg = document.querySelector('#topstuff p b') || document.querySelector('#topstuff div.med b');
msg = msg && msg.parentNode;
if (msg && msg.textContent) {
    var link = document.createElement('a');
        link.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(msg.textContent.replace(/^\s+/, '')));
        link.setAttribute('class', 'twitter-hashtag-button');
        // link.setAttribute('data-size', 'large');
    var span = document.createElement('span');
        span.style.display = 'inline-block';
        span.style.verticalAlign = 'middle';

    span.appendChild(link);
    msg.appendChild(span);

    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
}

