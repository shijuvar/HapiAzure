bookmarkApp.factory("bookmarkService", ["$resource", function ($resource) {
    var baseUri='http://localhost:3000/bookmarks/';

 var Bookmarks = $resource(baseUri+':rowkey', { rowkey: '@RowKey' }, { 'update': { method: 'PUT'} });

  var getAllBookmarks = function () {
       return Bookmarks.query();
   };
    var addNewBookmark = function (newBookmark) {
       return Bookmarks.save(newBookmark);
    };
   var updateBookmark = function (bookmark) {
       //modified update method for ignoring rowkey from payload
       //normal call is return Bookmarks.update(bookmark);
        return $resource(baseUri+bookmark.RowKey, null, { 'update': { method: 'PUT'} }).update({title:bookmark.title,desc:bookmark.desc, priority:bookmark.priority, location:bookmark.location});
   };
   var getBookmarkByRowKey = function (rowKey) {
       return Bookmarks.get({rowkey:rowKey});
    };
   var deleteBookmark = function (rowKey) {
     return Bookmarks.delete({rowkey:rowKey});

   };
    return {
      getAll: getAllBookmarks,
       addNew: addNewBookmark,
       update: updateBookmark,
      getByKey: getBookmarkByRowKey,
       remove: deleteBookmark
  };
} ]);





