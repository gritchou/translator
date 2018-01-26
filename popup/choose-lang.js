    /*
		Listen popup clicks.
		On click, sets the translation language.
    */
    const popup = document.querySelector('#popup-content');
    popup.addEventListener('click', (e) => {
        if (!e.target.matches('.button')) {
            return;
        }
        popup.querySelectorAll('.button').forEach((element) => element.classList.remove('active'));
        e.target.classList.add('active');
        console.log(e);
        console.log(e.target.dataset.locale)
        chrome.runtime.sendMessage({ currentLang: e.target.dataset.locale });
    });
