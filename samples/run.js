var fs = require('fs');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var markdown = require('../lib/markdown');

var text = decoder.write(fs.readFileSync('./test.md'));

console.log(markdown(text));

