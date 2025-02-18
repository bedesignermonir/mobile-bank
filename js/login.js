document.getElementById('login-btn').addEventListener('click', function (event) {
    // form auto loading off
    event.preventDefault();

    // mobile number input field value collect
    const mobileNumberInput = document.getElementById('phone-no-input').value;

    // pin number input field valu collect
    const pinNumberInput = document.getElementById('pin-input').value;

    // pin number and Mobile if matched then go to home page
    if (mobileNumberInput === '12345' && pinNumberInput === '1234') {
        window.location.href = 'home.html'
    }

    // if not matched then give alert
    else {
        alert('Your Phone or Pin in Invalid');
    }

})