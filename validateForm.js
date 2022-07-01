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

const setError = (element, message) => {
  const inputControl = element.parentElement;
//   console.log(inputControl.children);
  inputControl.children[0].style.boxShadow = '0 0 5px 1px maroon'; 
    inputControl.children[2].style.visibility = 'visible';
    console.log(inputControl.children[2]);
  const errorDisplay = inputControl.querySelector(".error-message");
  errorDisplay.innerText = message;
  inputControl.classList.remove("success");
  inputControl.classList.add('error');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
 
  const errorDisplay = form.querySelector(".error-message");
  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
   inputControl.children[0].classList.add("success");

};

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
    setError(email, "Looks like this is not an email");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  } else {
    setSuccess(password);
  }
};
