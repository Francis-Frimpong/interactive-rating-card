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
       
    }


    e.target.style.color = 'hsl(216, 12%, 8%)';
    e.target.style.backgroundColor = 'hsl(0, 0%, 100%)';
    selectedRating = e.target.textContent;
    selectedElement = e.target
}

function submit(){
    if(selectedRating){
       
        document.querySelector('.selected-rating').textContent = selectedRating;
        selectedRating = null;
        //reset style of the selected button if any
        if(selectedElement){
            selectedElement.style.backgroundColor = '';
            var name = 'bj'
            selectedElement.style.color = '';


        }

    } else {
        alert('Please select a rating before submitting.')
    }
}








ratingBtn.addEventListener('click' , rating);

document.querySelector('.btn').addEventListener('click', submit)