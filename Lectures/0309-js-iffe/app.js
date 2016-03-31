(function() {

  var com = {};

  com.mydomain = {};
  com.mydomain.Aprogram = {};

  com.mydomain.Aprogram.utility = function() {
    console.log("programmer A utility function");
  }

  com.mydomain.Aprogram.utility();

  // lots of other code as project progresses

  // another programmer writes another function called utility

  function utility() {
    console.log("programmer B utility function");
  }

  utility();

}());

// This is an example of an iffe - immediately invoked function expression