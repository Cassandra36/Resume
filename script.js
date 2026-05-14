document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeBtn.textContent = body.classList.contains('dark-theme') 
            ? 'Switch to Light Mode' 
            : 'Switch to Dark Mode';
    });

    // 2. Skill Interactivity
    const skillCards = document.querySelectorAll('.skill-category');
    
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const details = card.getAttribute('data-info');
            alert("Specific Experience: " + details);
        });
    });

    console.log("Cassandra Harbison's Portfolio Loaded Successfully.");
});