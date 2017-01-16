var fs = require('fs');
require('request');

module.exports = {
  cat: function(filename){
    fs.readFile(filename, 'utf8', (err, data) => {
      // if (err) {throw err}
      if (data === undefined) {
        process.stdout.write("That file doesn't exist!");
        this.done()
      } else {
        process.stdout.write(data);
        this.done();
      }
    });
  },
  curl: function(url) {

  },
  date: function(){
    var currentDate = new Date();
    process.stdout.write(`${currentDate}`);
    this.done();
  },
  done: function() {
    process.stdout.write('\nprompt > ');
  },
  echo: function(param){
    process.stdout.write(`${param}`);
    this.done();
  },
  head: function(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
      // if (err) {throw err}
      if (data === undefined) {
        process.stdout.write("That file doesn't exist!");
        this.done()
      } else {
        var lineArr = data.split('\n');
        var fileHead = lineArr.slice(0,5).join('\n')
        process.stdout.write(fileHead);
        this.done();
      }
    });
  },
  ls: function(){
    fs.readdir('.', function(err, files) {
      if (err) {throw err}
      else {
        files.forEach(function(file) {
        process.stdout.write(file.toString() + '\n');
        });
        process.stdout.write('prompt > ');
      }
    });
  },
  pwd: function() {
    process.stdout.write(`${process.cwd()}`);
    this.done();
  },
  tail: function(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
      // if (err) {throw err}
      if (data === undefined) {
        process.stdout.write("That file doesn't exist!");
        this.done()
      } else {
        var lineArr = data.split('\n');
        var fileTail = lineArr.slice(-5).join('\n')
        process.stdout.write(fileTail);
        this.done();
      }
    });
  }
}
