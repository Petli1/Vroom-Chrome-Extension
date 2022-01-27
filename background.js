var enabled = true;
const click = (clazz) => {
    const buttons = document.getElementsByClassName(clazz);
    for (const button of buttons) {
      button.click();
    }
}
chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    if(!enabled)                                           // if the extension is not enabled
      return { cancel: false };                            // don't cancel or redirect
  },
  setInterval(() => {
    click("ytp-ad-skip-button-text");
    click("ytp-ad-overlay-close-button");
  }, 300)
);