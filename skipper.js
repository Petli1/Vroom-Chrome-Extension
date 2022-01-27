const click = (clazz) => {
  const buttons = document.getElementsByClassName(clazz);
  for (const button of buttons) {
    button.click();
  }
}
setInterval(() => {
  click("ytp-ad-skip-button-text");
  click("ytp-ad-overlay-close-button");
}, 300);
if (document.querySelector("div.ad-showing")) {
  document.getElementsByTagName("video")[0].playbackRate = 16
}
