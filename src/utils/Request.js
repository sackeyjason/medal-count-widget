function Request(options) {
  var request = new XMLHttpRequest();
  request.open('GET', options.url, true);
  
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      options.success(data);
    } else {
      // We reached our target server, but it returned an error
      options.error();
    }
  };
  
  request.onerror = function() {
    // There was a connection error of some sort
    options.error();
  };
  
  request.send();
}

export default Request;
