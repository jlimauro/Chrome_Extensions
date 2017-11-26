document.addEventListener('DOMContentLoaded', function() {
    var catButtonClick = document.getElementById('catButton');
    
    // onClick's logic below:
    catButtonClick.addEventListener('click', function() {
        catPage();
    });
});

function catPage() {
    console.log("cat button clicked");
    
    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        let msg = {
            txt: "caterize"
        }

        chrome.tabs.sendMessage(tabs[0].id, msg);
    }
}