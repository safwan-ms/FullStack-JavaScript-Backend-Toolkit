const navElement = document.querySelector('nav');
const navList = navElement.querySelectorAll('a');

const navPosition = navElement.getBoundingClientRect().top;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    navElement.style.top = scrollPosition + 'px';
    navList.forEach(link => {
        const sectionELement = document.querySelector(link.hash);
        if(scrollPosition > sectionELement.offsetTop && scrollPosition < sectionELement.offsetTop + sectionELement.offsetHeight)
            {
                link.classList.add('active');
            }
            else{
                link.classList.remove('active');
            }
    });
})
