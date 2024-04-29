sQuiz = document.querySelector(".quiz");
sHistory = document.querySelector(".history");
sBookmark = document.querySelector(".bookmark");
sContect = document.querySelector("#contectUs");
var infoEdit = document.querySelector('.infoEdit');
sQuiz.addEventListener("click",()=>{
    window.location.href = "Quiz.html";
})
sHistory.addEventListener("click",()=>{
    infoEdit.style.display = 'none';
    document.querySelector(".profile").style.display ="none";
    document.querySelector(".historyPage").style.display = "flex";
})

sContect.addEventListener("click",()=>{
    window.location.href = "contect.html";
})


let currentUserData = localStorage.getItem("currentUser");

// Check if currentUserData exists
if (currentUserData) {
    // Parse the currentUserData JSON string back into a JavaScript object
    var currentUser = JSON.parse(currentUserData);

    var editBtn = document.querySelector('.edit');
    editBtn.addEventListener('click', function() {
        var infoEdit = document.querySelector('.infoEdit');
        infoEdit.style.display = 'flex';
    });

    // Event listener for the save button
    var saveBtn = document.getElementById('save');
    saveBtn.addEventListener('click', function() {
        var urexpInput = document.getElementById('urexp');
        var urlocInput = document.getElementById('urloc');
        var urnumberInput = document.getElementById('urnumber');
        
        // Update currentUser data with new values
        currentUser.exp = urexpInput.value.trim();
        currentUser.loc = urlocInput.value.trim();
        currentUser.contect = urnumberInput.value.trim();

        // Save updated data to local storage
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        // Hide the infoEdit section
        
        infoEdit.style.display = 'none';
        location.reload();
    });
    currentUserData = localStorage.getItem("currentUser");
    currentUser = JSON.parse(currentUserData);
    // Access the username property of the currentUser object
    var username = currentUser.username;
    document.querySelector(".expProfile").innerText=currentUser.exp===null?"---":currentUser.exp;
    document.querySelector(".locProfile").innerText=currentUser.loc;
    document.querySelector(".contectProfile").innerText=currentUser.contect;
    // Display the username in the profile page
    var usernameElements = document.querySelectorAll(".username, .pName");
    usernameElements.forEach(function(element) {
        element.textContent = username;
    });
    var TtlQuiz = 0;
    for (i = 0; i < currentUser.solvedQuizz.length; i++) {
        TtlQuiz += currentUser.solvedQuizz[i].quiz.length;
    }
    document.getElementById("solvedQuizz").innerText = TtlQuiz;
    document.getElementById("correcQuiz").innerText = currentUser.correcQuiz;

    document.getElementById("streak").innerText = currentUser.streak + " Days";
    // if (currentUser.streak == 0) {
    //     currentUser.streak += 1;
    //     document.getElementById("streak").innerText = 0 + " Days";
    // } else {
        
    // }

    if (currentUser.correcQuiz == 0) {
        document.getElementById("accuracy").innerText = 0 + " %";
    } else {
        document.getElementById("accuracy").innerText = ((currentUser.correcQuiz / (TtlQuiz)) * 100).toFixed(2) + " %";
    }

    // Event listener for the edit button
    

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


        var SampleQuiz = document.getElementById("sample");
        var back2Hpme = document.querySelector(".backArrow");
        back2Hpme.addEventListener("click",()=>{
            document.querySelector(".profile").style.display ="block";
    document.querySelector(".historyPage").style.display = "none";
    document.querySelector(".bookmarkPage").style.display = "none";
        })
        // Fetch quiz details from local storage
function fetchQuizDetails() {
    return JSON.parse(localStorage.getItem('quizDetails')) || [];
}

// Render quizzes on the current page
function renderQuizzesOnPage(pageNumber, quizzesPerPage, quizDetails) {
    const startIndex = (pageNumber - 1) * quizzesPerPage;
    const endIndex = startIndex + quizzesPerPage;
    const quizzesOnPage = quizDetails.slice(startIndex, endIndex);
    const quizzContainer = document.querySelector('.QuizHistoryTableBody');
    quizzContainer.innerHTML = '';
    quizzesOnPage.forEach(quiz => {
        let quizElement = SampleQuiz.cloneNode(true);
        quizElement.removeAttribute("id");
        quizElement.querySelector(".sessionName").innerText=quiz.sessionName;
        quizElement.querySelector(".categoryHistory").innerText=quiz.category;
        quizElement.querySelector(".dateHistory").innerText=quiz.date;
        quizElement.querySelector(".correctHistory").innerText=quiz.correctAns;
        quizElement.querySelector(".accuracyHistory").innerText=quiz.accuracy + "%";
        quizzContainer.append(quizElement);
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
let quizDetails = currentUser.solvedQuizz;
let currentPage = 1;
const quizzesPerPage = 3;
const totalPages = Math.ceil(quizDetails.length / quizzesPerPage);

// Render initial quizzes on the first page
renderQuizzesOnPage(currentPage, quizzesPerPage, quizDetails);
updatePaginationButtons(currentPage, totalPages);


// Event listeners for pagination buttons

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 37 || event.key === "ArrowLeft") {
        // Check if we're not already on the first page
        if (currentPage > 1) {
            goToPrevPage();
        }
    } else if (event.keyCode === 39 || event.key === "ArrowRight") {
        // Check if we're not already on the last page
        if (currentPage < totalPages) {
            goToNextPage();
        }
    }
});
document.querySelector('.bottamIcons .fa-angle-left').addEventListener('click', goToPrevPage);
document.querySelector('.bottamIcons .fa-angle-right').addEventListener('click', goToNextPage);



























var back2Hpme = document.querySelector(".backArrow2");
        back2Hpme.addEventListener("click",()=>{
            document.querySelector(".profile").style.display ="block";
    document.querySelector(".historyPage").style.display = "none";
    document.querySelector(".bookmarkPage").style.display = "none";
        })
console.log(currentUser.bookmark);

// Function to switch to the profile page
function showProfilePage() {
    document.querySelector('.profile').style.display = 'block';
    document.querySelector('.historyPage').style.display = 'none';
    document.querySelector('.bookmarkPage').style.display = 'none';
}

// Function to switch to the history page
function showHistoryPage() {
    document.querySelector('.profile').style.display = 'none';
    document.querySelector('.historyPage').style.display = 'block';
    document.querySelector('.bookmarkPage').style.display = 'none';
}

// Function to switch to the bookmark page
function showBookmarkPage() {
    document.querySelector('.profile').style.display = 'none';
    document.querySelector('.historyPage').style.display = 'none';
    document.querySelector('.bookmarkPage').style.display = 'block';

    var bookmarks = currentUser.bookmark;

    // Reference to the sample bookmark element
    var sampleBookmark = document.getElementById("sampleBook");

    var bookmarksContainer = document.querySelector('.bookmarks');

    bookmarksContainer.innerHTML = '';

    // Loop through each bookmark and display it
    bookmarks.forEach(function(bookmark) {
        // Clone the sample bookmark element
        var bookmarkElement = sampleBookmark.cloneNode(true);
        bookmarkElement.removeAttribute("id"); // Remove the ID to prevent duplication

        // Update the bookmark element with bookmark data
        bookmarkElement.querySelector(".Question").innerText = bookmark.question;
        bookmarkElement.querySelector(".op1").innerText=bookmark.incorrect_answers[0]
        bookmarkElement.querySelector(".op2").innerText=bookmark.incorrect_answers[1]
        bookmarkElement.querySelector(".op3").innerText=bookmark.incorrect_answers[2]
        bookmarkElement.querySelector(".correctOp").innerText=bookmark.correct_answer;
        // Append the bookmark element to the bookmarks container
        bookmarksContainer.append(bookmarkElement);
    });

    const bookmarkItems = document.querySelectorAll('.bookmarkPage .bookmarks > .sampleBook');
    const prevPageBtn = document.getElementById('prv');
    const nextPageBtn = document.getElementById('nxt');
    const currentPage = document.getElementById('crnt');
    const pageSize = 5; // Number of bookmarks per page
    let currentPageNumber = 1;

    // Function to display bookmarks based on current page
    function displayBookmarks() {
        const startIndex = (currentPageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        bookmarkItems.forEach((bookmark, index) => {
            if (index >= startIndex && index < endIndex) {
                bookmark.style.display = 'block';
            } else {
                bookmark.style.display = 'none';
            }
        });
        currentPage.textContent = currentPageNumber;
    }

    // Function to update pagination
    function updatePagination() {
        const totalPages = Math.ceil(bookmarkItems.length / pageSize);
        if (currentPageNumber === 1) {
            prevPageBtn.style.visibility = 'hidden';
        } else {
            prevPageBtn.style.visibility = 'visible';
        }
        if (currentPageNumber === totalPages) {
            nextPageBtn.style.visibility = 'hidden';
        } else {
            nextPageBtn.style.visibility = 'visible';
        }
    }

    // Event listener for previous page button
    prevPageBtn.addEventListener('click', function() {
        if (currentPageNumber > 1) {
            currentPageNumber--;
            displayBookmarks();
            updatePagination();
        }
    });

    // Event listener for next page button
    nextPageBtn.addEventListener('click', function() {
        const totalPages = Math.ceil(bookmarkItems.length / pageSize);
        if (currentPageNumber < totalPages) {
            currentPageNumber++;
            displayBookmarks();
            updatePagination();
        }
    });

    // Initial display
    displayBookmarks();
    updatePagination();
}

// Event listeners for navigation
document.getElementById('howWorks').addEventListener('click', showProfilePage);
document.getElementById('contectUs').addEventListener('click', showHistoryPage);
document.querySelector('.bookmark').addEventListener('click', showBookmarkPage);
