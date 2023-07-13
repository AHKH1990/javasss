function colorType(color) {
    // Convert the color to lowercase for case insensitivity
    color = color.toLowerCase();
  
    switch (color) {
      case 'yellow':
      case 'pink':
      case 'orange':
        return 'light color';
      case 'blue':
      case 'purple':
      case 'brown':
        return 'dark color';
      default:
        return 'Unknown color';
    }
  }
  
  // Testing the function with different colors
  console.log(colorType('Yellow')); // light color
  console.log(colorType('PURPLE')); // dark color
  console.log(colorType('red')); // Unknown color
  console.log(colorType('BROWN')); // dark color
  