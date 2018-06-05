// What is a callback function?
// A callback is a function which is passed in as a parameter to another function
// This funciton is then ran inside the function body

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make a HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;

  self.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}
// Make a HTTP POST Request
// Make a HTTP PUT Request
// Make a HTTP DELETE Request
