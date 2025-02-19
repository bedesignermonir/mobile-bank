document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById('add-money-input').value;
    const pinInput = document.getElementById('pin-input').value;
    const currentBalance = document.getElementById('current-Balance').innerText;



    if (pinInput === '1234') {
        const newCurrentBalance = parseFloat(addMoneyInput) + parseFloat(currentBalance);
        document.getElementById('current-Balance').innerText = newCurrentBalance;
    }
    else {
        alert('Your Pin is Incorrect');
    }

})


document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const cashoutInput = document.getElementById('cashout-input').value;
    const pinInput = document.getElementById('cashout-pin-input').value;
    const currentBalance = document.getElementById('current-Balance').innerText;



    if (pinInput === '1234') {
        const newCurrentBalance = parseFloat(currentBalance) - parseFloat(cashoutInput);
        document.getElementById('current-Balance').innerText = newCurrentBalance;
    }
    else {
        alert('Your Pin is Incorrect');
    }

})


document.getElementById('add-money-display-btn').addEventListener('click', function () {
    document.getElementById('add-money-field').classList.remove('hidden');
    document.getElementById('cashout-field').classList.add('hidden');
})

document.getElementById('cashout-display-btn').addEventListener('click', function () {
    document.getElementById('add-money-field').classList.add('hidden');
    document.getElementById('cashout-field').classList.remove('hidden');
})