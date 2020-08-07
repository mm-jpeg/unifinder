function main(args){

  var express = require('express');
  var fs = require('fs');
  var readline = require('readline');
  var youtube_api = require('googleapis');
  var app = express();

  app.get('/', (req, res) => {
     res.send("Hello world!");
  });

  app.listen(8080, () => {
    console.log('Example app listening at http://localhost');
  });

}

function load_module(module){
  return "/Users/kvng/node_modules/"+module;
}

main();
