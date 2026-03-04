// LOGIN VALIDATION
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (email === "" || password === "") {
      alert("All login fields are required.");
      e.preventDefault();
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Enter a valid email.");
      e.preventDefault();
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      e.preventDefault();
      return;
    }
  });
}

// SIGNUP VALIDATION
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("All signup fields are required.");
      e.preventDefault();
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Enter a valid email.");
      e.preventDefault();
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      e.preventDefault();
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      e.preventDefault();
      return;
    }
  });
}
