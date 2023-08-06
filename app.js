const calculateButton = document.getElementById('calculate');
const tipAmountText = document.getElementById('tip-amount');
const totalPersonText = document.getElementById('total-person');
const billAmontInput = document.getElementById('bill-amount');
const numberOfPeopleInput = document.getElementById('number-of-people');


billAmontInput.addEventListener('mouseup', () => {
    if (billAmontInput.value == 0) {
        calculateButton.disabled = false;
        document.querySelector('.calculate').style = "background: #26C2AE; color: #00474B;";
    } else {
        calculateButton.disabled = true;
    }
})

calculateButton.addEventListener('click', function () {
    const originalBillAmount = Number(billAmontInput.value);
    const numberOfPeople = Number(numberOfPeopleInput.value);
    const selectedRadioTip = document.querySelector('input[name="tip"]:checked')
    const tipPesentage = Number(selectedRadioTip.value.slice(0, -1)) / 100;
    const totalTip = Math.round(originalBillAmount * tipPesentage * 100) / 100

    if (numberOfPeopleInput.value == 0) {
        document.querySelector('.wrong_title').style = "display: inline-block;";
        document.querySelector('input[id="number-of-people"]').style = "border: 2px solid #E17052;"
        totalPersonText.innerText = '$0.00'
    } else {
        document.querySelector('.wrong_title').style = "display: none";
        document.querySelector('input[id="number-of-people"]').style = "border-color: transparent;"
        document.querySelector('.calculate').style = "color: #00474B; background: #9FE8DF;";
        

        tipAmountText.innerText = totalTip;
        const totalBill = originalBillAmount + totalTip;
        const perPerson = Math.round(totalBill / numberOfPeople * 100) / 100;
        totalPersonText.innerText = perPerson;
    };
});