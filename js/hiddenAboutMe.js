
const hiddenContainer = document.querySelector('#hidden-about-me-container');
const hideAndMoreButton = document.querySelector('#hidden-about-me-button');

hideAndMoreButton.addEventListener('click', () => {
    
    hiddenContainer.classList.toggle('hidden');
    hiddenContainer.classList.contains('hidden') ? hideAndMoreButton.textContent = 'READ MORE' : hideAndMoreButton.textContent = 'SHOW LESS';
});