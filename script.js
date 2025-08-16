/* ==================== 1. Базові стилі та підключення шрифтів ==================== */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Tektur:wght@400;900&display=swap');

html {
    box-sizing: border-box;
    font-size: 120%;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background: #000;
    color: #fff;
}

/* ==================== 2. Загальні елементи ==================== */
.container {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Tektur', sans-serif;
    font-weight: 900;
    margin: 0;
    color: #fff;
}

p {
    margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
}

/* ==================== 3. Хедер ==================== */
header {
    height: 85px;
    background: #000;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

header .header_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

/* Логотип */
.header_logo img {
    height: 49.4px;
    width: auto;
}

/* Навігація */
.nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    padding-left: 25px;
    gap: 25px;
}

.nav-links li {
    padding-left: 0;
}

.nav-links a {
    font-family: 'Tektur', sans-serif;
    font-weight: 400;
    color: #fff;
    font-size: 1.1rem;
    white-space: nowrap;
    transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a:focus {
    color: #f67828;
}

/* Контактна інформація та кнопка */
.contact-info {
    display: flex;
    align-items: center;
    gap: 20px;
}

.contact-info .phone-number {
    font-family: 'Tektur', sans-serif;
    font-weight: 400;
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
    white-space: nowrap;
}

.cta-button,
.hero-cta-button,
.all-services-button,
.all-projects-button,
.contact-form button {
    font-family: 'Tektur', sans-serif;
    background: #f67828;
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 400;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1rem;
    white-space: nowrap;
}

.cta-button:hover,
.hero-cta-button:hover,
.all-services-button:hover,
.all-projects-button:hover,
.contact-form button:hover {
    background: #ff9147;
    box-shadow: 3px 9px 8px rgba(246, 120, 40, 0.5);
}

/* Бургер-меню */
.burger {
    display: none;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
    transition: 0.4s;
}

.nav-block,
.contact-info {
    display: flex;
}

/* ==================== 4. Основні секції ==================== */
main {
    padding-top: 85px;
}

.section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.25rem;
    color: #fff;
}

/* Секція Hero */
.hero {
    background-image: url('img/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-color: #2c3e50;
    color: #fff;
    text-align: center;
    padding: 180px 0 100px;
}

.hero-title {
    font-size: 2.5rem;
}

.hero-subtitle {
    font-size: 1.1rem;
}

/* Секція "Про нас" (з іконками) */
.about .features-grid,
.services .service-list,
.contacts .contact-grid {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.feature-item,
.service-item,
.contact-info-block {
    text-align: center;
}

.feature-item h3,
.contact-info-block p {
    color: #fff;
}

.feature-item p {
    color: #ccc;
    font-size: 0.9rem;
}

.service-list {
    list-style: none;
    padding: 0;
}

.service-list li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #ccc;
    font-size: 1rem;
}

.service-list li i {
    margin-right: 10px;
    color: #f67828;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-form input,
.contact-form textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #222;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
}

.contact-form textarea {
    resize: vertical;
}

/* Кнопки "Всі послуги/проекти" */
.all-services-button,
.all-projects-button {
    display: block;
    margin: 50px auto 0;
}

/* Контактна секція */
.contacts {
    background-color: #000;
    color: #fff;
    padding: 80px 0;
}

.contacts .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    color: #ccc;
}

/* ==================== 5. Футер ==================== */
footer {
    background-color: #000;
    color: #fff;
    padding: 40px 0;
    text-align: center;
}

footer .container p {
    font-size: 1rem;
}

/* ==================== Перемикач мови ==================== */
.lang-switcher {
    position: fixed;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    background-color: rgba(44, 62, 80, 0.7);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.lang-link {
    padding: 10px;
    font-family: 'Tektur', sans-serif;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    transition: background-color 0.3s, color 0.3s;
    border-bottom: 1px solid rgba(255,255,255,0.2);
}

.lang-link:last-child {
    border-bottom: none;
}

.lang-link.active {
    background-color: #f67828;
    color: #fff;
    font-weight: bold;
}

.lang-link:hover {
    background-color: #f67828;
    color: #fff;
}

/* ==================== 6. Адаптивність ==================== */
@media (max-width: 1440px) {
    .container {
        max-width: 1250px;
    }
}

@media (max-width: 1220px) {
    .nav-links a {
        font-size: 1rem;
    }
    .contact-info .phone-number,
    .cta-button {
        font-size: 0.9rem;
    }
    .nav-links li {
        padding-left: 15px;
    }
    .header_logo img {
        height: 42px;
    }
}

@media (max-width: 991px) {
    .nav-links,
    .contact-info .phone-number {
        display: none;
    }

    .burger {
        display: block;
    }

    .contact-info {
        gap: 10px;
    }
    
    .cta-button {
        padding: 8px 15px;
        font-size: 0.9rem;
    }

    /* Стилі для мобільного меню */
    .nav-block {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 85px; /* Висота хедера */
        left: -100%;
        width: 100%;
        height: calc(100vh - 85px);
        background-color: #000;
        z-index: 999;
        transition: left 0.3s ease-in-out;
        padding: 20px;
    }

    .nav-block.active {
        left: 0;
    }

    .nav-links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .nav-links li {
        margin: 10px 0;
    }
}