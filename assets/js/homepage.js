
// Toggle button functionality for mobile view
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    const navUl = document.querySelector('#headernav ul');

    toggleButton.addEventListener('click', () => {
        navUl.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

        document.getElementById('toggleButton').addEventListener('click', function() {
            var nav = document.querySelector('#headernav ul');
            nav.classList.toggle('show');
        });

    let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});


