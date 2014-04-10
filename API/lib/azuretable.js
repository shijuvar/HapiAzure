"use strict";
var azure = require('azure');
var uuid = require('node-uuid');
module.exports = AzureTable;

function AzureTable(storageClient, tableName, partitionKey) {
    this.storageClient = storageClient;
    this.tableName = tableName;
    this.partitionKey = partitionKey;
    this.storageClient.createTableIfNotExists(tableName, function tableCreated(error) {
        if(error) {
            throw error;
        }
    });
};
AzureTable.prototype = {
    find: function (query, callback) {
        var self = this;
        self.storageClient.queryEntities(query, function entitiesQueried(error, entities) {
            if (error) {
                callback(error);
            } else {
                callback(null, entities);
            }
        });
    },

    addItem: function (item, callback) {
        var self = this;
        item.RowKey = uuid();
        item.PartitionKey = self.partitionKey;
        self.storageClient.insertEntity(self.tableName, item, function entityInserted(error) {
            if (error) {
                callback(error);
            }
            callback(null);
        });
    },

    updateItem: function (item, callback) {
        var self = this;
        self.storageClient.updateEntity(self.tableName, item, function entityUpdated(error) {
            if (error) {
                callback(error);
            }
            callback(null);
        });
    },
    deleteItem: function (rowKey, callback) {
        var self = this;
        self.storageClient.deleteEntity(self.tableName
            , {
                PartitionKey : self.partitionKey
                , RowKey : rowKey
            }
            ,function entityDeleted(error) {
                if (error) {
                    callback(error);
                }
                callback(null);
            });
    }
}

