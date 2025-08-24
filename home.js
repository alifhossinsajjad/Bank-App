const validPin = 1234;

// functions get input values number

function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}


// functions get input values 

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// functions get innertext 

function getInnerText(id){
  const eliment = document.getElementById(id);
  const elimentVlue = eliment.innerText
  const elimentValuNumber = parseInt(elimentVlue);
  return elimentValuNumber;
}



// function set a innertext

function setInnerText (value) {
  const availableBalance = document.getElementById("available-balance").innerText = value

  const availableNewBalance = availableBalance;
  return availableNewBalance;

}
// add money btn

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("bank")
    
    const accountNumber = document.getElementById("account-number").value;

    const amount = getInputValueNumber("add-amount")

    const pinNumber = getInputValueNumber("add-pin")

    const availeableBalance = getInnerText("available-balance")

    if (accountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("please enter valid pin number");
      return;
    }

    const totalNewAvailableBalance = amount + availeableBalance;

    // document.getElementById("available-balance").innerText =
    //   totalNewAvailableBalance;

    setInnerText(totalNewAvailableBalance);
  });

// cashout money feature

const withdrawValidPin = 1234;

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const withdrawAmount = getInputValueNumber("withdraw-amount")

  const availableBalance = getInnerText("available-balance")

  const totalNewAvaileableBalance = availableBalance - withdrawAmount;

  // document.getElementById("available-balance").innerText =
  //   totalNewAvaileableBalance;

   setInnerText(totalNewAvaileableBalance);

  const withdrawAgentNumber = getInputValue("withdraw-agent-number")
  
  const withdrawPinNumber = getInputValueNumber("withdraw-pin")

  if (withdrawAgentNumber.length < 11) {
    alert("please valid number");
    return;
  }
  if (withdrawPinNumber !== withdrawValidPin) {
    alert("please enter the valid pin");
    return;
  }
});

// toggleing feature

document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";

  document.getElementById("add-money-parent").style.display = "block";
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";

    document.getElementById("cash-out-parent").style.display = "block";
  });
