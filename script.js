let Amount=document.getElementById("Amount");
let Persons=document.getElementById("Persons");
let Tip=document.getElementById("Tip");
let button=document.getElementById("SubmitBtn");
let Result=document.getElementById("Result");

function compute(){
    if(Amount.value<=0 || Persons.value<=0 ){
        Result.innerHTML=`Invalid Inputs`;
        return;
    }
    console.log(Amount.value);
    console.log(Persons.value);
    console.log(Tip.value);
    
    
    
    let TotalAmount=Number(Amount.value)+(Number(Amount.value)*Number(Tip.value)/100);
    Result.innerHTML=`Each person must pay : $ ${TotalAmount/Number(Persons.value)}`;
}
button.addEventListener('click',compute);
