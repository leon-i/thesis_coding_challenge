document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const passwordIcon = document.getElementById('password-icon');
    const passwordInput = document.getElementById('password-input')

    const toggleDropdown = () => dropdownMenu.classList.toggle('show');

    const handleOutsideClick = (e) => {
        if (e.target !== dropdownMenu   && 
            e.target !== menuButton     && 
            e.target.parentElement.parentElement !== dropdownMenu) {
            toggleDropdown();
            document.removeEventListener('click', handleOutsideClick);
        }
    }

    const initDropdown = () => {
        toggleDropdown();
        document.addEventListener('click', handleOutsideClick);
    }

    const toggleVisibility = () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    } 

    menuButton.addEventListener('click', initDropdown);

    passwordIcon.addEventListener('click', toggleVisibility);
})