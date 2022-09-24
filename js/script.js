// Site wide variables
var reviews = [
    {
        content: 'This is the fourth time working with them now and we have no complaints. Amazing company with an amazing service.',
        author: 'Sphamandla Nkosi'
    }
    ,
    {
        content: 'The best laminated flooring service in Johannesburg. They gave me the best price and were very quick. 10/10, would definitely recommend.',
        author: 'Michelle DuToit'
    }
    ,
    {
        content: 'Very affordable and professional. I called them to fix our bedroom and I can honestly say that their work is amazing',
        author: 'Calvin D Botha'
    }
]

// Mobile Menu
const openMobileMenuBtn = document.querySelector('#open-menu-btn');
const closeMobileMenuBtn = document.querySelector('#mobile-menu__close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

openMobileMenuBtn.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('mobile-menu_open');
})

closeMobileMenuBtn.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('mobile-menu_open');
})

// Reviews
const reviewContentElement = document.querySelector('.main__reviews__content__review__inner > .paragraph > .paragraph__content');
const reviewAuthorElement = document.querySelector('.main__reviews__content__reviewer__inner > .reviewer-name');

const nextReviewBtn = document.querySelector('#next-review-btn');
const prevReviewBtn = document.querySelector('#previous-review-btn');

const reviewCounterElement = document.querySelector('.main__reviews__content__actions__counter__inner > .current-review');
const numberOfReviewsElement = document.querySelector('.main__reviews__content__actions__counter__inner > .total-number-of-reviews');

let reviewIndex = 1;

//render review counter
const renderReviewCounter = (currentReviewIndex)=>{
    reviewCounterElement.textContent = currentReviewIndex;
    numberOfReviewsElement.textContent = reviews.length
}

//current review
const getReview = (index = 1) => {
    index--;
    return reviews[index];
}

//render current review function
const renderReview = (theReview)=>{
    reviewContentElement.textContent = theReview['content'];
    reviewAuthorElement.textContent = theReview['author'];
}

//enable/disable buttons
const isBtnEnabled=(element)=>{
    if(element.classList.contains('button_icon_clickable')){
        return true;
    }
    else return false;
}

const toggleButtonAbility = (element)=>{
    element.classList.toggle('button_icon_clickable');
}

const enableBtn = (element)=>{
    let buttonIsEnabledAlready = isBtnEnabled(element);
    if(!buttonIsEnabledAlready){
        element.classList.add('button_icon_clickable');
    }
}

const disableBtn = (element)=>{
    let buttonIsEnabled = isBtnEnabled(element);
    if(buttonIsEnabled){
        element.classList.remove('button_icon_clickable');
    }
}

//default render
//this is what is rendered when the page first loads
//the nextReviewBtn will be enabled
enableBtn(nextReviewBtn);
let firstReview = getReview(reviewIndex);
renderReview(firstReview);
renderReviewCounter(reviewIndex);

//When

//When buttons are clicked
nextReviewBtn.addEventListener('click', e=>{
    if(reviewIndex < reviews.length){
        reviewIndex++;
        let theReview = getReview(reviewIndex);
        renderReview(theReview);
        renderReviewCounter(reviewIndex);
        //if this is not the first review, we want to enable the prevReviewBtn
        if(reviewIndex > 1){
            enableBtn(prevReviewBtn);
        }
        //if this is the last review we want to disable the nextReviewBtn
        if(reviewIndex === reviews.length){
            disableBtn(nextReviewBtn);
        }
    }
})

prevReviewBtn.addEventListener('click', e=>{
    if(reviewIndex > 1){
        reviewIndex--;
        let theReview = getReview(reviewIndex);
        renderReview(theReview);
        renderReviewCounter(reviewIndex);
        if(reviewIndex < reviews.length){
            //if this is not the last review
            enableBtn(nextReviewBtn);
        }
        if(reviewIndex === 1){
            //if we are on the first review then we want to disable the prevReviewBtn
            disableBtn(prevReviewBtn);
        }
    }
})