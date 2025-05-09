document.getElementById('calculate-btn').addEventListener('click', calculateLoan);
document.getElementById('clear-btn').addEventListener('click', clearForm)

function calculateLoan(){

    const loanAmount = parseFloat(document.getElementById('loan-amount-input').value);
    const interestRate = parseFloat(document.getElementById('interest-rate-input').value);
    const loanTerm = parseFloat(document.getElementById('loan-term-input').value);

    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        alert("Plase Enter valid Numbers for all the Fields.")
    }

    const monthlyInterest = interestRate/100/12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest)/(1-Math.pow(1+monthlyInterest, -totalPayments));
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest){
    const resultDiv = document.getElementById('final-result');

    resultDiv.innerHTML = `
    <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</p></strong>
    <p><strong>Total Interest: ${totalInterest.toFixed(2)}</p></strong>
    `;
}

function clearForm(){
    document.getElementById('loan-amount-input').value='';
    document.getElementById('interest-rate-input').value='';
    document.getElementById('loan-term-input').value='';
    document.getElementById('final-result').innerHTML='Final Result';
}