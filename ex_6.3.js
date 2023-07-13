function stringLengths(strings) {
    var lengths = [];
  
    for (var i = 0; i < strings.length; i++) {
      lengths.push(strings[i].length);
    }
  
    return lengths;
  }
  
  // Testing the function
  var strings = ["boo", "doooo", "hoo", "ro"];
  console.log(stringLengths(strings));
  