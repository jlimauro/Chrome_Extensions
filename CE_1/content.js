chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);

    if (message.txt == 'caterize'){
        caterizePage();
    }
    else {
        updateParagraphs(message.txt);
    }
}

function updateParagraphs(message) {
    let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {
      elt.innerHTML = message;
    }
}