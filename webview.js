module.exports = (Franz, options) => {
    setTimeout(() => {
        location.reload();
    }, 90000);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://code.jquery.com/jquery-3.1.0.min.js');
    script.setAttribute('integrity', 'sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=');
    script.setAttribute('crossorigin', 'anonymous');

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(script);

    window.onscroll = function(ev) {
        const entry = $('.entry-block')[0];
        if (entry) {
            localStorage.setItem("Franz.HatenaB.latest", entry.getAttribute('data-eid'));
        }
    };

    function getMessages() {
        const latest = localStorage.getItem("Franz.HatenaB.latest");
        const entry = $('.entry-block')[0];
        if (!entry) {
            return;
        }
        const now = entry.getAttribute('data-eid');
        var unread = 0;
        if (!latest) {
            localStorage.setItem("Franz.HatenaB.latest", now);
        }
        if (latest != now) {
            unread = 1;
        }
        var reply = 0;
        if ($('.notify-count')[0].style.display != "none") {
            reply = parseInt($('.notify-count')[0].innerText);
        }

        Franz.setBadge(reply, unread);
    }

    Franz.loop(getMessages);
}
