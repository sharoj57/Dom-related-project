document.getElementById('btn-cashout-money').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Clicked Me');

    const inputCashOut = document.getElementById('input-cash-out').value;
    const cashoutNumber = parseFloat(inputCashOut);
    const inputCashoutPinnumber = document.getElementById('input-cashout-pinnumber').value;
    console.log (inputCashOut,inputCashoutPinnumber);

    if (inputCashoutPinnumber === '1234') {
        console.log ('Thank To Cash Out')

        const balance = document.getElementById('account-balance').innerText
        console.log(balance);

       
        const balanceNumber =  parseFloat(balance);
        const cashoutbalance = balance - cashoutNumber;
        console.log (cashoutbalance);

        document.getElementById('account-balance').innerText = cashoutbalance;
    }
    else {
        alert('Taka Carte Kosto Paiyen Na Vhai')
    }
})