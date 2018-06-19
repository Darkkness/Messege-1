$(function() {
 
    Parse.$ = jQuery;
    Parse.initialize(
      "aGZ50b5V2WG5kTnzKg1TmD9oAseRSYLooPRNqMal",
      "FuvuUEIo3HTZJV33B1Eph956o8MSeVLPsROlqNRs"
    );
    Parse.serverURL = 'https://pg-app-iycoasifq3tr7bb0xz38crikedvyet.scalabl.cloud/1/';
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});