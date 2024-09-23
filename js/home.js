// Add Event Handler In Button Add Money


// 

document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    console.log('add Click');

    // Get Money To be Added The Account
    const inputAddMoney = document.getElementById('input-add-money').value;
    console.log(inputAddMoney);

    // Get The Pin Number Provided
    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(inputPinNumber);

    // Verify Pin Number In Fokira Way

    if( inputPinNumber === '1234'){
        console.log ('added money to your account');

         //get the current balance

         const balance = document.getElementById ('account-balance').innerText;
         console.log(balance);

        //  Add Money Input With Balance
        const inputMoney = parseFloat(inputAddMoney);
        const balanceNumber = parseFloat (balance);
        const newBalance = inputMoney + balanceNumber;
        console.log(newBalance);

        // Step - 6
        document.getElementById('account-balance').innerText = newBalance;
    }

       


    else {
        alert('sorry! Please Try Again Later');
    }
})