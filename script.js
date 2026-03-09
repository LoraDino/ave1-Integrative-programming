const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (email === "" || password === "") {
      alert("All login fields are required.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Enter a valid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    // ADMIN LOGIN
    if (email === "ave.lorie_anne@hnu.edu.ph" && password === "123456") {
      localStorage.setItem("role", "admin");
      window.location.href = "admin.html";
    } else {
      localStorage.setItem("role", "user");
      window.location.href = "profile.html";
    }
  });
}

// Make deleteRow globally accessible
window.deleteRow = function (button) {
  let row = button.parentElement.parentElement;
  row.remove();
};
