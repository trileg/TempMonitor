'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width:500, height: 800});
  mainWindow.loadURL('http://192.168.3.1:8085/')
  
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});