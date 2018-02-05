(() => {
    const popup = document.querySelector('#popup-content');
    popup.addEventListener('click', (e) => {
        if (!e.target.matches('.button')) {
            return;
        }
        popup.querySelectorAll('.button').forEach((element) => element.classList.remove('active'));
        e.target.classList.add('active');
        chrome.runtime.sendMessage({ currentLang: e.target.dataset.locale });
    })
})();
