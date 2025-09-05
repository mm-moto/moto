document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navBlock = document.querySelector('.nav-block');
    const body = document.body;

    if (burger && navBlock) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            navBlock.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });

        // Додаємо обробник, щоб меню закривалося при натисканні на посилання
        const navLinks = document.querySelectorAll('.nav-links li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navBlock.classList.contains('active')) {
                    burger.classList.remove('active');
                    navBlock.classList.remove('active');
                    body.classList.remove('no-scroll');
                }
            });
        });
    }
});