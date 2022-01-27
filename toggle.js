var theButton = document.querySelector("button");

function updateButton() {
    chrome.storage.local.get(['skiptoggle'], result => {
        theButton.innerHTML = result.skiptoggle ? "Enabled" : "Disabled";
        theButton.className = result.skiptoggle ? "buttonON" : "buttonOFF";
    })
}

function toggleButton(e) {
    var bool = e.target.className === 'buttonON' ? false : true
    chrome.storage.local.set({ 'skiptoggle': bool }, result => {
        updateButton()
    })

}

updateButton()
theButton.onclick = toggleButton