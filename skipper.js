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
        }
    }, 300);
});

function timeoutskip() {
    setInterval(() => {
    click("ytp-ad-skip-button-text");
    }, 300);
}

setInterval(() => {
    click("ytp-ad-overlay-close-button");
    if (document.querySelector("div.ad-showing")) {
        document.getElementsByTagName("video")[0].playbackRate = 16
        setTimeout(timeoutskip, 3000)
    };
}, 300);
