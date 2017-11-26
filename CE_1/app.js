document.addEventListener('DOMContentLoaded', function() {
    var catButtonClick = document.getElementById('catButton');
    catButtonClick.addEventListener('click', function() {
        catPage();
    });

    var paragraphReplace = document.getElementById('pReplaceTxt');
    paragraphReplace.addEventListener('change', function(event) {
         updateCurrentTab(event.target.value);
    });
});

function updateCurrentTab(message) {
    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);
    
    function gotTabs(tabs) {
        let msg = {
            txt: message
        }

        chrome.tabs.sendMessage(tabs[0].id, msg);
    }
}

function catPage() {
    updateCurrentTab("caterize");
}