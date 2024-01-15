document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('theme');
    button.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const container = document.querySelector('.container');
        container.classList.toggle('dark');
    });
});