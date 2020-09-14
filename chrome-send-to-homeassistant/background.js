chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.storage.sync.get({        
        webhookid: 'webhook_id'
    }, function (items) {
        var endpoint_url = items.webhookid;        
        title = tab.title;
        url = tab.url;
        console.log(endpoint_url);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", endpoint_url);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({url: url, title: title}));
    });
});

