// Custom JavaScript can go here

// Example: Show an alert when a form is submitted
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents form from submitting

            alert('Form submitted successfully!');
            // Here you can add code to handle the form data (e.g., send it to the backend)
        });
    });
});

// Example: Add some interactivity to the list items in the teacher's dashboard
const listItems = document.querySelectorAll('.list-group-item');

listItems.forEach(item => {
    item.addEventListener('click', function() {
        alert('You clicked on ' + item.textContent);
        // Here you could redirect to the query details page or show more information
    });
});
