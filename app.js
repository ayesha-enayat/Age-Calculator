function calculateAge() {
  // get the date of birth from the input field
  const dobInput = document.getElementById("dob").value;
  const birthDate = new Date(dobInput);

  // Check if the input field is empty or if the input is an invalid date
  if (!dobInput || isNaN(birthDate)) {
      document.getElementById("result").innerText = "Please enter a valid date in the format mm/dd/yyyy.";
      return;
  }

  // Get today's date
  const today = new Date();

  // Ensure the birth date is not in the future
  if (birthDate > today) {
      document.getElementById("result").innerText = "Date of birth cannot be in the future.";
      return;
  }

  // Calculate the initial age based on the year difference
  let age = today.getFullYear() - birthDate.getFullYear();

  // Calculate the month and day differences
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();
  console.log(monthDifference);

  // Adjust the age if the birthday hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
     age--;
  }
  // Display the calculated age
  document.getElementById("result").innerText = `You are ${age} years old.`;
}
