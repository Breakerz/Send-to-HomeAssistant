Send-to-HomeAssistant
=============

This is a chrome extension that sends the current URL to your Home Assistant Server for
further processing through automation".

After installing the extension you will need to:

1. Create an automation, with a [webhook trigger](https://www.home-assistant.io/docs/automation/trigger/).
2. Configure the URL, and Webhook in the extension using the "Options" menu.


Configuring the extension
-------------------------

Go to the Extensions menu in chrome. Select the "Options" link for the
extension. Input your URL and webhook and press "Save".


Creating your first automation
--------------------------

You can retreive the URL and the page title in you automation by using 
trigger.json.url and trigger.json.title and your template. 
Here is a simple automation.

```
automation:
- id: webhook_send_url
  trigger:
    platform: webhook
    webhook_id: webhook_send_url
  action:
    service: notify.pushover
    data_template:
      message: "{{ trigger.json.url }}"
      title: "{{ trigger.json.title }}"

```

this extension is base on [this project](https://github.com/drxzcl/chrome-send-to-ifttt)






