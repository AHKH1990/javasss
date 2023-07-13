function countryInfo(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
  }
  
  let country1Info = countryInfo('Spain', 47, 'Madrid');
  let country2Info = countryInfo('italy', 55, 'rome');
  let country3Info = countryInfo('Germany', 83, 'Berlin');
  
  console.log(country1Info);
  console.log(country2Info);
  console.log(country3Info);
  