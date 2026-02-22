// Элементы
const nameEl = document.querySelector('.name');
const cursesTitle = document.querySelector('.curses-text');
const courseCards = document.querySelectorAll('.course-card');
const copyBtn = document.getElementById('copy-email');
const emailSpan = document.getElementById('email-address');
const copyMessage = document.getElementById('copy-message');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 1. Клик по имени меняет цвет
nameEl.addEventListener('click', function () {
    nameEl.style.color = nameEl.style.color === 'red' ? '' : 'red';
});

// 2. Пасхалка: клик на "Курсы" перекрашивает все карточки в случайные цвета
cursesTitle.addEventListener('click', function () {
    courseCards.forEach(card => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        card.style.backgroundColor = randomColor;
        card.style.color = '#fff';
    });
});

// 3. Копирование email
copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(emailSpan.textContent).then(() => {
        copyMessage.classList.remove('hidden');
        copyBtn.textContent = '✅ Скопировано!';
        setTimeout(() => {
            copyMessage.classList.add('hidden');
            copyBtn.textContent = '📋 Копировать';
        }, 2000);
    });
});

// 4. Переключение темы
themeToggle.addEventListener('click', function () {
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        themeToggle.innerHTML = '☀️ Светлая тема';
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        themeToggle.innerHTML = '🌙 Тёмная тема';
    }
});

// Дополнительно: при наведении на карточку убираем случайный цвет (если был)
courseCards.forEach(card => {
    card.addEventListener('mouseleave', function () {
        card.style.backgroundColor = '';
        card.style.color = '';
    });
});