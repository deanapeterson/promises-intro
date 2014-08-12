// Code goes here


function slideDown($el, duration){
  var dfd = $.Deferred();
  
  
  $el.slideDown(duration,function(){
    dfd.resolve();
  });
  
  return dfd.promise();
}

var boxOne = slideDown($("#box-one"),100).promise();
var boxTwo = slideDown($("#box-two"),1000).promise();
var boxThree = slideDown($("#box-three"),500).promise();


$.when(boxOne,boxTwo, boxThree).then(function(){
  $("#wrapper").css({
    backgroundColor: "yellow"
  }).append("<h1>All Done</h1>");
});