function calculateCircleArea(radius) {
    const area = Math.PI * radius * radius;
    console.log("The area of the circle is: " + area);
    
    const roundedArea = area.toFixed(2);
    console.log("Rounded area: " + roundedArea);
    
    return area;
  }
  const radius = 7;
  calculateCircleArea(radius);
    