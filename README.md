HapiAzure
=========

Single Page Application (SPA) Demo with Hapi.js, AngularJS and Azure Table. 

## Setting up the API app

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

[Single Page Application Demo With Hapi.js, AngularJS And Azure Table](http://weblogs.asp.net/shijuvarghese/archive/2014/04/23/single-page-application-demo-with-hapi-js-angularjs-and-azure-table.aspx)
[Building an API in Node.js Using Hapi.js and Azure Table](http://weblogs.asp.net/shijuvarghese/archive/2014/04/11/building-an-api-in-node-js-using-hapi-js-and-azure-table.aspx)
 
