var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === 'pwd'){
    commands['pwd']();
  }
  else if (cmd === 'date'){
    commands['date']();
  }
  else if (cmd === 'ls'){
    commands['ls']();
  }
  else if (cmd.slice(0, 4) === 'echo') {
    var echoStr = cmd.slice(5);
    commands['echo'](echoStr);
  }
  else if (cmd.slice(0,3) === 'cat') {
    var catFilename = cmd.slice(4);
    commands['cat'](catFilename);
  }
  else if (cmd.slice(0,4) === 'head') {
    var headFilename = cmd.slice(5);
    commands['head'](headFilename);
  }
  else if (cmd.slice(0,4) === 'tail') {
    var tailFilename = cmd.slice(5);
    commands['tail'](tailFilename);
  }
  else if (cmd.slice(0,4) === 'http')
  else {
    process.stdout.write(cmd);
    commands['done']();
  }
})
