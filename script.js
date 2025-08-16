document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navBlock = document.querySelector('.nav-block');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Функція для перемикання меню
    function toggleMenu() {
        navBlock.classList.toggle('active');
        burger.classList.toggle('active');
    }

    // Додати обробник подій для кнопки бургер-меню
    burger.addEventListener('click', toggleMenu);

    // Додати обробник подій для посилань у меню, щоб закрити його після кліку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navBlock.classList.remove('active');
            burger.classList.remove('active');
        });
    });
});