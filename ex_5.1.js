function countryToLiveIn(language, isIsland, population, country) {
    if (language === 'English' && population < 50000000 && !isIsland) {
      console.log("You should consider living in " + country);
    } else {
      console.log(country + " does not meet your criteria");
    }
  }
  
  // Testing the function with different arguments
  countryToLiveIn('English', false, 40000000, 'Canada');
  countryToLiveIn('Spanish', true, 60000000, 'Argentina');
  countryToLiveIn('English', false, 100000000, 'Australia');
  