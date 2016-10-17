/*
 * Copyright (c) 2016 klbjlabs@gmail.com
 *
 */

var konnect = module.exports;
require('colors');

konnect.program = require('commander-plus');
konnect.program.Settings.autoHelp = false;

konnect.commands         = {};
konnect.commands.add     = require('./commands/add');
konnect.commands.ls      = require('./commands/ls');
konnect.commands.help    = require('./commands/help');


// konnect.common          = {};
// konnect.common.userAuth = require('./common/userAuth');
// konnect.common.userConfig = require('./common/userConfig');

konnect.program.on('noCommand', konnect.printHelp);

konnect.program
  .command('*')
  .action(function () {
    console.log('Command not found.');
  });

konnect.program.parse(process.argv);
