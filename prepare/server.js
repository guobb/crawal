/**
 * Created by apple on 17/2/24.
 */
const http = require('http');

http.createServer((req, res) => {
    res.end('nodejs');

}).listen(8080);