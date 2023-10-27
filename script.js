// ************* Define HTML Form Fields as constants **************

const tn = document.getElementById("tn");
const dn = document.getElementById("dn");
const standbyResultField = document.getElementById("standbyResultField");
const operationalResultsField = document.getElementById("operationalResultField");
const standbyAccountField = document.getElementById("standbyAccountField");
const standbyPubKeyField = document.getElementById("standbyPubKeyField");
const standbyPrivKeyField = document.getElementById("standbyPrivKeyField");
const standbyBalanceField = document.getElementById("standbyBalanceField");
const standbySeedField = document.getElementById("standbySeedField");
const operationalAccountField = document.getElementById("operationalAccountField");
const operationalPubKeyField = document.getElementById("operationalPubKeyField");
const operationalPrivKeyField = document.getElementById("operationalPrivKeyField");
const operationalSeedField = document.getElementById("operationalSeedField");
const operationalBalanceField = document.getElementById("operationalBalanceField");
const seeds = document.getElementById("seeds");

// ************* Get the Preferred Network **************
function getNet() {
  let net;
  if (tn.checked) net = "wss://s.altnet.rippletest.net:51233";
  if (dn.checked) net = "wss://s.devnet.rippletest.net:51233";
  return net;
} // End of getNet()

// ************* Get Account *********************
async function getAccount(type) {
  let net = getNet();

  const client = new xrpl.Client(net);
  results = "Connecting to " + net + "....<br/>";

  // This uses the default faucet for Testnet/Devnet
  let faucetHost = null;
  let amount = '10000';
  if (type == "standby") {
    standbyResultField.innerHTML = results;
  } else {
    operationalResultField.innerHTML = results;
  }
  await client.connect();

  results += "\nConnected, funding wallet.<br/>";
  if (type == "standby") {
    standbyResultField.innerHTML = results;
  } else {
    operationalResultField.innerHTML = results;
  }

  // --Create and fund a test account wallet
  const my_wallet = (await client.fundWallet(null, { amount, faucetHost })).wallet;

  results += "\nGot a wallet.<br/>";
  if (type == "standby") {
    standbyResultField.innerHTML = results;
  } else {
    operationalResultField.innerHTML = results;
  }

  // --Get the current balance.
  const my_balance = await client.getXrpBalance(my_wallet.address);

  if (type == "standby") {
    standbyAccountField.innerHTML = my_wallet.address;
    standbyPubKeyField.innerHTML = my_wallet.publicKey;
    standbyPrivKeyField.innerHTML = my_wallet.privateKey;
    standbyBalanceField.innerHTML = await client.getXrpBalance(
      my_wallet.address
    );
    standbySeedField.innerHTML = my_wallet.seed;
    results += "\nStandby account created.<br/>";
    standbyResultField.innerHTML = results;
  } else {
    operationalAccountField.innerHTML = my_wallet.address;
    operationalPubKeyField.innerHTML = my_wallet.publicKey;
    operationalPrivKeyField.innerHTML = my_wallet.privateKey;
    operationalSeedField.innerHTML = my_wallet.seed;
    operationalBalanceField.innerHTML = await client.getXrpBalance(
      my_wallet.address
    );
    results += "\nOperational account created.<br/>";
    operationalResultField.innerHTML = results;
  }
  // --- Capture the seeds for both accounts for ease of reload.
  seeds.value =
    standbySeedField.innerHTML + "\n" + operationalSeedField.innerHTML;
  client.disconnect();
} // End of getAccount()

// *******************************************************
// ********** Get Accounts from Seeds ********************
// *******************************************************

async function getAccountsFromSeeds() {
  let net = getNet();
  const client = new xrpl.Client(net);
  results = "Connecting to " + getNet() + "....<br/>";
  standbyResultField.innerHTML = results;
  await client.connect();
  results += "\nConnected, finding wallets.<br/>";
  standbyResultField.innerHTML = results;

  // ----Find the test account wallets
  var lines = seeds.value.split("\n");
  const standby_wallet = xrpl.Wallet.fromSeed(lines[0]);
  const operational_wallet = xrpl.Wallet.fromSeed(lines[1]);

  // ----Get the current balance.
  const standby_balance = await client.getXrpBalance(standby_wallet.address);
  const operational_balance = await client.getXrpBalance(
    operational_wallet.address
  );

  // --Populate the fields for Standby and Operational accounts
  standbyAccountField.innerHTML = standby_wallet.address;
  standbyPubKeyField.innerHTML = standby_wallet.publicKey;
  standbyPrivKeyField.innerHTML = standby_wallet.privateKey;
  standbySeedField.innerHTML = standby_wallet.seed;
  standbyBalanceField.innerHTML = await client.getXrpBalance(
    standby_wallet.address
  );

  operationalAccountField.innerHTML = operational_wallet.address;
  operationalPubKeyField.innerHTML = operational_wallet.publicKey;
  operationalPrivKeyField.innerHTML = operational_wallet.privateKey;
  operationalSeedField.innerHTML = operational_wallet.seed;
  operationalBalanceField.innerHTML = await client.getXrpBalance(
    operational_wallet.address
  );

  client.disconnect();
} // End of getAccountsFromSeeds()

// *******************************************************
// ******************** Send XRP *************************
// *******************************************************

async function sendXRP() {
  results = "Connecting to the selected ledger.<br/>";
  standbyResultField.innerHTML = results;
  let net = getNet();
  results = "Connecting to " + getNet() + "....<br/>";
  const client = new xrpl.Client(net);
  await client.connect();

  results += "\nConnected. Sending XRP.<br/>";
  standbyResultField.innerHTML = results;

  const standby_wallet = xrpl.Wallet.fromSeed(standbySeedField.innerHTML);
  const operational_wallet = xrpl.Wallet.fromSeed(
    operationalSeedField.innerHTML
  );
  const sendAmount = standbyAmountField.value;

  results += "\nstandby_wallet.address: = " + standby_wallet.address + "<br/>";
  standbyResultField.innerHTML = results;

  // ---- Prepare transaction
  // Note that the destination is hard coded.
  const prepared = await client.autofill({
    TransactionType: "Payment",
    Account: standby_wallet.address,
    Amount: xrpl.xrpToDrops(sendAmount),
    Destination: standbyDestinationField.value
  });

  // ---- Sign prepared instructions
  const signed = standby_wallet.sign(prepared);

  // ---- Submit signed blob
  const tx = await client.submitAndWait(signed.tx_blob);

  results +=
    "<br/>Balance changes: " +
    JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2);
  standbyResultField.innerHTML = results;

  standbyBalanceField.innerHTML = await client.getXrpBalance(
    standby_wallet.address
  );
  operationalBalanceField.innerHTML = await client.getXrpBalance(
    operational_wallet.address
  );
  client.disconnect();
} // End of sendXRP()

// **********************************************************************
// ****** Reciprocal Transactions ***************************************
// **********************************************************************

// *******************************************************
// ********* Send XRP from Operational account ***********
// *******************************************************

async function oPsendXRP() {
  results = "Connecting to the selected ledger.<br/>";
  operationalResultField.innerHTML = results;
  let net = getNet();
  results = "Connecting to " + getNet() + "....<br/>";
  const client = new xrpl.Client(net);
  await client.connect();

  results += "<br/>Connected. Sending XRP.<br/>";
  operationalResultField.innerHTML = results;

  const operational_wallet = xrpl.Wallet.fromSeed(operationalSeedField.value);
  const standby_wallet = xrpl.Wallet.fromSeed(standbySeedField.innerHTML);
  const sendAmount = operationalAmountField.value;

  results +=
    "\noperational_wallet.address: = " + operational_wallet.address + "<br/>";
  operationalResultField.innerHTML = results;

  // ------------------------------------------------------- Prepare transaction
  // Note that the destination is hard coded.
  const prepared = await client.autofill({
    TransactionType: "Payment",
    Account: operational_wallet.address,
    Amount: xrpl.xrpToDrops(operationalAmountField.value),
    Destination: operationalDestinationField.value
  });

  // ------------------------------------------------ Sign prepared instructions
  const signed = operational_wallet.sign(prepared);

  // -------------------------------------------------------- Submit signed blob
  const tx = await client.submitAndWait(signed.tx_blob);

  results +=
    "<br/>Balance changes: " +
    JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2);
  operationalResultField.innerHTML = results;

  standbyBalanceField.innerHTML = await client.getXrpBalance(
    standby_wallet.address
  );
  operationalBalanceField.innerHTML = await client.getXrpBalance(
    operational_wallet.address
  );

  client.disconnect();
} // End of oPsendXRP()
