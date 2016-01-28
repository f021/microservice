const http = require('http');
const https = require('https');
const url = require('url');

const shortURL= () => {
  
  var urls = [];
  
  return {
    
    add(str, allow) {
      str = url.parse(str);
      // if (str.protocol === null) {
      //   return 'I need a URL';
      // };
      // (str.protocol === 'http' ? http : https).request()
      // str.protocol
      urls.push(str);
      return 1;
    },
    
    get(index){
      urls[index] === 'undefined'
        ? null
        : urls[index]
    }
  }
};


module.exports = shortURL;