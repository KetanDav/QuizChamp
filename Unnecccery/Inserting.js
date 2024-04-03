btn1 = document.querySelector(".btn1");
btn2 = document.querySelector(".btn2");
btn3 = document.querySelector(".btn3");
btn4 = document.querySelector(".btn4");
btn5 = document.querySelector(".btn5");
main=document.querySelector(".main")
sample = document.getElementById("sample");
console.log("scriptd loaded");

btn1.addEventListener("click", () => {
    console.log("Btn1 clicked");
    const maxLimit = 5; // Maximum number of cards allowed
    const cards = document.querySelectorAll('.main > div');
    if (cards.length < maxLimit) {
        const div = sample.cloneNode(true);
        div.removeAttribute('id');

        const name = prompt('Please Enter Product Name');
        div.querySelector('#name').innerText = name;

        const description = prompt('Enter Product Description');
        div.querySelector("#discription").innerText = description;

        const price = prompt('Enter Product Price');
        div.querySelector("#price").innerText = price;

        const seller = prompt('Enter Seller Name');
        div.querySelector("#seller").innerText = seller;

        const stock = prompt('Enter Product Stock');
        div.querySelector("#stock").innerText = stock;

        const rating = prompt('Enter Product Rating');
        div.querySelector("#rating").innerText = rating;

        main.append(div);
    } else {
        alert('Maximum Limit Exceeded');
    }
});

btn5.addEventListener("click", () => {
    const cards = document.querySelectorAll('.main > div');
    const productName = prompt('Enter The Product Name');
    cards.forEach(card => {
        const productNameElement = card.querySelector("#name");
        if (productNameElement.innerText === productName) {
            card.remove();
        }
    });
});

// Select the button
const removeLastBtn = document.querySelector('.btn2');

// Add event listener to the button
removeLastBtn.addEventListener('click', () => {
    // Select all cards
    console.log("Btn2 clicked");
    const cards = document.querySelectorAll('.main > div');
    // Check if there are cards
    if (cards.length > 0) {
        // Select the last card
        const lastCard = cards[cards.length - 1];
        // Remove the last card from the DOM
        lastCard.remove();
    } else {
        alert("No cards to remove");
    }
});


btn3.addEventListener( "click",(e)=>{
    divs=document.querySelectorAll( '.main>div' ) ;
    divs.forEach(card => {
        card.remove()
    });
} )
btn4.addEventListener("click",(e)=>{
    nth=prompt('Enter The Number Of card That YOU Want To Delete');
    const cards = document.querySelectorAll('.main > div');
    cards[nth-1].remove();
})

// btn5.addEventListener("click",(e)=>{
//     const cards = document.querySelectorAll('.main > div');
//     Gname=prompt('Enter The Name');
//     cards.forEach(e => {
//         TheName = e.querySelector("#name")
//         if (TheName.innerText==Gname)
//         {
//             e.remove();
//         }
//     });
// })

// const cards = document.querySelectorAll('.main > div');

// // Add event listener to each card
// cards.forEach(card => {
//     card.addEventListener('click', () => {
//         // Remove the clicked card from the DOM
//         card.remove();
//     });
// });

// btn2.addEventListener("click",(e)=>{
//     div = document.createElement("div");
//     main.remove(div)
// })
