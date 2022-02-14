let erN=document.querySelector("#er-na")
let erNu=document.querySelector("#er-num")
let erE=document.querySelector("#er-em")
let erM=document.querySelector("#er-man")
let erB=document.querySelector("#er-bu")
 
document.querySelector("#name").addEventListener("keyup",check,)
    function check(e){
    let name=document.querySelector("#name").value
    if(name.length==""){
        erN.innerHTML='Name is Required'
        erN.style.color="red"
      
        return false
    }
 
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        erN.innerHTML="Write Full Name"
        erN.style.color="red"
         
        return false
    }
   
    erN.innerHTML="Done"
    erN.style.color="Green"
    
    return true
}
 

// let nN=document.querySelector("#name")
// nN.addEventListener("keydown",dis)

// function dis(e){

// }

// function char(e){
//     return e.toUpperCase()!=e.toLowerCase()
// }
document.querySelector("#number").addEventListener("keyup",dis,)
    function dis(e){
   
    let number=document.querySelector("#number").value
    let cou=10
    let s=cou-number.length
    if(s>0){
         erNu.innerHTML=s+" Remaining"
      
        erNu.style.color="red"
    
        return false
    }

    // if(s>0){

    // }
    // if(!number.match(/^[0-9]{10}$/)){
    //     erNu.innerHTML=s+" Remaining"
    //     erNu.style.color="red"
      
    //     return false
    // }
 
    erNu.innerHTML="Done"
    erNu.style.color="Green"
 
    return true
}

document.querySelector("#emal").addEventListener("keyup",eamlCh,)
    function eamlCh(e){
   
    let email=document.querySelector("#emal").value
    // let cou=10
    // let s=cou-number.length
    if(email.length==""){
        erE.innerHTML='Email is Required'
        erE.style.color="red"
   
        return false
    }
 
    if(!email.match( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        erE.innerHTML=" @ Email Ivalid"
        erE.style.color="red"
   
        return false
    }
 
    erE.innerHTML="Done"
    erE.style.color="Green"
  
    return true
}
let but=document.querySelector("#dir")
 

but.addEventListener("click",checkAll)

function checkAll(){
    if(!check() || !eamlCh() ||!dis() ||!masC()){
        // erB.innerHTML="Please Fix The Error Before Submit !"
        erB.style.color="red"
        return false
    }
    erB.innerHTML=""
}


document.querySelector("#text-are").addEventListener("keyup",masC,)
    function masC(e){
    let mass=document.querySelector("#text-are").value
    let s=15
    let a=s-mass.length
    if(a>""){
        erM.innerHTML=a+" Letters is Remaining ! "
        erM.style.color="red"
      
        return false
    }
  
    erM.innerHTML="Done"
    erM.style.color="Green"
    
    return true   
}
// 157.55.39.174.

let bot=document.querySelector("#dir")
bot.addEventListener("click",sendE)
 function sendE(e){
    e.preventDefault()
var eaml= document.querySelector("#emal").value;
    magac= document.querySelector("#name").value
    hadal= document.querySelector("#text-are").value
    nuuu=document.querySelector("#number").value
    if(eaml==""||magac==""||hadal=="" ||nuuu==""){
        alert("Fill all Inputs")
    }
    if(!check() || !eamlCh() ||!dis() ||!masC()){
        return  erB.innerHTML="Fill b4 Submit !"
    }
    else{
Email.send({
 
    Host : "smtp.gmail.com",
    Username : "shakuromar44@gmail.com",
    Password :"hhqdpjhexxdoapoi",
    To : 'shakuromar44@gmail.com',
    From :  eaml,
    Subject : "Someone Contacted you",
    Body : 'Email:'+eaml +" <br> Name:" +magac+ '<br> Phone:'+nuuu +
    '<br> Massage:'+ hadal 
}).then(
  message => alert(message+ " Successfully ")
);}


 clear()
 }


 function clear(){
     {
    var eaml= document.querySelector("#emal").value;
    magac= document.querySelector("#name").value
    // hadal= document.querySelector("#text-are").value
    nuuu=document.querySelector("#number").value
    if(eaml>0 || magac.length>0||hadal>0||nuuu>0){
        eaml.value=""
        nuuu.innerHTML=""
        magac.innerHTML=""
     }
     else{
       alert("asdasdsad")
     }
 }}