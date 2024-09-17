const ratingBtn = document.querySelector('.rating-btn');

ratingBtn.addEventListener('click' ,(e) => {
    if(e.target.classList.contains('rating')){
       const text = e.target.textContent;
       console.log(text);
       e.target.style.color = 'hsl(216, 12%, 8%)';
       e.target.style.backgroundColor = 'hsl(0, 0%, 100%)';
    }
    // submit(text);
})

function submit(text){
    // console.log(text);
}









document.querySelector('.btn').addEventListener('click', submit)