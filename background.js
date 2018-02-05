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
let targetLang;

const getUri = (phraseToTranslate, targetLanguage = 'fr') => encodeURI(`${baseUrl}${sourceLang}/${targetLanguage}/${phraseToTranslate}`);

// const getTranslation = (info, tab) => {
//     if (info.menuItemId === 'translator') {
//         const text = info.selectionText;
//         TODO
//     }
// }

chrome.contextMenus.create({
    id: 'translator',
    title: 'Translate "%s" to ' + langs[targetLang],
    contexts: ['selection'],
    onclick: TODO,
});

// const popupListener = (request, sender, sendResponse) => {
//     if (request.currentLang) {
//         targetLang = request.currentLang;
//         chrome.contextMenus.update('translator', {
//             title: 'Translate "%s" to ' + langs[targetLang],
//         });
//     }
// }

// TODO
