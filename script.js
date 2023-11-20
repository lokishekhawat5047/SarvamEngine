function showSuggestions() {
    var input = document.getElementById('searchInput');
    var suggestionList = document.getElementById('suggestionList');
    var inputValue = input.value.trim();

    // Clear previous suggestions
    suggestionList.innerHTML = '';

    // Show suggestions only if there's a search query
    if (inputValue !== '') {
        // In a real implementation, you would fetch suggestions from a backend
        // For simplicity, let's use a hardcoded array
        var suggestions = ['How to make panneer butter masala', 'Make a presentation on global warming', 'JavaScript', 'Web Development', 'Programming'];

        // Display suggestions
        suggestions.forEach(function (suggestion) {
            var li = document.createElement('li');
            li.textContent = suggestion;
            suggestionList.appendChild(li);
        });
    }
}

function performSearch() {
    var searchInput = document.getElementById('searchInput');
    var query = searchInput.value.trim();

    // In a real implementation, you would redirect to a search results page
    // For simplicity, let's log the query to the console
    console.log('Performing search for:', query);
}

function luckySearch() {
    // In a real implementation, you would redirect to a random search result page
    // For simplicity, let's log a message to the console
    console.log('Feeling lucky!');
}
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    searchInput.focus();
});

// Add this function to simulate voice input (you can replace this with actual voice input logic)
function startVoiceInput() {
    var searchInput = document.getElementById('searchInput');
    searchInput.value = 'Voice input placeholder';
}

// Add this at the end of the script.js file to set focus on search input when the page loads
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    searchInput.focus();
    document.addEventListener('click', function (event) {
        var suggestionList = document.getElementById('suggestionList');
        var searchInput = document.getElementById('searchInput');

        if (event.target !== searchInput && !searchInput.contains(event.target)) {
            // Clicked outside the search input, hide the suggestion list
            suggestionList.style.display = 'none';
        }
    });
document.addEventListener('DOMContentLoaded', function () {
    // Check for user's preference from localStorage or system preferences
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply initial mode
    setTheme(prefersDarkMode ? 'dark' : 'light');

    // Toggle between light and dark mode
    document.getElementById('toggleModeButton').addEventListener('click', function () {
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
});

function setTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme + '-mode');
    localStorage.setItem('theme', theme);
}
});    
