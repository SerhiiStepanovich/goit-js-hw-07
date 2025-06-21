const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const { elements } = event.currentTarget;

  const emailValue = elements.email.value.trim();
  const passwordlValue = elements.password.value.trim();

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
}
