"use strict";
var azure = require('azure');
module.exports = BookmarkController;
function BookmarkController(azureTable) {
    this.azureTable = azureTable;
}
BookmarkController.prototype = {
    getBookmarks: function (request, reply) {
        var self = this;
        var query = azure.TableQuery
            .select()
            .from(self.azureTable.tableName)
            .where('PartitionKey eq ?', self.azureTable.partitionKey);
        self.azureTable.find(query, function itemsFound(error, items) {
           reply(items);
        });
    },
    insertBookmark: function insertBookmark(request, reply) {
        var self = this;
        var bookmark = {
            title : request.payload.title
            , desc :  request.payload.desc
            , location: request.payload.location
            , priority: request.payload.priority
        };
        self.azureTable.addItem(bookmark, function itemAdded(error) {
            if(error) {
                reply(error);
            }
            else{ reply(bookmark);}
        });
    },
    updateBookmark: function updateBookmark(request, reply) {
        var self = this;
        var bookmark = {
            PartitionKey : self.azureTable.partitionKey
            , RowKey : request.params.rowkey
            , title : request.payload.title
            , desc :  request.payload.desc
            , location: request.payload.location
            , priority: request.payload.priority
        };
        self.azureTable.updateItem(bookmark, function itemUpdated(error) {
            if(error) {
                reply(error);
            }
            else{ reply(bookmark);}
        });
    },
    deleteBookmark: function deleteBookmark(request, reply) {
        var self = this;
        self.azureTable.deleteItem(request.params.rowkey, function itemDeleted(error) {
            if(error) {
                reply(error);
            }
            else{reply({ message : "Item deleted"})}
        });
    }
}