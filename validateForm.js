const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

// create event listener on the form when the submit action is triggered

form.addEventListener("submit", (event) => {
  event.preventDefault(); // disable submit process to the backend as we want to validate on the client-side first

  validateInputs();
});

// logic for error visuals
const setError = (element, message) => {
  const inputControl = element.parentElement; // grab parent element
  //   console.log(inputControl.children);use to identify children elements
  // console.log(inputControl.children[2]);
  inputControl.children[0].style.boxShadow = "0 0 5px 1px maroon";
  inputControl.children[2].style.visibility = "visible";

  const errorDisplay = inputControl.querySelector(".error-message");
  errorDisplay.innerText = message; // set the empty span with class of error-message innerText
  inputControl.classList.remove("success"); // toggle the correct and error classes
  inputControl.classList.add("error");
};

// logic for successful user input
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = form.querySelector(".error-message");
  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
  inputControl.children[0].classList.add("success");
  inputControl.children[0].value = "";
};

// validate email
const isValidEmail = email => {
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
return mailformat.test(String(email).toLowerCase());
}


// function to run on all input values submitted
const validateInputs = () => {
  // remove all trailing and leading whitespace
  const fNameValue = firstName.value.trim();
  const lNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // validate firstname empty string, if so display a html element representing our error message as above
  if (fNameValue === "") {
    setError(firstName, "First Name cannot be empty");
  } else {
    setSuccess(firstName);
  }

  if (lNameValue === "") {
    setError(lastName, "Last Name cannot be empty");
  } else {
    setSuccess(lastName);
  }
  if (emailValue === "") {
    setError(email, "Email address cannot be empty");
  } 
  else if (!isValidEmail(emailValue)) {
    setError(email, "Looks like this is not an email");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be greater than 8 characters");
  }
  else {
    setSuccess(password);
  }
};
