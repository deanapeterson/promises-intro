//get user module handles both call and caches the data
//and handles concurrent calls
var getUser = (function() {
  var DFD = $.Deferred();
  var ajaxCall = "notStarted";
  
  // Look, Ma. no callbacks!
  return function() {

    if(DFD.state() === "pending" && ajaxCall === "notStarted"){
      ajaxCall = "started";
      
      $.ajax({
        url: "user.json",
        type: "GET",
        success: function(data) {
          DFD.resolve(data);
        },
        error : function(jqXhr, textStatus){
          DFD.reject(textStatus);
        }
      });
    }
    
    return DFD.promise();
  };
}());


function renderHtml(data) {
  $.each(data, function(key, value) {
    $("#" + key).text(value);
  });
}
getUser().then(renderHtml);


function renderJson(data) {
  $("pre").text(JSON.stringify(data, null, "  "));
}
getUser().then(renderJson);


function renderConsole(data) {
  console.log(JSON.stringify(data, null, "  "));
}
setTimeout(function() {
  getUser().then(renderConsole);
}, 2000);