function toggleShelf() {
            const shelf = document.getElementById('shelf');
            shelf.classList.toggle('hidden');
        }

        function toggleTheme() {
    const body = document.getElementById('body');
    const navbar = document.querySelector('[alt="navbar"]');
    const content = document.querySelector('[alt="content"]');
    const cameraBtn = document.querySelector('[alt="camera_button"]');
    const shelf = document.getElementById('shelf');
    const menuSvg = navbar.querySelector('svg');
    const cameraSvg = cameraBtn.querySelector('svg');
    const shelfBorder = shelf.querySelector('.border-b');
    const buttons = shelf.querySelectorAll('button');
    // Add heading selector
    const heading = document.querySelector('h1');

    if (body.classList.contains('bg-[#537d5d]')) {
        // Switch to dark mode
        body.classList.replace('bg-[#537d5d]', 'bg-[#323031]');
        navbar.classList.replace('bg-[#73946b]', 'bg-[#3d3b3c]');
        content.classList.replace('bg-[#73946b]', 'bg-[#3d3b3c]');
        content.classList.replace('border-[#d0cf9f]', 'border-[#c1bdb3]');
        cameraBtn.classList.replace('bg-[#73946b]', 'bg-[#3d3b3c]');
        shelf.classList.replace('bg-[#73946b]', 'bg-[#3d3b3c]');
        
        // Update hover effect for dark mode
        cameraBtn.classList.replace('hover:bg-[#9ebc8a]/90', 'hover:bg-[#4a4748]');
        
        // Update all buttons in shelf
        buttons.forEach(button => {
            if (button.classList.contains('text-[#d0cf9f]')) {
                button.classList.replace('text-[#d0cf9f]', 'text-[#c1bdb3]');
            }
            // Update SVG fill color
            const icon = button.querySelector('svg');
            if (icon) {
                icon.style.fill = '#c1bdb3';
            }
        });
        heading.classList.replace('text-[#d0cf9f]', 'text-[#c1bdb3]');

        menuSvg.setAttribute('fill', '#c1bdb3');
        cameraSvg.setAttribute('fill', '#c1bdb3');
        heading.classList.replace('text-[#d0cf9f]', 'text-[#c1bdb3]');
        if (shelfBorder) {
            shelfBorder.classList.replace('border-[#c1bdb3]/30', 'border-[#c1bdb3]/30');
        }
    } else {
        // Switch to light mode
        body.classList.replace('bg-[#323031]', 'bg-[#537d5d]');
        navbar.classList.replace('bg-[#3d3b3c]', 'bg-[#73946b]');
        content.classList.replace('bg-[#3d3b3c]', 'bg-[#73946b]');
        content.classList.replace('border-[#c1bdb3]', 'border-[#d0cf9f]');
        cameraBtn.classList.replace('bg-[#3d3b3c]', 'bg-[#73946b]');
        shelf.classList.replace('bg-[#3d3b3c]', 'bg-[#73946b]');
        
        // Update hover effect for light mode
        cameraBtn.classList.replace('hover:bg-[#4a4748]', 'hover:bg-[#9ebc8a]/90');
        
        // Update all buttons in shelf
        buttons.forEach(button => {
            if (button.classList.contains('text-[#c1bdb3]')) {
                button.classList.replace('text-[#c1bdb3]', 'text-[#d0cf9f]');
            }
            // Update SVG fill color
            const icon = button.querySelector('svg');
            if (icon) {
                icon.style.fill = '#d0cf9f';
            }
        });
        heading.classList.replace('text-[#c1bdb3]', 'text-[#d0cf9f]');

        menuSvg.setAttribute('fill', '#d0cf9f');
        cameraSvg.setAttribute('fill', '#d0cf9f');
        
        if (shelfBorder) {
            shelfBorder.classList.replace('border-[#d0cf9f]/30', 'border-[#c1bdb3]/30');
        }
    }
}

        function showAbout() {
            alert('Orchidcare - An application to help you identify and care for your orchids.\nVersion 1.0');
            // You can replace this with a more sophisticated about dialog
        }
        