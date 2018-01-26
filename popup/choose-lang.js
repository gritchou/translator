    /*
		Listen popup clicks.
		On click, sets the translation language.
    */
    const popup = document.querySelector('#popup-content');
    popup.addEventListener('click', (e) => {
        if (!e.target.matches('.button')) {
            return;
        }
        console.log(e.target.dataset.locale)
        chrome.runtime.sendMessage({ currentLang: e.target.dataset.locale });
    });
