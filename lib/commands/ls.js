var fs = require('fs');

var konnect = require('../konnect')

list = function() {
  var home = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
  this.dir = home + '/.konnect/';
  var configFile = this.dir + 'hosts.json';
  if(fs.existsSync(configFile)) {
    try {
      this.data = JSON.parse(fs.readFileSync(configFile));
      console.log(this.data.hostCounts);
    } catch(e) {
      this.data = null;
    }
    return true;
  } else {
    console.log('Hosts List Empty');
    return false;
  }
};

konnect.program
  .command('ls')
  .description('print current Logged user')
  // .on('--help', konnect.printHelp)
  .action(list);
