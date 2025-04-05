function validate() {
    console.log("Validating form...");
    var username = document.getElementById("Username").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var confirmPassword = document.getElementById("Confirm_Password").value;

    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
        alert("All fields are required");
        console.log("Validation failed: All fields are required");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        console.log("Validation failed: Passwords do not match");
        return false;
    }

    console.log("Validation successful");
    return true;
}   


console.log(CONFIG.SERVER_URL+"/signup")
// Store data in database
async function storeData() {
    console.log("Storing data...");
    var username = document.getElementById("Username").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    try {


        var newUserData = {
            username: username,
            email: email,
            password,
            solvedQuizz: [],
            correcQuiz: 0,
            lastQdate: 0,
            streak: 0,
            streakDate: new Date().toLocaleDateString(),
            exp: "",
            loc: "",
            contect: 0,
            bookmark: []
        };
        
        const response = await fetch("https://700ad19f4cb8605946552039d29ebd35.serveo.net/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUserData)
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message || "Signup successful!");
            window.location.href = "login.html"; // Redirect to login
        } else {
            alert(data.error || "Signup failed. Try again.");
        }
    } catch (error) {
        console.error("Signup error:", error);
        alert("Signup failed. Try again.");
    }
}

// Handle form submission
function onSubmitForm(event) {
    event.preventDefault(); // Prevent form from reloading

    console.log("Form submitted");
    if (validate()) {
        storeData(); // This function handles redirection
    }
}

document.forms["myForm"].onsubmit = onSubmitForm;
