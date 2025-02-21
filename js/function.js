function getInputFieldValueByID(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}


function getTextFieldValueByID(id) {
    const inputValue = document.getElementById(id).innerText;
    return inputValue;
}


function buttonActiveByID(id) {
    document.getElementById('add-money-field').classList.add('hidden');
    document.getElementById('cashout-field').classList.add('hidden');
    document.getElementById('transaction-field').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden');



}