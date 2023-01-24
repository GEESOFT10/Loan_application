const handleSubmitSignIn = () => {
  const accountNumber = document.querySelector("#account");
  const password = document.querySelector("#password");

  if (accountNumber.value === "" || password.value === "") {
    return window.alert("Please empty field is not required");
  } else if (accountNumber.value.length < 10) {
    return window.alert("Something is wrong with your input");
  } else if (password.value.length < 8) {
    return window.alert("Password must be at least 8 characters");
  }

  window.location.href = "/Hackathon/Hackathon/loantypes.html";
};
