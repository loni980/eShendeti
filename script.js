
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'admin' && password === '1234') {
      window.location.href = 'dashboard.html';
    } else {
      alert('Përdoruesi ose fjalëkalimi është i pasaktë.');
    }
  });
  
  document.getElementById('logoutButton')?.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
  