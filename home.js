const validPin = 1234;

const transectionData = [];

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

function getInnerText(id) {
  const eliment = document.getElementById(id);
  const elimentVlue = eliment.innerText;
  const elimentValuNumber = parseInt(elimentVlue);
  return elimentValuNumber;
}

// function set a innertext

function setInnerText(value) {
  const availableBalance = (document.getElementById(
    "available-balance"
  ).innerText = value);

  const availableNewBalance = availableBalance;
  return availableNewBalance;
}

// function to  toggle

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

// function to toggle buttons

function handleButtonToggle(id) {
  const formsBtns = document.getElementsByClassName("form-btn");

  for (const btn of formsBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// add money btn

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("bank");

    const accountNumber = document.getElementById("account-number").value;

    const amount = getInputValueNumber("add-amount");

    if(amount <= 0  ){
      alert ("Please inter the valid Amount Number")
      return;
    }

    const pinNumber = getInputValueNumber("add-pin");

    const availeableBalance = getInnerText("available-balance");

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

   const data = {
      name: "Transfer Money",
      date: new Date().toLocaleDateString(),
      amount : totalNewAvailableBalance,
    };

    transectionData.push(data);
  });

  
// cashout money feature

const withdrawValidPin = 1234;

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const withdrawAmount = getInputValueNumber("withdraw-amount");

  const availableBalance = getInnerText("available-balance");

  if (withdrawAmount <=0 || withdrawAmount > availableBalance){
    alert("insuficence balence");
    return;
  }

  const totalNewAvailableBalance = availableBalance - withdrawAmount;

  // document.getElementById("available-balance").innerText =
  //   totalNewAvaileableBalance;

  setInnerText(totalNewAvailableBalance);

  const withdrawAgentNumber = getInputValue("withdraw-agent-number");

  const withdrawPinNumber = getInputValueNumber("withdraw-pin");

  if (withdrawAgentNumber.length < 11) {
    alert("please valid number");
    return;
  }
  if (withdrawPinNumber !== withdrawValidPin) {
    alert("please enter the valid pin");
    return;
  }

  const data = {
      name: "Transfer Money",
      date: new Date().toLocaleDateString(),
      amount : totalNewAvailableBalance,
    };

  transectionData.push(data);
});

// Transfer money feature

const transferValidPin = 1234;

document
  .getElementById("transfer-money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const transferAmount = getInputValueNumber("transfer-amount");

    const availableBalance = getInnerText("available-balance");

    const totalNewAvailableBalance = availableBalance - transferAmount;

    // document.getElementById("available-balance").innerText =
    //   totalNewAvaileableBalance;

    setInnerText(totalNewAvailableBalance);

    const transferAccountNumber = getInputValue("transfer-account-number");

    const transferPinNumber = getInputValueNumber("transfer-pin-number");

    if (transferAccountNumber.length < 11) {
      alert("please valid number");
      return;
    }
    if (transferPinNumber !== transferValidPin) {
      alert("please enter the valid pin");
      return;
    }

    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleDateString(),
      amount : totalNewAvailableBalance,
    };

    transectionData.push(data);
  });

// transection feature

document
  .getElementById("transection-button")
  .addEventListener("click", function () {
    const transectionContainer = document.getElementById(
      "transection-container"
    );
 console.log(transectionContainer);
 console.log(transectionData)
    for (const data of transectionData) {
      const div = document.createElement("div");
      div.innerHTML = `
    <div class="flex justify-between items-center bg-white rounded-xl p-3">
                    <div class="flex items-center">
                        <div class=" p-3 rounded-full bg-[#f4f5f7]">
                            <img src="./assets/wallet1.png" alt="wallet" class="mx-auto">
                        </div>
                        <div class="ml-5">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                            <p>${data.amount}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical" style="color: #000000;"></i>
                </div>
    `

    transectionContainer.appendChild(div);
    }
  });

// toggleing feature

document.getElementById("add-button").addEventListener("click", function (e) {
  handleToggle("add-money-parent");
  handleButtonToggle("add-button");
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");

    handleButtonToggle("cash-out-button");

    // document.getElementById("add-money-parent").style.display = "none";

    // document.getElementById("cash-out-parent").style.display = "block";

    //   document.getElementById("transfer-money-parent").style.display = "none";
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");

    handleButtonToggle("transfer-button");

    // document.getElementById("cash-out-parent").style.display = "none";
    // document.getElementById("transfer-money-parent").style.display = "block";
  });

document.getElementById("bonus-button").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
  handleButtonToggle("bonus-button");
});

document
  .getElementById("pay-bill-button")
  .addEventListener("click", function () {
    handleToggle("pay-bill-parent");
    handleButtonToggle("pay-bill-button");
  });

document
  .getElementById("transection-button")
  .addEventListener("click", function () {
    handleToggle("transection-parent");
    handleButtonToggle("transection-button");
  });
