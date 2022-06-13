var form1=document.getElementById("forms1");
var form2=document.getElementById("forms2");
var loginCriar=document.querySelectorAll("h2");
var botao=document.querySelectorAll("button");
var nome=document.getElementById("nome")
// troca dos forms
loginCriar[0].classList.add("borda")
loginCriar[1].addEventListener("click",function(){
    form1.style="display:none;"
    form2.style="display:block;"
    loginCriar[1].classList.add("borda")
    loginCriar[0].classList.remove("borda")
})
loginCriar[0].addEventListener("click",function(){
    form1.style="display:block;"
    form2.style="display:none;"
    loginCriar[0].classList.add("borda")
    loginCriar[1].classList.remove("borda")
})
//eventos de verificação
botao[0].addEventListener("submit",function(e){
    verificadorDeNome();
    function verificadorDeNome(){
        
    }
})