var enabled = true;
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