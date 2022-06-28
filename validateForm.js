const submitBtn = document.getElementById("form");

function checkEmail() {
  const email = document.getElementById("mail");
  email.addEventListener("input", function () {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting an e-mail address!");
    } else {
      email.setCustomValidity("");
    }
  });
}

submitBtn.addEventListener("click", () => {
    console.log('clicked');
  checkEmail();
});

// conditional for First Name empty check
// if () {

// }
