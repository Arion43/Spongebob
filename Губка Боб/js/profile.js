// Получаем данные пользователя из localStorage
const username = localStorage.getItem('username');
const gender = localStorage.getItem('gender');
const dob = localStorage.getItem('dob');
const testScore = localStorage.getItem('testScore');

// Заполняем данные на странице профиля
document.getElementById('profileUsername').textContent = username ? username : 'Не задано';
document.getElementById('profileGender').textContent = gender ? (gender === 'male' ? 'Мужской' : 'Женский') : 'Не задано';
document.getElementById('profileDob').textContent = dob ? dob : 'Не задано';
document.getElementById('profileTestScore').textContent = testScore !== null ? `${testScore} баллов` : 'Тест не пройден';

// Обработчик кнопки "Выйти"
document.getElementById('logoutButton').addEventListener('click', function() {
  localStorage.clear();
  window.location.href = 'login.html';
});

// Проверка, есть ли данные пользователя в localStorage
if (!localStorage.getItem('username')) {
  window.location.href = 'login.html';
}
