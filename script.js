const removeMainClass = document.querySelector('.main')
const removeHiddenClass = document.querySelector('.main-for-feedback')
const numberButton = document.querySelectorAll('.number-button')
const submitBtn = document.querySelector('.submit-button')
const rateAgainBtn = document.querySelector('.rate-again-button')
const rateNumber = document.querySelector('#span-id')

submitBtn.addEventListener('click', () => {
    removeHiddenClass.classList.remove('hidden')
    removeMainClass.style.display = 'none'
})

rateAgainBtn.addEventListener('click', () => {
    removeHiddenClass.classList.add('hidden')
    removeMainClass.style.display = 'flex'
})

numberButton.forEach((element) => {
    element.addEventListener('click', () => {
        rateNumber.innerHTML = element.innerHTML
    })
});




