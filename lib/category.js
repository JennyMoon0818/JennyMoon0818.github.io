module.exports.get = function(conn, callback){
  var sql = 'SELECT * FROM category';
  var categoryList = [];

  conn.query(sql, function(err, rows, fields){
    if(err){
      callback(categoryList);
    }

    for (var i in rows) {
      categoryList.push({
        'id': rows[i].id,
        'title': rows[i].title
      });
    }

    callback(categoryList);
  });
};
