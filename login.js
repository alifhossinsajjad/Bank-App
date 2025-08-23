// login button functionality

document.getElementById("btn-login").addEventListener("click", function (e) {

  e.preventDefault()
  const validMobileNumber = 12345678910;
  const validPin = 1234;

  const mobaileNumbervalue =  document.getElementById("mobile-number").value

  const mobileNumberConverted = parseInt(mobaileNumbervalue);
  
  const pinNumberValue = document.getElementById("pin-number").value;
const pinNumberConverted = parseInt(pinNumberValue);

  if(mobileNumberConverted === validMobileNumber && pinNumberConverted === validPin){
    window.location.href="./home.html"
  }else{
    console.log("please Enter The Valid Mobile NUmber and Pin Number")
  }
});
