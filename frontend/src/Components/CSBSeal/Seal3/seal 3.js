// Get the current date
function formatDate(date) {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options).toUpperCase();
  }
  
  // Set the date dynamically
  const currentDateElement = document.getElementById("current-date");
  const currentDate = new Date();
  currentDateElement.textContent = formatDate(currentDate);
  