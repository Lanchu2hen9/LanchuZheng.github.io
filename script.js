document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); // Prevent default link behaviour
        const dropdownMenu = item.nextElementSibling;
        dropdownMenu.style.display = 
            dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});