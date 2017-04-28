'use strict';
const childProcess = require('child_process');
const PWD = 'pwd';
const SEARCHBIN = 'demosearcher';

class Search {

    query(query) {
      return new Promise((resolve, reject) => {
        //var child = childProcess.execFile(PWD,[],(error,stdout,stderr) => {
        console.log('searching for args:' + query.toString());
        var child = childProcess.execFile(SEARCHBIN,query,(error,stdout,stderr) => {
          if(error) {
            console.error('stderr',stderr);
            throw error;
          }

          console.log(stdout);
          //resolve(query);
          resolve(JSON.parse(stdout));
        });
      });
    }
}

module.exports = Search;
