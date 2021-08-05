// Fixed header

const header = document.querySelector('#nav');

const scrollPos = window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;

    if (scrollPos > 100) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

// Click link

const navLink = document.querySelectorAll('.nav-link');


for (let link of navLink) {
    link.addEventListener('click', () => {
        
        
        console.log(link.text);
    });
}








    


