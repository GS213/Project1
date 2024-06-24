function updateTbilisiTime() {
  const timeDisplay = document.getElementById('tbilisi-time');
  
  // Get the current date and time in UTC
  const now = new Date();
  
  // Calculate the offset for Tbilisi time (UTC+4)
  const tbilisiOffset = 4 * 60; // Tbilisi is UTC+4
  
  // Get the UTC time in minutes
  const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  
  // Calculate Tbilisi time in minutes
  const tbilisiMinutes = (utcMinutes + tbilisiOffset) % (24 * 60);
  
  // Get the hours, minutes, and seconds for Tbilisi time
  let tbilisiHours = Math.floor(tbilisiMinutes / 60);
  const tbilisiMins = tbilisiMinutes % 60;
  const tbilisiSecs = now.getUTCSeconds();
  
  // Determine AM or PM suffix
  const ampm = tbilisiHours >= 12 ? 'PM' : 'AM';
  
  // Convert to 12-hour format
  tbilisiHours = tbilisiHours % 12;
  tbilisiHours = tbilisiHours ? tbilisiHours : 12; // The hour '0' should be '12'
  
  // Format the hours, minutes, and seconds to match the required format
  const formattedTime = `${String(tbilisiHours).padStart(2, '0')}:${String(tbilisiMins).padStart(2, '0')}:${String(tbilisiSecs).padStart(2, '0')} ${ampm}`;
  
  // Set the innerHTML of the time display to Tbilisi time
  timeDisplay.innerHTML = formattedTime;
}

// Call the function to update the Tbilisi time every second
setInterval(updateTbilisiTime, 1000);
