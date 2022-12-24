let bill=document.querySelector('.bill-amount');
let tipPercentage=document.querySelectorAll('.rectange');
let title=document.querySelector('.title');
let numPeople=document.querySelector('.people');
let showTip=document.querySelector('.person');
let showTotal=document.querySelector('.total');
let reset=document.querySelector('.reset')


let billAmount=0;
let customAmout=0;
let people=parseInt(1);
let tipPercentageAmount=0;
let tip=0;
let total=0;


 bill.addEventListener('change',function(){
     billAmount=parseFloat(bill.value);  
     tip=(billAmount*tipPercentage)/people;
     total=(tip+billAmount)/people;
 })


 for(let i=0;i<tipPercentage.length;i++){
     tipPercentage[i].addEventListener('click',function(){
         if(this.classList.contains('rec1')){
            tipPercentage=0.05;
         }else if(this.classList.contains('rec2')){
                tipPercentage=0.1;
         }else if(this.classList.contains('rec3')){
            tipPercentage=0.15; 
         }else if(this.classList.contains('rec4')){
            tipPercentage=0.25;
        }else if(this.classList.contains('rec5')){
            tipPercentage=0.5;
        }else if(this.classList.contains('rec6')){
           tipPercentage[i].addEventListener('change',function(){
            customAmout=parseFloat(this.value);
            console.log(customAmout);
              tipPercentage=customAmout/100;
            })
         }
     })
 }

 numPeople.addEventListener('change',function(){
     people=parseInt(numPeople.value);
     tip=(billAmount*tipPercentage)/people;
    total=(tip+billAmount)/people;
    tip=tip.toFixed(2);
    total=total.toFixed(2);
    showTip.textContent="$"+tip;
    showTotal.textContent="$"+total;

    if(people===0){
        numPeople.style.border="2px solid red";
        showTip.textContent="$0.00";
        showTotal.textContent="$0.00";
        title.textContent="Can not be zero";
        title.style.fontSize="10px";
        title.style.color="red";
        title.style.textAlign="right";
        
    }else{
        people=parseInt(numPeople.value);
        title.textContent="";
        numPeople.style.border="1px solid black";
    }
 })

 reset.addEventListener('click',function(){

    showTip.textContent="$0.00";
    showTotal.textContent="$0.00";
    numPeople.value="";
    bill.value="";
    title.textContent="";
    numPeople.style.border="none";
 })
 


   

