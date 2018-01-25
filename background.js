const lang = 'French';

chrome.contextMenus.create({
    id: 'translator',
    title: 'Translate "%s" to ' + lang,
    contexts: ['selection'],
});

console.log(chrome.contextMenus.onClicked);

chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log('clicked');
    if (info.menuItemId === 'translator') {
        const text = info.selection;
        console.log(text);
    }
});
