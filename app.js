const toggleForm = () => {
  const loginContainer = document.getElementById("loginContainer");
  const signupContainer = document.getElementById("signupContainer");
  loginContainer.style.display = loginContainer.style.display === "none" ? "block" : "none";
  signupContainer.style.display = signupContainer.style.display === "none" ? "block" : "none";
};

const handleSignup = async () => {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const errorDiv = document.getElementById("signupError");

  if (!username || !password) {
    errorDiv.textContent = "Please fill in all fields.";
    return;
  }

  const response = await fetch("https://script.google.com/macros/s/AKfycbwspbT1qrf60vTesJajirnJ_d95KA59M1Pvn04jFZ6XZavvG4HrfKsl3vpxEZ5-0qNa/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "signup", username, password }),
  });

  const result = await response.json();
  if (result.success) {
    errorDiv.textContent = result.message;
    errorDiv.style.color = "green";
  } else {
    errorDiv.textContent = result.message;
    errorDiv.style.color = "red";
  }
};

const handleLogin = async () => {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const errorDiv = document.getElementById("loginError");

  if (!username || !password) {
    errorDiv.textContent = "Please fill in all fields.";
    return;
  }

  const response = await fetch("https://script.google.com/macros/s/AKfycbwspbT1qrf60vTesJajirnJ_d95KA59M1Pvn04jFZ6XZavvG4HrfKsl3vpxEZ5-0qNa/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "login", username, password }),
  });

  const result = await response.json();
  if (result.success) {
    errorDiv.textContent = result.message;
    errorDiv.style.color = "green";
    window.location.href = "https://sites.google.com/view/wisdomacademy26/home"; // Redirect to your website
  } else {
    errorDiv.textContent = result.message;
    errorDiv.style.color = "red";
  }
};