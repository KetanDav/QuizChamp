const loginBtn = document.querySelector('.login');
const authPopup = document.querySelector('.auth');
const IframePopUp=document.getElementById("logpopup")
$(document).ready(function () {
    // Click event handler for the login link
    $(".login").click(function () {
        // IframePopUp.src="login.html";
        $(".auth").fadeToggle();
        
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
    authPopup.style.transition = 'border-color 0.5s ease-in-out'; // Smooth transition
    authPopup.style.borderColor = getRandomColor(); // Set random color
}

// Call the transitionBorderColor function periodically
setInterval(transitionBorderColor, 500); // Change color every second
