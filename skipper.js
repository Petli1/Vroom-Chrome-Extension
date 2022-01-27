const click = (clazz) => {
  const buttons = document.getElementsByClassName(clazz);
  for (const button of buttons) {
    button.click();
  }
}
if (document.querySelector("div.ad-showing")) {
  document.getElementsByTagName("video")[0].playbackRate = 16;
}
