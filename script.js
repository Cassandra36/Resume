document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // 1. Initialize Saved Theme Preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    if (themeBtn) themeBtn.textContent = 'Switch to Light Mode';
  } else {
    if (themeBtn) themeBtn.textContent = 'Switch to Dark Mode';
  }

  // 2. Theme Toggle Logic
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      
      const isDark = body.classList.contains('dark-theme');
      themeBtn.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
      
      // Persist user selection
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    });
  }

  // 3. Skill Interactivity
  const skillCards = document.querySelectorAll('.skill-category');
  skillCards.forEach(card => {
    card.addEventListener('click', () => {
      const details = card.getAttribute('data-info');
      if (details) {
        alert("Specific Experience: " + details);
      }
    });
  });

  console.log("Cassandra Harbison's Purple-Themed Portfolio Loaded Successfully.");
});
