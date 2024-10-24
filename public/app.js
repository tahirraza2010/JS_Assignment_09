var input = document.getElementById("inputField")
function getValue(number){
input.value += number
}
function clrAll(){
    input.value = "" 
}
function dltChat(){
    input.value= input.value.slice(0,-1)
}
function squre(){
    input.value=  input.value * input.value
}
function equal(){

    if(input.value){
        input.value= eval(input.value)
    }
    else{
    input.value= "syntex eror"

    }
}