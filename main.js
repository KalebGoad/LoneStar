function validateForm(event) {
   let myForm = document.querySelector("#myForm");
    myForm.firstName.style.backgroundColor = "LightGreen";
    myForm.lastName.style.backgroundColor = "LightGreen";
    myForm.email.style.backgroundColor = "LightGreen";
    myForm.confirmEmail.style.backgroundColor = "LightGreen";

if (myForm.firstName.value === "") {
    myForm.firstName.style.backgroundColor = "rgb(249, 110, 110)";
    myForm.firstName.placeholder = "Please Enter First Name";
}

if (myForm.lastName.value === "") {
    myForm.lastName.style.backgroundColor = "rgb(249, 110, 110)";
    myForm.lastName.placeholder = "Please Enter Last Name"
}

if (myForm.email.value === "") { 
    myForm.email.style.backgroundColor = "rgb(249, 110, 110)";
    myForm.confirmEmail.style.backgroundColor = "rgb(249, 110, 110)";
    alert("Please enter your email to submit an inquiry")
    return false;
}

if (myForm.email.value != myForm.confirmEmail.value) {
    alert("Email does not match");
    myForm.confirmEmail.style.backgroundColor = "rgb(249, 110, 110)";
    return false;
  } else {
    alert("Emails match, thank you for your inquiry")
    return true;
  }
}
let myForm = document.querySelector("#myForm");
myForm.validate.addEventListener("click", validateForm);