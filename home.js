
const validPin = 1234

// add money btn

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value);

    const pinNumber = parseInt(document.getElementById("add-pin").value);

    const availeableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }

    if(pinNumber !== validPin){
        alert("please enter valid pin number")
        return;
    }

    const totalNewAvailableBalance = amount + availeableBalance;

    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });



  // cashout money feature


  const withdrawValidPin = 1234
  


  document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault();

    

    const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value);

    const availableBalance = parseInt(document.getElementById("available-balance").innerText);


    const totalNewAvaileableBalance = availableBalance - withdrawAmount;

    document.getElementById("available-balance").innerText =
     totalNewAvaileableBalance;

    const withdrawAgentNumber = document.getElementById("withdraw-agent-number").value;
    const withdrawPinNumber = parseInt(document.getElementById("withdraw-pin").value);

    if(withdrawAgentNumber.length <11){
        alert("please valid number");
        return;
    }
    if(withdrawPinNumber !== withdrawValidPin ){

        alert("please enter the valid pin");
        return;
    }

  })


// toggleing feature

document.getElementById("add-button").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none"

    document.getElementById("add-money-parent").style.display = "block"
    
})


document.getElementById("cash-out-button").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none"

    document.getElementById("cash-out-parent").style.display = "block"
    
})
