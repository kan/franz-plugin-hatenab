module.exports = (Franz, options) => {
    setTimeout(() => {
        location.reload();
    }, 90000);

    window.addEventListener('scroll', (ev) => {
        const entry = document.querySelector('.entry-block');
        if (entry) {
            localStorage.setItem("Franz.HatenaB.latest", entry.getAttribute('data-eid'));
        }
    });

    function getMessages() {
        const latest = localStorage.getItem("Franz.HatenaB.latest");
        const entry = document.querySelector('.entry-block');
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
        if (document.querySelector('.notify-count').style.display != "none") {
            reply = parseInt($('.notify-count')[0].innerText);
        }

        Franz.setBadge(reply, unread);
    }

    Franz.loop(getMessages);
}
