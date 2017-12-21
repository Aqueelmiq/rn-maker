#!/usr/bin/env node
var program = require('commander');

program
    .arguments('<cmd>')
    .action(function(cmd) {
            console.log(cmd);
        })
        .parse(process.argv);