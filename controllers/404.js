var template = require('../views/template-main');
exports.get = function(req, res) {
 res.writeHead(404, {'Content-Type': 'text/html'});
 res.write(
  template.build("404 - Page not found","It's a 404","<p>Wrong URL. Try going to home page.</p>"));
 res.end();
}
