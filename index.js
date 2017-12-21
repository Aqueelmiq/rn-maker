#!/usr/bin/env node
var program = require('commander');
var fs = require('fs');
var path = require('path');

var DEFAULT_COMPONENT_DIRECTORY = "/src/components/";
var DEFAULT_CONTAINER_DIRECTORY = "/src/container/";
var DEFAULT_SCENES_DIRECTORY = "/src/scenes/";
var DEFAULT_ACTIONS_DIRECTORY = "/src/actions/";
var DEFAULT_REDUCER_DIRECTORY = "/src/reducer/";

program
    .arguments('<cmd>')
    .action(function(cmd) {
            console.log(cmd);
            createComponent("hello");
        })
        .parse(process.argv);


function createComponent(name) {
    var readPath = path.join(__dirname, '/templates/component.file');
    var filePath = DEFAULT_COMPONENT_DIRECTORY + name + ".js";
    fs.readFile(readPath, "utf8", function(err, data) {
        if(err) {
            return console.log(err);
        }
        console.log(data);
    })
}