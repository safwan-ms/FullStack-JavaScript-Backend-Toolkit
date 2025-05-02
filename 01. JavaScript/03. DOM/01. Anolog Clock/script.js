

setInterval(clock,1000)

function clock(){
    d = new Date();
    hhour = d.getHours();
    hmin = d.getMinutes();
    hsec = d.getSeconds();
    
    secrot = 6 * hsec;
    hourrot = 30 * hhour + hmin/2;
    minrot = 6 * hmin ;
   

    hour.style.transform = `rotate(${hourrot}deg)`
    min.style.transform =  `rotate(${minrot}deg)`
    seco.style.transform = `rotate(${secrot}deg)`
}
clock()