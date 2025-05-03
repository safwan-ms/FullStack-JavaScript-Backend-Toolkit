// 

// const navLinks = navElement.querySelectorAll('a');
// const sectionElement = document.querySelectorAll('section')

// function removeActiveLink()
// {
//     navLinks.forEach(link => link.parentElement.classList.remove("active"));

// }

// function addHiddenClass() {
//     sectionElement.forEach(section => section.classList.add("hidden"));
// }


// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         addHiddenClass();
//         removeActiveLink();
//         link.parentElement.classList.add('active');
//        const sectionElements = document.querySelector(link.hash);
//         sectionElements.classList.remove('hidden');

//     })
// });

const navElement = document.querySelector('nav');
const navLink = navElement.querySelectorAll('a');
const sectionElement = document.querySelectorAll('section');

function removeActiveLink(){
    navLink.forEach(link => link.parentElement.classList.remove('active'));
};

function addHiddenClass(){
    sectionElement.forEach(section => section.classList.add('hidden'));
};

navLink.forEach(link =>{
  
    link.addEventListener('click',() =>{
        addHiddenClass();
        removeActiveLink();
        link.parentElement.classList.add('active');
        const sectionItem = document.querySelector(link.hash);
        sectionItem.classList.remove('hidden');
    });
});
