const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const emailValue = email.emailValue.trim();
  const passwordlValue = password.passwordValue.trim();

  if (!emailValue || !passwordlValue) {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email: emailValue,
    password: passwordlValue,
  };
  console.log(formData);
  event.currentTarget.reset();
});
