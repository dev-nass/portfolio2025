
const scrollUpBtn = document.querySelector('#scroll-up-btn');

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});