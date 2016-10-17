
var konnect = require('../konnect')

konnect.printHelp = function () {
  // console.log(`Usage: konnect [host] [ls]`);
  // console.log(``);
  console.log(`Commands:`);
  console.log(`   ls              [default] list all your own hosts`);
  console.log(`   <host>          connect to your host`);
};

konnect.program
  .command('help')
  .description('Print help for all commands.')
  .on('--help', konnect.printHelp)
  .action(konnect.printHelp);
