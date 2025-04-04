nameInput = document.getElementById("name");
var passwordInput = document.getElementById("pass");
var passwordIcon = document.getElementById("password-icon");

var eyeboll = document.querySelectorAll(".eyeboll");
function DefEye() {
  eyeboll.forEach(function (boll) {
    boll.style.margin = "2.5px 12.5px";
    boll.style.transition = "margin 0.5s ease";
  });
}
DefEye();
var eyeElements = document.querySelectorAll(".eye");
eyeElements.forEach(function (element) {
  element.style.backgroundColor = "#fff";
});

var doredElements = document.querySelectorAll(".dored");
doredElements.forEach(function (element) {
  element.style.backgroundColor = " #ffbb00";
});

nameInput.addEventListener("focus", () => {
    RemoveGoggles();
  setTimeout(function () {
    eyeboll.forEach(function (boll) {
      boll.style.transition = "margin 0.001s ease";
    });

    console.log("Delayed message after 1 second");
  }, 1000);

  const inputValue = nameInput.value.trim(); // Remove leading/trailing whitespace
  const inputLength = inputValue.length;

  const marginLeft = calculateMargin(inputLength);

  eyeboll.forEach(function (boll) {
    boll.style.margin = `5px ${marginLeft}px`;
  });
});
nameInput.addEventListener("blur", DefEye);

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim(); // Remove leading/trailing whitespace
  const inputLength = inputValue.length;

  const marginLeft = calculateMargin(inputLength);

  eyeboll.forEach(function (boll) {
    boll.style.margin = `5px ${marginLeft}px`;
  });
});

function calculateMargin(length) {
  // Adjust margin dynamically based on input length
  if (length == 0) {
    return 5;
  } else if (length > 0 && length < 35) {
    let x = length / 35;
    return x * 15 + 5;
  } else if (length >= 35) {
    return 20;
  }
}



passwordInput.addEventListener("focus", () => {
  var eyeElements = document.querySelectorAll(".eye");
  eyeElements.forEach(function (element) {
    element.style.backgroundColor = "black"; // Reset to default
  });

  var doredElements = document.querySelectorAll(".dored");
  doredElements.forEach(function (element) {
    element.style.backgroundColor = "black"; // Reset to default
  });
});
passwordInput.addEventListener("blur", () => {
  var eyeElements = document.querySelectorAll(".eye");
  eyeElements.forEach(function (element) {
    element.style.backgroundColor = "#fff";
  });

  var doredElements = document.querySelectorAll(".dored");
  doredElements.forEach(function (element) {
    element.style.backgroundColor = " #ffbb00";
  });
});

passwordIcon = document.getElementById("password-icon");

function togglePasswordVisibility() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordIcon.classList.remove("fa-eye");
    passwordIcon.classList.add("fa-eye-slash");
    RemoveGoggles();
  } else {
    passwordInput.type = "password";
    passwordIcon.classList.remove("fa-eye-slash");
    passwordIcon.classList.add("fa-eye");
    AddGoggles();
  }
}
function RemoveGoggles()
{
    var eyeElements = document.querySelectorAll(".eye");
    eyeElements.forEach(function (element) {
      element.style.backgroundColor = "#fff";
    });

    var doredElements = document.querySelectorAll(".dored");
    doredElements.forEach(function (element) {
      element.style.backgroundColor = "#ffbb00";
    });
}
function AddGoggles()
{
    var eyeElements = document.querySelectorAll(".eye");
    eyeElements.forEach(function (element) {
      element.style.backgroundColor = "black"; // Reset to default
    });

    var doredElements = document.querySelectorAll(".dored");
    doredElements.forEach(function (element) {
      element.style.backgroundColor = "black"; // Reset to default
    });
}


