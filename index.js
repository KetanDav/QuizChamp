
const loginBtn = document.querySelector('.login');
const startBtn = document.querySelector('.start');
const authPopup = document.querySelector('.auth');
var dataaa;
const IframePopUp=document.getElementById("logpopup")
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
    authPopup.style.transition = 'border-color 0.5s ease-in-out'; // Smooth transition
    authPopup.style.borderColor = getRandomColor(); // Set random color
}

// Call the transitionBorderColor function periodically
setInterval(transitionBorderColor, 500); // Change color every second




<<<<<<< HEAD
=======













        // Click event handler for the login link
        

        // Function to handle login button click event within the iframe
        // async function handleLogin() {
        //     // Access the document inside the iframe
        //     const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        //     // Find the username and password input fields inside the iframe document
        //     const usernameInput = iframeDocument.getElementById('name');
        //     const passwordInput = iframeDocument.getElementById('pass');

        //     // Retrieve the values of the username and password inputs
        //     const username = usernameInput.value;
        //     const password = passwordInput.value;
        //     storedData =await retrieveData();



        //     // function blockFor(ms) {
        //     //     const start = Date.now();
        //     //     while (Date.now() - start < ms) {} // Busy-wait loop
        //     // }
            
        //     // console.log("Start");
        //     // blockFor(2000); // Blocks for 2 seconds
        //     // console.log("End"); // This runs after 2 seconds




        //     console.log(storedData);
        //     console.log("After Data lg")
        //     // Retrieve stored data from local storage
        //     // var storedData = localStorage.getItem('userData');
        
        //     // If no data is stored, return false
        //     if (!storedData) {
        //         alert("No user data found. Please sign up first.");
        //         return false;
        //     }
        //     // Parse the stored JSON string back to a JavaScript object
        //     var userData = storedData;
        
        //     // Check if the provided username and password match any existing data
        //     for (var i = 0; i < userData.length; i++) {
        //         if (userData[i].username === username && userData[i].password === password) {
        //             var cUserData = {
        //                 username: username,
        //                 password: password,
        //                 email:userData[i].email,
        //                 solvedQuizz:userData[i].solvedQuizz,
        //                 correcQuiz:userData[i].correcQuiz,
        //                 lastQdate:userData[i].lastQdate,
        //                 streak:userData[i].streak,
        //                 streakDate:userData[i].streakDate,
        //                 exp:userData[i].exp,
        //                 loc:userData[i].loc,
        //                 contect:userData[i].contect,
        //                 bookmark:[]
        //             };
        //             localStorage.setItem("currentUser", JSON.stringify(cUserData));
        //             alert("Login successful!");
        //         // Redirect to dashboard or home page
        //             window.location.href = "profile.html";
        //             return true;
        //         }
        //     }
        
        //     alert("Invalid username or password. Please try again.");
        //     return false; // Credentials are invalid
        // }
>>>>>>> db654861310882d03ea7c9dbd7142a8793faee28
        async function handleLogin() {
            // Access the document inside the iframe
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

            // Find the username and password input fields inside the iframe document
            const usernameInput = iframeDocument.getElementById('name');
            const passwordInput = iframeDocument.getElementById('pass');

            // Retrieve the values of the username and password inputs
            const username = usernameInput.value;
            const password = passwordInput.value;
            try {
                const response = await fetch(CONFIG.SERVER_URL+"/login", {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password })
                });
    
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







        const iframe = document.getElementById('logpopup');
        iframe.onload = function() {
            // Access the document inside the iframe
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

            // Find the login button inside the iframe document
            const loginButton = iframeDocument.getElementById('loginBtn');

            // Attach an event listener to the login button
            loginButton.addEventListener('click', handleLogin);
        };