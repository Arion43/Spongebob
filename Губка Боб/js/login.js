// Обработчик формы авторизации
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Получаем данные из формы
    const username = document.getElementById('username').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
  
    // Сохраняем данные в localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('gender', gender);
    localStorage.setItem('dob', dob);
  
    // Перенаправляем пользователя на страницу профиля
    window.location.href = 'index.html';
  });

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const errorDiv = document.getElementById('error');
  
    // Проверка длины логина
    if (username.length < 4 || username.length > 10) {
      event.preventDefault();
      errorDiv.style.display = 'block';
      errorDiv.textContent = 'Логин должен содержать от 4 до 10 символов.';
    } else {
      errorDiv.style.display = 'none';
    }
  });
  
  