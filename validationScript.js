// Kim Mayo, WEB.115.0002, M8: Form Validation with Regular Expressions
// JavaScript code for form validation

// Retrieve the input field value
document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("myForm");
  
// Event listener to submit
  form.addEventListener("submit", function(event) {
    event.preventDefault();

  validateInput();  
  });
});

// Validate user input with regular expression
function validateInput() {
  let form = document.getElementById("myForm");
  let inputField = document.getElementById("inputField");
  let inputValue = inputField.value;

  let regex = /^[a-zA-Z0-9]+$/;

  // Confirmation message
  if (regex.test(inputValue)) {
    let successMessage = document.createElement("div");
    successMessage.id = "successMessage";
    successMessage.style.color = "green";
    successMessage.textContent = "Form submitted successfully!";
    inputField.parentNode.appendChild(successMessage);



  } else {
    // Error message
    let errorMessage = document.createElement("div");
    errorMessage.id = "errorMessage";
    errorMessage.style.color = "red";
    errorMessage.textContent = "Error: Please enter only letters and numbers.";
    inputField.parentNode.appendChild(errorMessage);
  }
}

        

       