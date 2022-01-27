var enabled;
const click = (clazz) => {
    const buttons = document.getElementsByClassName(clazz);
    for (const button of buttons) {
      button.click();
    }
}
chrome.browserAction.onClicked.addListener(function (tab) {
    if (enabled==true){
        setInterval(() => {
            click("ytp-ad-skip-button-text");
            click("ytp-ad-overlay-close-button");
        }, 300)
    }
});