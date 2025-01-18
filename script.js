// Select the toggle button
const toggleButton = document.getElementById('theme-toggle');

// Add an event listener for the button
toggleButton.addEventListener('click', () => {
  // Check the current theme
  const currentTheme = document.body.getAttribute('data-theme');
  
  // Toggle between 'light' and 'dark'
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Apply the new theme
  document.body.setAttribute('data-theme', newTheme);

  // Optional: Save the theme preference to localStorage
  localStorage.setItem('theme', newTheme);
});

// Optional: Apply the saved theme when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
});
