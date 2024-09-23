const ratingBtn = document.querySelector('.rating-btn');
// variable to store selected rating . 
let selectedRating;
// variable to track selected element. 
let selectedElement;




function rating(e) {
    if(e.target.classList.contains('rating')){

        // reset the style of previously selected button if any
        if(selectedElement){
            selectedElement.style.color = '';
            selectedElement.style.backgroundColor = '';
        }
        // const allRatings = document.querySelectorAll('.rating');

        // allRatings.forEach(btn => {
        //     btn.style.color = '';
        //     btn.style.backgroundColor = '';
        // })
    }


    e.target.style.color = 'hsl(216, 12%, 8%)';
    e.target.style.backgroundColor = 'hsl(0, 0%, 100%)';
    selectedRating = e.target.textContent;
    selectedElement = e.target
}

function submit(){
    if(selectedRating){
       
        document.querySelector('.selected-rating').textContent = selectedRating;
        
        if(selectedElement){
            selectedElement.style.backgroundColor = '';
            selectedElement.style.color = '';

        }

    }
}








ratingBtn.addEventListener('click' , rating);

document.querySelector('.btn').addEventListener('click', submit)