HapiAzure
=========

Single Page Application (SPA) Demo with Hapi.js, AngularJS and Azure Table. 

Here’s the technology stack used for the demo app:

* REST API – Node.js and Hapi.js
* Data Persistence – Microsoft Azure Table
* Web App – AngularJS

The following Node.js modules are using for the REST API.

* hapi – HTTP Server framework, used for building the REST API app.
* azure - Windows Azure Client Library for node, used for persisting data onto Azure Table storage.
* joi - Object schema validation module for Hapi.js.
* node-uuid – Generating unique id for Node

## Setting up the API app

#### Step 1- Create a Storage Account in Azure

Create a storage account in Azure and take the storage account and storage key from Azure portal. 

#### Create Free Trial Account in Microsoft Azure

This demo app uses Microsoft Azure Storage which need a subscription in Azure. You will get free one month trial account in Azure which also provides free $200 credits to spending on all Azure services. You will get the free trial account from [here](http://azure.microsoft.com/en-us/pricing/free-trial/).

#### Step 2 - Add a Configuartion File for Storage Account Connection Information

Add config.json file into the API folder and add the following onto the config file with your Azure storage name and storage key:

```
{
    "STORAGE_NAME": "Azure storage name",
    "STORAGE_KEY": "Azure storage key",
    "PARTITION_KEY": "myBookmarks",
    "TABLE_NAME": "bookmarks"
}
```

Navigate to the folder API in the command prompt, enter **npm install**.

## Running the App

To run the API server, navigate to the folder API in the command prompt and enter **node server.js**.
To run the Web app, make the index.html page as the start page of web app.

## Blog Post 

* [Single Page Application Demo With Hapi.js, AngularJS And Azure Table](http://weblogs.asp.net/shijuvarghese/archive/2014/04/23/single-page-application-demo-with-hapi-js-angularjs-and-azure-table.aspx)
* [Building an API in Node.js Using Hapi.js and Azure Table](http://weblogs.asp.net/shijuvarghese/archive/2014/04/11/building-an-api-in-node-js-using-hapi-js-and-azure-table.aspx)
 
