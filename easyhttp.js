// What is a callback function?
// A callback is a function which is passed in as a parameter to another function
// This functon is then ran inside the function body


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
easyHTTP.prototype.post = function(url, data, callback) {
  this .http.open('POST', url, true);

  // Set Header
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;

  // Create callback which is run after onload
  self.http.onload = function() {
      callback(null, self.http.responseText);
}

  // Make posted data JSON
  this.http.send(JSON.stringify(data));
}



// Make a HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this .http.open('PUT', url, true);

  // Set Header
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;

  // Create callback which is run after onload
  self.http.onload = function() {
      callback(null, self.http.responseText);
}

  // Make posted data JSON
  this.http.send(JSON.stringify(data));
}



// Make a HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;

  self.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}
