document.getElementById('cbtn').addEventListener('click',function(){
    console.log('Show CashOut Button Clicked');
    document.getElementById('out-money-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
})

document.getElementById('ambtn').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('out-money-form').classList.add('hidden')
})