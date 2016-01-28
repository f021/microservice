'use strict';

const http = require('http');
const https = require('https');
const url = require('url');

const protocols = {
    'http:' : http,
    'https' : https
};

const shortURL = () => {
  
  let urls = [];
  
  return {
    
    add(str, allow) {
      str = url.parse(str);
      if (protocols[str.protocol] ===  undefined) {
        return { error: 'Wrong protocol...' };  
      } else {
        protocols[str.protocol].get(str, res => {
          return str;
        }).on('error', err => { error : 'Can\'t get ' + str });
      }
    },
    
    get(index){
      urls[index] === 'undefined'
        ? null
        : urls[index]
    }
  }
};


module.exports = shortURL;