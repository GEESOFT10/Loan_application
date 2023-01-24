console.log("starting");
const handleSubmitSignup = () => {
  console.log("true :>> ", true);
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");

  if (username.value === "" || password.value === "") {
    return window.alert("Please empty field is not required");
  } else if (password.value.length < 8) {
    return window.alert("Password must be at least 8 characters");
  }
  window.location = "/Loan_application/sign_in.html";
};
