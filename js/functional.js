function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value ;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;

}
//update withdraw and deposite total
function updateTotal(fieldId , amount){
    
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount ;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal ;
}
function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText ;
    const value = parseFloat(fieldValueInText)
    return value;

}
//handle balance
function updateBalance(amount,isAdd){
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance ;
    if(isAdd){
        newBalance = previousBalance + amount ;      
    }
    else{
        newBalance = previousBalance - amount ;     
    }
    document.getElementById('balance-total').innerText = newBalance;
}
//handle deposite
document.getElementById('deposite-button').addEventListener('click',function(){
    const amount = getInputValue("deposite-input");
    
    if(amount>0){
        updateTotal('deposite-total',amount);
        updateBalance(amount,true);
    }  
});
//handle withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if(amount>0 && amount<=balance){
        updateTotal('withdraw-total',amount);
        updateBalance(amount,false);
    }  
});

