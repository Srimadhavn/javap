const users = [
    { username: 'maddy', password: 'maddy', role: 'student' },
    { username: 'raamiz', password: 'raamiz', role: 'teacher' }
];

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                localStorage.setItem('studentName', username); 
                if (user.role === 'student') {
                    window.location.href = 'student-dashboard.html';
                } else {
                    window.location.href = 'teachers-dashboard.html'; 
                }
            } else {
                alert('Invalid username or password');
            }
        });
    }
});
