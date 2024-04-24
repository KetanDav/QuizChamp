sQuiz = document.querySelector(".quiz");
sHistory = document.querySelector(".history");
sBookmark = document.querySelector(".bookmark");

sQuiz.addEventListener("click",()=>{
    window.location.href = "Quiz.html";
})
sHistory.addEventListener("click",()=>{
    window.location.href = "History.html";
})
sBookmark.addEventListener("click",()=>{
    window.location.href = "Bookmark.html";
})


// Retrieve the currentUser data from local storage
var currentUserData = localStorage.getItem("currentUser");

// Check if currentUserData exists
if (currentUserData) {
    // Parse the currentUserData JSON string back into a JavaScript object
    var currentUser = JSON.parse(currentUserData);
    
    // Access the username property of the currentUser object
    var username = currentUser.username;
    
    // Display the username in the profile page
    var usernameElements = document.querySelectorAll(".username, .pName");
    usernameElements.forEach(function(element) {
        element.textContent = username;
    });
    document.getElementById("solvedQuizz").innerText=currentUser.solvedQuizz.length;
    document.getElementById("correcQuiz").innerText=currentUser.correcQuiz;
    if(currentUser.correcQuiz==0)
    {
        document.getElementById("accuracy").innerText=0;
    }
    else{
        document.getElementById("accuracy").innerText=(currentUser.correcQuiz/currentUser.solvedQuizz)*100;
    }
} else {
    console.log("No currentUser data found in local storage.");
}




setTimeout(()=>{
    var greetingMessage = "Welcome back, " + username + "! We're glad to see you here.";
    alert(greetingMessage);
},1000)



howWorks = document.querySelector("#howWorks");
        howWorks.addEventListener("click",()=>{
            window.location.href="HowWorks.html";
        })