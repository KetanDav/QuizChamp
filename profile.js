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
    var TtlQuiz=0;
    for(i=0;i<currentUser.solvedQuizz.length;i++)
    {
        TtlQuiz+=currentUser.solvedQuizz[i].quiz.length;
    }
    document.getElementById("solvedQuizz").innerText=TtlQuiz;
    document.getElementById("correcQuiz").innerText=currentUser.correcQuiz;
    console.log()
    if(currentUser.streak==0)
    {
        currentUser.streak+=1;
        document.getElementById("streak").innerText=0 + " Days";
    }
    else{
        document.getElementById("streak").innerText=currentUser.streak + " Days";

    }
    if(currentUser.correcQuiz==0)
    {
        document.getElementById("accuracy").innerText=0 + " %";
    }
    else{
        document.getElementById("accuracy").innerText=((currentUser.correcQuiz/(currentUser.solvedQuizz.length))*100).toFixed(2) + " %";

    }
} else {
    console.log("No currentUser data found in local storage.");
}




setTimeout(()=>{
    var greetingMessage = "Welcome back, " + username + "! We're glad to see you here.";
    // alert(greetingMessage);
},1000)



howWorks = document.querySelector("#howWorks");
        howWorks.addEventListener("click",()=>{
            window.location.href="HowWorks.html";
        })

















        //History Page 


        // Fetch quiz details from local storage
function fetchQuizDetails() {
    return JSON.parse(localStorage.getItem('quizDetails')) || [];
}

// Render quizzes on the current page
function renderQuizzesOnPage(pageNumber, quizzesPerPage, quizDetails) {
    const startIndex = (pageNumber - 1) * quizzesPerPage;
    const endIndex = startIndex + quizzesPerPage;
    const quizzesOnPage = quizDetails.slice(startIndex, endIndex);
    const quizzContainer = document.querySelector('.quizz');
    // quizzContainer.innerHTML = '';
    quizzesOnPage.forEach(quiz => {
        const quizElement = document.createElement('div');
        quizElement.classList.add('quiz');
        quizElement.innerHTML = `
            <h3>${quiz.quizName}</h3>
            <p>Date: ${quiz.date}</p>
            <p>Score: ${quiz.score}</p>
        `;
        quizzContainer.appendChild(quizElement);
    });
}

// Update pagination buttons based on current page and total number of pages
function updatePaginationButtons(currentPage, totalPages) {
    const prevButton = document.querySelector('.bottamIcons .fa-angle-left');
    const nextButton = document.querySelector('.bottamIcons .fa-angle-right');
    prevButton.style.visibility = currentPage === 1 ? 'hidden' : 'visible';
    nextButton.style.visibility = currentPage === totalPages ? 'hidden' : 'visible';
}

// Navigate to previous page
function goToPrevPage() {
    currentPage--;
    renderQuizzesOnPage(currentPage, quizzesPerPage, quizDetails);
    updatePaginationButtons(currentPage, totalPages);
}

// Navigate to next page
function goToNextPage() {
    currentPage++;
    renderQuizzesOnPage(currentPage, quizzesPerPage, quizDetails);
    updatePaginationButtons(currentPage, totalPages);
}

// Initialize the quiz details, current page, and quizzes per page
let quizDetails = fetchQuizDetails();
let currentPage = 1;
const quizzesPerPage = 8;
const totalPages = Math.ceil(quizDetails.length / quizzesPerPage);

// Render initial quizzes on the first page
renderQuizzesOnPage(currentPage, quizzesPerPage, quizDetails);
updatePaginationButtons(currentPage, totalPages);

// Event listeners for pagination buttons
document.querySelector('.bottamIcons .fa-angle-left').addEventListener('click', goToPrevPage);
document.querySelector('.bottamIcons .fa-angle-right').addEventListener('click', goToNextPage);
