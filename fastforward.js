chrome.browserAction.onClicked.addListener((tab) => {
   chrome.tabs.executeScript(tab.id, {
       file: '16speed.js'
   });
});