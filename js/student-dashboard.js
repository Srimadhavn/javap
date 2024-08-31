const queries = [
    { subject: 'Math', query_text: 'Why numerical methods? :(' },
    { subject: 'Data structures', query_text: 'What are doubly linked lists?' }
];

document.addEventListener('DOMContentLoaded', function() {
    const studentName = localStorage.getItem('studentName');
    
    if (!studentName) {
        console.log('No student name found in localStorage. Redirecting to login.');
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('student-name').textContent = studentName;

    loadQueries();

    const queryForm = document.getElementById('queryForm');
    if (queryForm) {
        queryForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const subject = document.getElementById('subject').value;
            const queryText = document.getElementById('query').value;

            if (subject && queryText) {
                try {
                    queries.push({ subject, query_text: queryText });
                    loadQueries();
                    queryForm.reset();
                    alert('Query submitted successfully!');
                } catch (error) {
                    console.error('Error:', error);
                    alert('An error occurred while submitting the query.');
                }
            } else {
                alert('Please fill in both subject and query.');
            }
        });
    } else {
        console.error('Query form not found!');
    }
});

function loadQueries() {
    const studentName = localStorage.getItem('studentName');
    if (!studentName) {
        console.log('No student name found in localStorage during query load. Redirecting to login.');
        window.location.href = 'login.html';
        return;
    }

    try {
        const queriesList = document.getElementById('queries-list');
        if (!queriesList) {
            console.error('Queries list element not found!');
            return;
        }

        queriesList.innerHTML = '';

        queries.forEach(query => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${query.subject}: ${query.query_text}`;
            queriesList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error while loading queries:', error);
        alert('An error occurred while loading queries.');
    }
}
