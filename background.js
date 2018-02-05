const langs = {
    'fr': 'French',
    'en': 'English',
    'de': 'German',
    'uk': 'Ukrainian',
    'nl': 'Dutch',
    'es': 'Spanish',
    'ja': 'Japanese',
    'th': 'Thaï',
    'zh-CN': 'Chinese',
}

const baseUrl = 'https://translate.google.fr/#';
const sourceLang = 'auto';
let targetLang = 'fr';

const getUri = (toTranslate, languageDestination = 'fr') => encodeURI(`${baseUrl}${sourceLang}/${languageDestination}/${toTranslate}`);

const getTranslation = (info, tab) => {
    if (info.menuItemId === 'translator') {
        const text = info.selectionText;
        chrome.tabs.create({
            "url": getUri(text, targetLang),
        });
    }
}

chrome.contextMenus.create({
    id: 'translator',
    title: 'Translate "%s" to ' + langs[targetLang],
    contexts: ['selection'],
    onclick: getTranslation,
});

const popupListener = (request, sender, sendResponse) => {
    if (request.currentLang) {
        targetLang = request.currentLang;
        chrome.contextMenus.update('translator', {
            title: 'Translate "%s" to ' + langs[targetLang],
        });
    }
}

chrome.runtime.onMessage.addListener(popupListener);
