const click = (clazz) => {
    const buttons = document.getElementsByClassName(clazz);
    for (const button of buttons) {
      button.click();
    }
};
chrome.storage.local.get(['skiptoggle'], function(result) {
    setInterval(() => {
        if (result.skiptoggle == true){
            click("ytp-ad-skip-button-text");
            click("ytp-ad-overlay-close-button");
        }
    }, 300);
});

