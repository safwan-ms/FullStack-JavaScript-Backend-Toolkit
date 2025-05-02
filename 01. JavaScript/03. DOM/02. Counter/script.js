
const counterDisplay = document.getElementById('counterDisplay');
const counterAdd = document.getElementById('counterAdd');
const counterSub = document.getElementById('counterSub');
let total = 0;
const limit = 20;
function updateCounter(){
    
    if(total > limit){
        total = limit;
    }
    if(total < 0){
        total = 0;

    }
    counterDisplay.textContent = total;

    document.body.style.setProperty(
        'background-color',`rgb(${(total / limit )* 255},30 ,0)`
    )
    counterDisplay.textContent = total;

}

function addCounterBtn(){
    total += 1;
    updateCounter()
}

function subCounterBtn(){
    total -= 1;
    updateCounter()
}

updateCounter()