document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'admin' && password === 'password') {
            alert('Login successful');
            // Redirect to admin dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid credentials');
        }
    });
});
