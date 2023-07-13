var populations = [10000000, 5000000, 8000000, 12000000];

function populationPercentages(populationArray) {
  var percentages = [];

  for (var i = 0; i < populationArray.length; i++) {
    var percentage = (populationArray[i] / Math.max(...populationArray)) * 100;
    percentages.push(percentage);
  }

  return percentages;
}

console.log(populationPercentages(populations));
