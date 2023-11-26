// Select all buttons on the page
const themeButtons = document.querySelectorAll('button[data-theme]');
const defaultTheme = "oceanBreeze";

// Function to set the theme based on the selected button
const setTheme = (theme) => {
  // Find the currently selected button and update its state
  const selectedButton = document.querySelector('[aria-pressed="true"]');
  selectedButton.setAttribute('aria-pressed', 'false');

  // Find the clicked button and update its state
  const button = document.querySelector(`[data-theme="${theme}"]`);
  button.setAttribute('aria-pressed', 'true');

  // Apply the selected theme to the body
  document.body.setAttribute('data-selected-theme', theme);

  // Store the selected theme in local storage
  localStorage.setItem('selectedTheme', theme);
};

// Function to set the initial theme based on local storage or default to 'oceanBreeze'
const setInitialTheme = () => {
  const appliedTheme = localStorage.getItem('selectedTheme');
  appliedTheme ? setTheme(appliedTheme) : setTheme(defaultTheme);
};

// Set the initial theme when the script runs
setInitialTheme();

// Add click event listeners to all theme buttons
themeButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const theme = event.target.getAttribute('data-theme');
    setTheme(theme);
  });
});


