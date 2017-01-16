module.exports = {
  pwd: function() {
    // pwd code
    process.stdout.write(`${process.cwd()}`)
  },
  ls: function(){
    var fs = require('fs');
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      });
    });
  },
  date: function(){
    var currentDate = new Date();
    process.stdout.write(`${currentDate}`);
  },
  echo: function(param){
    process.stdout.write(`${param}`);
  }
}

