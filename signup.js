function validate() {
    console.log("Validating form...");
    var username = document.getElementById("Username").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var confirmPassword = document.getElementById("Confirm_Password").value;

    if (username.trim() == "" || email.trim() == "" || password.trim() == "" || confirmPassword.trim() == "") {
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

// Function to store data in local storage
// Function to store data in local storage
function storeData() {
    console.log("Storing data...");
    var username = document.getElementById("Username").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    var storedData = localStorage.getItem('userData');
    var userData = storedData ? JSON.parse(storedData) : [];
    var currentDate = new Date().toLocaleDateString();

    var newUserData = {
        username: username,
        email: email,
        password: password ,
        solvedQuizz:[],
        correcQuiz:0,
        lastQdate:0,
        streak:0,
        streakDate:currentDate,
        exp:0,
        loc:0,
        contect:0,
        bookmark:[]
    };

    userData.push(newUserData);

    var updatedUserDataJSON = JSON.stringify(userData);

    // Store the updated user data in local storage
    localStorage.setItem('userData', updatedUserDataJSON);

    console.log("Data stored successfully:", newUserData);
}


// Function to be called on form submission
function onSubmitForm() {
    console.log("Form submitted");
    if (validate()) {
        storeData();
        console.log("Redirecting to login page...");
        window.location.href = "login.html";
    }
    return false;
}

document.forms["myForm"].onsubmit = onSubmitForm;
