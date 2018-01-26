const lang = 'French';
const locale = 'fr';

const baseUrl = 'https://translate.google.fr/#';
const sourceLang = 'auto';
let destLang;

const getUri = (toTranslate, languageDestination = 'fr') => encodeURI(`${baseUrl}${sourceLang}/${languageDestination}/${toTranslate}`);

const getTranslation = (info, tab) => {
    console.log('clicked');
    if (info.menuItemId === 'translator') {
        const text = info.selectionText;
        chrome.tabs.create({
            "url": getUri(text, destLang),
        });
    }
}

chrome.contextMenus.create({
    id: 'translator',
    title: 'Translate "%s" to ' + lang,
    contexts: ['selection'],
    onclick: getTranslation,
});

const popupListener = (request, sender, sendResponse) => {
    if (request.currentLang) {
        destLang = request.currentLang;
    }
}

chrome.runtime.onMessage.addListener(popupListener);
