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
