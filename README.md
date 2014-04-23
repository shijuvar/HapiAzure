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

To run the API server, enter **node server.js**.

## Blog Post 

[Building an API in Node.js Using Hapi.js and Azure Table](http://weblogs.asp.net/shijuvarghese/archive/2014/04/11/building-an-api-in-node-js-using-hapi-js-and-azure-table.aspx)
 
