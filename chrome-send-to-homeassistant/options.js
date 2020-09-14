// Saves options to chrome.storage
function save_options() {
    var haurl = document.getElementById('haurl').value;
    var webhookid = document.getElementById('webhookid').value;
    console.log(haurl + webhookid);
    chrome.storage.sync.set({
        haurl: haurl,
        webhookid: webhookid
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        haurl: '(enter url here)',
        webhookid: 'some_webhook_id'
    }, function (items) {
        document.getElementById('haurl').value = items.haurl;
        document.getElementById('webhookid').value = items.webhookid;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);