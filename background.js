const langs = {
    'fr': 'French',
    'en': 'English',
    'de': 'German',
    'nl': 'Dutch',
    'es': 'Spanish',
    'ja': 'Japanese',
    'th': 'Thaï',
    'zh-CN': 'Chinese',
}

const baseUrl = 'https://translate.google.fr/#';
const sourceLang = 'auto';
let destLang = 'fr';

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
    title: 'Translate "%s" to ' + langs[destLang],
    contexts: ['selection'],
    onclick: getTranslation,
});

const popupListener = (request, sender, sendResponse) => {
    if (request.currentLang) {
        destLang = request.currentLang;
        chrome.contextMenus.update('translator', {
            title: 'Translate "%s" to ' + langs[destLang],
        });
    }
}

chrome.runtime.onMessage.addListener(popupListener);
