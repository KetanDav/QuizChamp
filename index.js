const loginBtn = document.querySelector(".login");
const startBtn = document.querySelector(".start");
const authPopup = document.querySelector(".auth");
var dataaa;
const IframePopUp = document.getElementById("logpopup");
$(document).ready(function () {
  $(".login").click(function () {
    $(".auth").fadeToggle();
  });
  $(".start").click(function () {
    $(".auth").fadeIn();
  });
});

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Smoothly transition the border color of the authentication popup
function transitionBorderColor() {
  authPopup.style.transition = "border-color 0.5s ease-in-out"; // Smooth transition
  authPopup.style.borderColor = getRandomColor(); // Set random color
}

// Call the transitionBorderColor function periodically
setInterval(transitionBorderColor, 500); // Change color every second

async function handleLogin() {
  // Access the document inside the iframe
  const iframeDocument =
    iframe.contentDocument || iframe.contentWindow.document;

  // Find the username and password input fields inside the iframe document
  const usernameInput = iframeDocument.getElementById("name");
  const passwordInput = iframeDocument.getElementById("pass");

  // Retrieve the values of the username and password inputs
  const username = usernameInput.value;
  const password = passwordInput.value;
  console.log(username, password);
  try {
    const response = await fetch(CONFIG.SERVER_URL + "/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    console.log("i am reching till here and id annd pass are ", response);
    const data = await response.json();
    alert(data.message);

    if (response.ok) {
      window.location.href = "profile.html";
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Login failed.");
  }
}

const iframe = document.getElementById("logpopup");
iframe.onload = function () {
  // Access the document inside the iframe
  const iframeDocument =
    iframe.contentDocument || iframe.contentWindow.document;

  // Find the login button inside the iframe document
  const loginButton = iframeDocument.getElementById("loginBtn");

  // Attach an event listener to the login button
  loginButton.addEventListener("click", handleLogin);
};
