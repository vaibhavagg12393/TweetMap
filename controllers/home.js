var template = require('../views/template-main');
var test_data = require('../model/test-data');

exports.get = function(req, res)
{
	var keyword = test_data.keyword;
	var keyList = "", i = 0;
	for (i = 0; i<keyword.count;i++)
	{
		keyList = keyList + "<label><input type='checkbox'>" + keyword.keywords[i].key + "<br></label";
	}
 	keyList = keyList
	res.writeHead(200, {'Content-Type': 'text/html'});
 	res.write(
  		template.build("Tweet Map","Twitter Tweet Map","<p>Kindly select the keywords for the Twitter Tweet Map <br><br>" + keyList)
  	);
 res.end();
}
