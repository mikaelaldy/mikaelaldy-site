// Add this to your HTML <body>
// <button id="darkModeToggle">Toggle Dark Mode</button>

document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});
