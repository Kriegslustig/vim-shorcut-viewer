var express = require('express')
var app = express()

app
  .use('/vim-shortcut-viewer', express.static(__dirname))
  .listen(3002)

