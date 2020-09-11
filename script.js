var numberEle= document.body.querySelector(".Number");
var answerEle= document.body.querySelector(".Answer");
var operatorEle= document.body.querySelector("#Operation");
var OperandA =Number (prompt ("Enter A Number"))
var Operation = prompt ("Enter An Operation")
var OperandB =Number (prompt ("Enter A Number"))

if(!isNaN(OperandA)){
  numberEle.innerHTML="Statement is true";}

if(Operation=="+"){
   operatorEle.innerHTML="Statement is true";
}else if(Operation=="-"){
  operatorEle.innerHTML="Statement is true";
             }
else if(Operation=="*"){
  operatorEle.innerHTML="Statement is true";
             }
else if(Operation=="/"){
  operatorEle.innerHTML="Statement is true";
             }
if(!isNaN(OperandB)){
  numberEle.innerHTML="Statement is true";}

if(Operation=="+"){
   var Answer=OperandA+OperandB
}else if
(Operation=="-"){
   var Answer=OperandA-OperandB
   }else if
(Operation=="*"){
   var Answer=OperandA*OperandB
   }else if
(Operation=="/"){
   var Answer=OperandA/OperandB
   }else{
     answerEle.innerHTML="Operator is incorrect";}
   

document.body.querySelector(".Answer").innerHTML=Answer;