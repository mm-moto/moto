document.addEventListener('DOMContentLoaded', function() {
    // Логіка для бургер-меню
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

    // Логіка для перемикача мови
    const langLinks = document.querySelectorAll('.lang-link');
    const path = window.location.pathname;

    // Визначаємо поточну мову та встановлюємо клас .active
    if (path.includes('/ru/')) {
        document.querySelector('[data-lang="ru"]').classList.add('active');
    } else {
        document.querySelector('[data-lang="uk"]').classList.add('active');
    }

    // Додаємо обробник подій для перемикання мови
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = link.dataset.lang;
            const currentLang = path.includes('/ru/') ? 'ru' : 'uk';
            
            // Заміна папки мови в URL та перенаправлення
            const newPath = path.replace(`/${currentLang}/`, `/${selectedLang}/`);
            window.location.href = newPath;
        });
    });
});