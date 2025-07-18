const question = document.querySelectorAll('.question-read-more')
const buttonImg = document.querySelectorAll('.button img')

question.forEach((element, index) => {
    element.addEventListener('click', () => {
        const readMore = element.nextElementSibling
        readMore.classList.toggle('read-more-visible')
        const button = buttonImg[index];
        const isPlus = button.getAttribute('src').includes('icon-plus.svg')
        setTimeout(() => {
        if(isPlus){
            button.setAttribute('src', 'faq-accordion-main/assets/images/icon-minus.svg')
        }else {
            button.setAttribute('src', 'faq-accordion-main/assets/images/icon-plus.svg')
        }
        }, 200)
    })
});
