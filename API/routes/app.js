var Joi = require("joi");
var azure = require('azure');
var BookmarkController=require('./../controllers/bookmark');
var AzureTable=require('./../lib/azuretable');
var nconf = require('nconf');
nconf.env().file({ file: 'config.json'});
var tableName = nconf.get("TABLE_NAME");
var partitionKey = nconf.get("PARTITION_KEY");
var accountName = nconf.get("STORAGE_NAME");
var accountKey = nconf.get("STORAGE_KEY");
var tableService = azure.createTableService(accountName, accountKey);

var azureTable = new AzureTable(azure.createTableService(accountName, accountKey), tableName, partitionKey);
var bookmarkController = new BookmarkController(azureTable);

var routes =
   [
       {
           method: 'GET',
           path: '/bookmarks',
           config: {
               handler: bookmarkController.getBookmarks.bind(bookmarkController)
           }
       },
       {
           method: 'GET',
           path: '/bookmarks/{rowkey}',
           config: {
               handler: bookmarkController.getBookmarkById.bind(bookmarkController)
           }
       },
       {
           method: 'POST',
           path: '/bookmarks',
           config: {
               handler: bookmarkController.insertBookmark.bind(bookmarkController),
               validate: {
                   payload: {
                       title: Joi.string(),
                       desc: Joi.string(),
                       location: Joi.string(),
                       priority: Joi.number().integer().min(1).max(5)
                   } }
           }
       },
       {
           method: 'PUT',
           path: '/bookmarks/{rowkey}',
           config: {
               handler: bookmarkController.updateBookmark.bind(bookmarkController),
               validate: {
                   payload: {
                       title: Joi.string(),
                       desc: Joi.string(),
                       location: Joi.string(),
                       priority: Joi.number().integer().min(1).max(5)
                   } }
           }
       },
       {
           method: 'DELETE',
           path: '/bookmarks/{rowkey}',
           config: {
               handler: bookmarkController.deleteBookmark.bind(bookmarkController)
           }
       }
    ];

module.exports.routes = function (server) {
    server.route(routes);
};
