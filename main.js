var registerForm = document.querySelector(".registerForm");
var result = document.querySelector(".result");
registerForm.onsubmit = function (event) {
    event.preventDefault();
    console.log(event.target.elements);
    var element = event.target.elements;
    var amount = element[0];
    var exchange = element[1];
    if (exchange.value == "dollar") {
        result.textContent = amount.value * 0.2681;
    }
    else if (exchange.value == "dinar") {
        result.textContent = amount.value * 0.19;
    }
    else if (exchange.value == "nis") {
        result.textContent = amount.value;
    }
}
