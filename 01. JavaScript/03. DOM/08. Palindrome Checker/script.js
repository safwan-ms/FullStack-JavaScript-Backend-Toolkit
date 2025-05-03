const input = document.getElementById("inpu")

function reverseString(str){
    return str.split("").reverse().join("");

}

function check(){
    value = input.value.toUpperCase();
    
    reverse = reverseString(value);

   if(value === reverse){
    alert("P A L I N D R O M E !!!")
   }    
    else{
        alert("Not TOday!!")
    }
}
