document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyInput = getInputFieldValueByID('add-money-input');
    const pinInput = getInputFieldValueByID('pin-input');
    const currentBalance = getTextFieldValueByID('current-Balance');

    if (isNaN(addMoneyInput)) {
        alert('sorry')
        return;
    }

    if (pinInput === '1234') {

        const newCurrentBalance = parseFloat(addMoneyInput) + parseFloat(currentBalance);
        document.getElementById('current-Balance').innerText = newCurrentBalance;


        const transactionEntry = document.createElement('p');
        transactionEntry.innerText = ` Added ${addMoneyInput} tk. Current Balance is : ${newCurrentBalance}
        `
        document.getElementById('transaction-field').appendChild(transactionEntry);


        document.getElementById('add-money-input').value = "";
        document.getElementById('pin-input').value = "";

    }
    else {
        alert('Your Pin is Incorrect');
    }

})


document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const cashoutInput = getInputFieldValueByID('cashout-input');
    const pinInput = getInputFieldValueByID('cashout-pin-input');
    const currentBalance = getTextFieldValueByID('current-Balance');

    if (isNaN(cashoutInput)) {
        alert('sorry')
        return;
    }

    if (cashoutInput > currentBalance) {
        alert('Your are gorib')
        return;
    }

    if (pinInput === '1234') {




        const newCurrentBalance = parseFloat(currentBalance) - parseFloat(cashoutInput);
        document.getElementById('current-Balance').innerText = newCurrentBalance;

        const transactionEntry = document.createElement('p');
        transactionEntry.innerHTML = `
        <p class="bg-yellow-500 p-5 rounded-xl"> Cashout ${cashoutInput} Tk. Current Balance is ${currentBalance} tk</p>
        `
        document.getElementById('transaction-field').appendChild(transactionEntry);

        document.getElementById('cashout-input').value = "";
        document.getElementById('cashout-pin-input').value = "";
    }
    else {
        alert('Your Pin is Incorrect');
    }

})

document.getElementById('add-money-display-btn').addEventListener('click', function () {
    buttonActiveByID('add-money-field');
})

document.getElementById('cashout-display-btn').addEventListener('click', function () {
    buttonActiveByID('cashout-field');
})

document.getElementById('transaction-display-btn').addEventListener('click', function () {
    buttonActiveByID('transaction-field');
})



