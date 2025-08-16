document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navBlock = document.querySelector('.nav-block');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navBlock.classList.toggle('active');
    });

    // Закриття меню при виборі пункту
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navBlock.classList.remove('active');
        });
    });
});