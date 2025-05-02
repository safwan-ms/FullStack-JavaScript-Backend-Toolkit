const dataArray = [
    {
        title :"What is JavaScript?",
        detail : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste impedit voluptas inventore sunt! Praesentium temporibus debitis doloribus at porro aspernatur est accusantium delectus a. Quaerat commodi rerum cupiditate quia possimus."
    }, 
     {
        title :"How does JavaScript works?",
        detail : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste impedit voluptas inventore sunt! Praesentium temporibus debitis doloribus at porro aspernatur est accusantium delectus a. Quaerat commodi rerum cupiditate quia possimus."
    },
    {
        title :"Why JavaScript is cool?",
        detail : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste impedit voluptas inventore sunt! Praesentium temporibus debitis doloribus at porro aspernatur est accusantium delectus a. Quaerat commodi rerum cupiditate quia possimus."
    }
];

const makeHTML = data => {
return `<details>
    <summary>${data.title}</summary>
    <p>${data.detail}</p>
</details>`
};

const faqContainer = document.getElementById('faq-container');

faqContainer.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join("");