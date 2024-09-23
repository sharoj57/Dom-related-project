// step 1 : Set Event Handler
document.getElementById('button-clickone').addEventListener('click',function(event){
    // Step:2 Prevent Default Behavior (Prevent Reloading Browsers)
    event.preventDefault();
    // console.log('login Button Clicked')

    //step:3 Get The Phone Number & Pin number
    const phoneNumber = document.getElementById('phonenumber').value;
    const pinNumber = document.getElementById('pin-number').value
    console.log(phoneNumber);
    console.log(pinNumber);

    // Step Four : Validate Phone And Pin 
    // Its not Ideal Way. Its Just Temporary way
    if (phoneNumber==='5'&& pinNumber==='1234'){
        console.log('Tumi Baba Dhuke Gecho');
        window.location.href = '/home.html';

    }
    else{
        alert('Vul Korsos Vai Thik Thak Koira de');
    }
})

