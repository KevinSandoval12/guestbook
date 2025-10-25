// Runs when form is submitted
document.getElementById("contact-form").onsubmit = () => {
  clearErrors();

  // Grab Elements
  // Personal Information
  let fnameInput = document.getElementById("fname").value.trim();
  let lnameInput = document.getElementById("lname").value.trim();
  let emailInput = document.getElementById("email").value.trim();

  // How Did We Meet? Information
  let metBox = document.getElementById("meet");
  let otherBox = document.getElementById("other");
  let optionDisplay = document.getElementById("otherDisplay");

  let mailing = document.getElementById("mailing-list");
  let format = document.getElementById("email-format-row");
  let html = document.getElementById("html-button");
  let text = document.getElementById("text-button");

  let isValid = true;
  // have default style of error be "none"
  // but "inline" when requirements not met
  if (!fnameInput) {
    isValid = false;
    document.getElementById("fnameErr").style.display = "inline";
  }

  if (!lnameInput) {
    isValid = false;
    document.getElementById("lnameErr").style.display = "inline";
  }

  // if mailing list is check
  if (mailing.checked) {
    // and email doens't include @ and .
    if (!emailInput.includes("@") || !emailInput.includes(".")) {
      isValid = false;
      document.getElementById("emailErr").style.display = "inline";
    }
  }

  // How we Met
  if (metBox.value == "none") {
    isValid = false;
    document.getElementById("meetErr").style.display = "inline";
  }

  if (metBox.value === "other") {
    isValid = false;
    otherBox.style.display = "inline";
    // if otherBox is empty
    if (!otherBox) {
      isValid = false;
    }
  }

  // ADD A LISTENER OR A WAY TO APPEAR WHEN MAILING IS CHECKED
  if (mailing.checked) {
    format.style.display = "inline";
  }

  // if both html or text format buttons arent checked
  if (!html.checked && !text.checked) {
    isValid = false;
  }

  return isValid;
}; // End of onsubmit form

// clears Errors funciton
function clearErrors() {
  let errors = document.getElementsByClassName("error");
  for (let error of errors) {
    error.style.display = "none";
  }
}
