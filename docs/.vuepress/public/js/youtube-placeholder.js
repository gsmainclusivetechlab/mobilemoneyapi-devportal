window.addEventListener('load', (event) => {
    if (typeof OptanonActiveGroups !== 'undefined' && OptanonActiveGroups.indexOf('C0004') === -1) {
        if (document.querySelector('iframe[data-src^="https://www.youtube.com"]')) {
            displayCookieNotice('iframe[data-src^="https://www.youtube.com"]', 'https://www.youtube.com/t/terms', 'www.youtube.com');
        }
    }

    function displayCookieNotice(selector, termsLink, siteURL) {
        const youtube = document.querySelectorAll(selector);

        for (let i = 0; i < youtube.length; i++) {
            const cloneYT = youtube[i];
            const cookiePopup = document.createElement('div');
            cookiePopup.classList.add('youtube_cookiePopup');
            cookiePopup.setAttribute('style', 'display: block;text-align: center;border: 2px solid #DE002B;border-radius: 6px;padding: 20px;margin: 10px 50px;');

            cookiePopup.innerHTML += '<button style="background: #DE002B;color: #fff;border: none;border-radius: 6px;padding: 5px 20px;" class="playButton">PLAY</button>'
            cookiePopup.innerHTML += '<br/>This content is hosted by a third party. By showing the external content you accept ';
            cookiePopup.innerHTML += '<a href="' + termsLink + '">the terms and conditions</a> of ' + siteURL + '.';

            youtube[i].parentNode.insertBefore(cookiePopup, youtube[i]);

            const playButton = youtube[i].parentNode.querySelector('.playButton');

            playButton && playButton.addEventListener('click', () => {
                cloneYT.getAttribute('data-src') && cloneYT.setAttribute('src', cloneYT.getAttribute('data-src'));
                cookiePopup.parentNode.appendChild(cloneYT);
                cookiePopup.parentNode.removeChild(cookiePopup);
            });

            youtube[i].parentNode.removeChild(youtube[i]);

        }
    }
});
