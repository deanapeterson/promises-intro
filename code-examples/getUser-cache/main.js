var getUser = (function() {
  var cache;

  return function(onSuccess) {

    if (typeof cache === "undefined") {
      $.ajax({
        url: "user.json",
        type: "GET",
        success: function(data) {
          cache = data;
          onSuccess(cache);
        }
      });

    } else {
      onSuccess(cache);
    }
  };
}());


function onSuccess(data) {
  $.each(data, function(key, value) {
    $("#" + key).text(value);
  });
}

function onSuccess2(data) {
  $("pre").text(JSON.stringify(data, null, "  "));
}

getUser(onSuccess);
 getUser(onSuccess2);
setTimeout(function() {
 
}, 2000);