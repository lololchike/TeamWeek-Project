const form = document.getElementById("phone number");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form from submitting

    const numberInput = document.getElementById("number");
    const numberValue = numberInput.value;

    if (isNaN(numberValue)) {
      alert("Please enter a valid phone number.");
    } else {
      form.submit();
    }
  });

  function confirmSubmit() {
    // Get the form element
    var div = document.getElementById("main-container");
  
    // Display a confirmation message to the user
    var confirmMsg = "Please confirm that all details are correct before submitting the form.";
    if (!confirm(confirmMsg)) {
      return false; // Stop the form from being submitted
    }
  
    // If the user confirms, submit the form
    div.submit();
  }
  