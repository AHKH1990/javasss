function getCurrentDate() {
    const currentDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    
    const formattedDate = `Today is ${dayOfWeek} the ${dayOfMonth} of ${month} ${year}`;
    console.log(formattedDate);
    
    return formattedDate;
  }
  getCurrentDate();

