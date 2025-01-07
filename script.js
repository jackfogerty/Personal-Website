// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to set the theme based on preference
function setTheme(theme) {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.getElementById('theme-toggle').textContent = theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme';
}

// Load theme from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
});

// Toggle theme and save preference
document.getElementById('theme-toggle').addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});