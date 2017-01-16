var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  // switch (cmd) {
  // 	case 'pwd':
  // 		//process.stdout.write(`${process.cwd()}`)
  //     //pwd();
  //     return commands['pwd']();
  // 		break;
  // 	case 'date':
  // 		var currentDate = new Date();
  // 		process.stdout.write(`${currentDate}`);
  // 		break;
  // 	default:
  // 		process.stdout.write(`You typed: ${cmd}`);
  //   case 'ls':
  //     return commands['ls']();
  // }

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
  process.stdout.write('\nprompt > ');
});




