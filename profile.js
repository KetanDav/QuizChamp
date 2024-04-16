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