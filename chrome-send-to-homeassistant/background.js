chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.storage.sync.get({
        haurl: 'NO_URL_CONFIGURED',
        webhookid: 'webhook_id'
    }, function (items) {
        
        haurl = items.haurl;
        webhookid = items.webhookid;
        var endpoint_url = haurl + "api/webhook/" + webhookid;        
        title = tab.title;
        url = tab.url;
        console.log(endpoint_url);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", endpoint_url);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({url: url, title: title}));
    });
});

