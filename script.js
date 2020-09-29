document.addEventListener('DOMContentLoaded', () => {
    // Getting elements I need form html
    const menuButton = document.getElementById('menu-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const passwordIcon = document.getElementById('password-icon');
    const passwordInput = document.getElementById('password-input')

    // Simple toggle for dropdown
    const toggleDropdown = () => dropdownMenu.classList.toggle('show');

    // Handling clicks that occur outside of the dropdown menu while it's active
    const handleOutsideClick = (e) => {
        if (e.target !== dropdownMenu   && 
            e.target !== menuButton     && 
            e.target.parentElement.parentElement !== dropdownMenu) {
            toggleDropdown();

            // Removing event listener for cleanup
            document.removeEventListener('click', handleOutsideClick);
        }
    }

    // Setting up event listeners for dropdown
    const initDropdown = () => {
        toggleDropdown();
        document.addEventListener('click', handleOutsideClick);
    }

    // Password visibility toggle
    const toggleVisibility = () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    } 

    // Adding our event listeners
    menuButton.addEventListener('click', initDropdown);
    passwordIcon.addEventListener('click', toggleVisibility);
})