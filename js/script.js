document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            alert('Form submitted successfully!');
            
        });
    });
});

const listItems = document.querySelectorAll('.list-group-item');

listItems.forEach(item => {
    item.addEventListener('click', function() {
        alert('You clicked on ' + item.textContent);
        
    });
});
