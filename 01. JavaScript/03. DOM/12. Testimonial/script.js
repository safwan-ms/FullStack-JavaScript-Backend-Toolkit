const testimonial = [
{
    author :{
        name: 'GarielMoore',
        image :'p.jpg',
    },
    text :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque eius natus id ratione dolores, dolorem libero mollitia aspernatur cupiditate ullam nulla placeat rem suscipit at, repudiandae eum fuga dicta.',
    date : '23rd May',
},
{
    author :{
        name: 'Dwanye Johnson',
        image :'profile-03.jpg',
    },
    text :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque eius natus id ratione dolores, dolorem libero mollitia aspernatur cupiditate ullam nulla placeat rem suscipit at, repudiandae eum fuga dicta.',
    date : '23rd May',
},{
    author :{
        name: 'Alex Xavier',
        image :'profile-01.jpg',
    },
    text :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque eius natus id ratione dolores, dolorem libero mollitia aspernatur cupiditate ullam nulla placeat rem suscipit at, repudiandae eum fuga dicta.',
    date : '23rd May',
},{
    author :{
        name: 'John David',
        image :'profile-02.jpg',
    },
    text :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque eius natus id ratione dolores, dolorem libero mollitia aspernatur cupiditate ullam nulla placeat rem suscipit at, repudiandae eum fuga dicta.',
    date : '23rd May',
}
];


const makeTestimonialCard = testimonial => {
    return `<div class="container">
     <img src="${testimonial.author.image}">
     <h2>${testimonial.author.name}</h2>
    <p>${testimonial.text}</p>
    <date>Written on ${testimonial.date}</date>
</div>`
}
const containerTestimonial =document.getElementById('tesimonials');
let currentTestimonial = 2;
function nextTestimonial()
{
    if(currentTestimonial < testimonial.length - 1){
    currentTestimonial += 1;
    updatePage();
}
}
function prevTestimonial()
{
    if(currentTestimonial > 0){
    currentTestimonial -= 1;
    updatePage();
}
}

function updatePage(){
    makeUp = makeTestimonialCard(testimonial[currentTestimonial]);
 
    makeUp += `<nav>
    <button onclick="prevTestimonial()">Previous</button>
    <button onclick="nextTestimonial()">Next</button>
</nav>`
     containerTestimonial.innerHTML = makeUp;
}
updatePage();
 
