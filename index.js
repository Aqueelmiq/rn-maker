#!/usr/bin/env node
var program = require('commander');
var fs = require('fs');
var path = require('path');

var DEFAULT_COMPONENT_DIRECTORY = "src/components/";
var DEFAULT_CONTAINER_DIRECTORY = "src/container/";
var DEFAULT_SCENES_DIRECTORY = "src/scenes/";
var DEFAULT_ACTIONS_DIRECTORY = "src/actions/";
var DEFAULT_REDUCER_DIRECTORY = "src/reducer/";

program
    .arguments('<cmd>')
    .action(function(cmd) {
            console.log(cmd);
            createComponent("hello");
        })
        .parse(process.argv);

function ensurePath(filePath) {
    var dir = path.dirname(filePath);
    console.log(dir);
    if(fs.existsSync(dir)) {
        return true;
    }  
    ensurePath(dir);
    fs.mkdirSync(dir);
}

function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function createComponent(name) {
    var readPath = path.join(__dirname, '/templates/component.file');
    var writePath = DEFAULT_COMPONENT_DIRECTORY + name + ".js";
    fs.readFile(readPath, "utf8", function(err, data) {
        if(err) {
            return console.log(err);
        }
        var modified = data
        .replace(/<<NAME>>/g, capitalize(name))
        .replace(/<<PROPS>>/g, "test, sample");
        ensurePath(writePath);
        fs.writeFile(writePath, modified, function(err) { if(err) { console.log(err) } });
    })
}

function createContainer(name) {
    var readPath = path.join(__dirname, '/templates/component.file');
    var writePath = DEFAULT_COMPONENT_DIRECTORY + name + ".js";
    fs.readFile(readPath, "utf8", function(err, data) {
        if(err) {
            return console.log(err);
        }
        var modified = data
        .replace(/<<NAME>>/g, capitalize(name))
        .replace(/<<PROPS>>/g, "test, sample");
        ensurePath(writePath);
        fs.writeFile(writePath, modified, function(err) { if(err) { console.log(err) } });
    })
}

function createActions(name) {
    var readPath = path.join(__dirname, '/templates/component.file');
    var writePath = DEFAULT_COMPONENT_DIRECTORY + name + ".js";
    fs.readFile(readPath, "utf8", function(err, data) {
        if(err) {
            return console.log(err);
        }
        var modified = data
        .replace(/<<NAME>>/g, capitalize(name))
        .replace(/<<PROPS>>/g, "test, sample");
        ensurePath(writePath);
        fs.writeFile(writePath, modified, function(err) { if(err) { console.log(err) } });
    })
}