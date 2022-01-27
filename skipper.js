const click = (clazz) => {
    const buttons = document.getElementsByClassName(clazz);
    for (const button of buttons) {
      button.click();
    }
  }
<<<<<<< HEAD
}
if (document.querySelector("div.ad-showing")) {
  document.getElementsByTagName("video")[0].playbackRate = 16
  setInterval(() => {
    click("ytp-ad-skip-button-text");
    click("ytp-ad-overlay-close-button");
  }, 300);
}
=======
  
  setInterval(() => {
    click("ytp-ad-skip-button-text");
    click("ytp-ad-overlay-close-button");
  }, 300);
>>>>>>> parent of 4aa051f (auto fast forward)
