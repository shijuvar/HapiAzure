HapiAzure
=========

REST API in Node.js with Hapi.js and Azure Table storage.

## Setting up the app

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
 
