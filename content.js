chrome.runtime.onMessage.addListener(gotMessage);


function gotMessage(message, sneder, sendResponse) {
    console.log(message.txt);
    if(message.txt === "hello") {
        let paragraphs = document.getElementsByTagName('p');
        for(elt of paragraphs) {
            elt.innerHTML = "TIME TO STUDY!"
            elt.style["background-color"] = '#FFFF00';
        }
    }
}