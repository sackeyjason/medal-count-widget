function Request(options) {
  var request = new XMLHttpRequest();
  request.open('GET', options.url, true);
  
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      try {
        var data = JSON.parse(request.responseText);
        options.success(data);
      } catch (error) {
        // bad JSON
        options.error({
          title: "Server error",
          description: "Unexpected format of data from server."
        });
      }
    } else {
      // Server error
      options.error({
        title: request.status + " Error",
        description: "We couldn't retrieve the results from the server."
      }); 
    }
  };
  
  request.onerror = function() {
    options.error({
      title: "Connection error",
      description: "We couldn't connect to the server. Please try again later, or check your connection."
    });
  };
  
  request.send();
}

export default Request;
