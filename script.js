// Toggle between light and dark modes
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.theme-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
});
