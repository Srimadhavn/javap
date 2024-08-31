const usersKey = 'users';

function getUsers() {
    const users = localStorage.getItem(usersKey);
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem(usersKey, JSON.stringify(users));
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;

            if (username && email && password && role) {
                const users = getUsers();
                const userExists = users.some(user => user.username === username || user.email === email);
                
                if (userExists) {
                    alert('User with this username or email already exists.');
                } else {
                    users.push({ username, email, password, role });
                    saveUsers(users);
                    alert('Registration successful!');
                    window.location.href = 'login.html'; // Redirect to login page
                }
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
