if (document.querySelector("div.ad-showing")) {
  setInterval(() => {
    document.getElementsByTagName("video")[0].playbackRate = 16;
  }, 300)
}
