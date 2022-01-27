if (document.querySelector("div.ad-showing")) {
    document.getElementsByTagName("video")[0].playbackRate = 16
};

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ 'skiptoggle': false }, result => {
    })
})

var istoggleon = false;

chrome.storage.onChanged.addListener(function (changes, area) {
    if (area === 'local' && changes.skiptoggle) {
        if (changes.skiptoggle.newValue) {
            istoggleon = true; 
        }
        else {
            istoggleon = false;
        }

    }
})
