/*global ethereum, MetamaskOnboarding */
const currentUrl = new URL(window.location.href)
const forwarderOrigin = 'http://localhost:9010'

//Basic Actions Section
const connectButton = document.getElementById('connect-btn');
const showAccount = document.querySelector('.showAccount');
const dialogBox = document.querySelector('.dialog-box');
const adressBox = document.querySelector('.adress-box');
const costBox = document.getElementById('cost-box');


let inputAmount = document.getElementById('input-amount');
let mintButton = document.getElementById('mint-btn');

const initialize = () => {

    const isMetaMaskInstalled = () => {
        const {
            ethereum
        } = window
        return Boolean(ethereum && ethereum.isMetaMask)
    }

    let accounts = [];



    /*
    Big Countdown 336/1111

    1 Click Connect
    1b Open Mask
    2 Put In Number Of Tokens
    3 enable Button Mint



      //Eth_Accounts-getAccountsButton
      getAccountsButton.addEventListener('click', async () => {
        //we use eth_accounts because it returns a list of addresses owned by us.
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        //We take the first address in the array of addresses and display it
        getAccountsResult.innerHTML = accounts[0] || 'Not able to get accounts';
      });
    */
    mintButton.disabled = true;
    inputAmount.addEventListener("input", function(e) {
        if (inputAmount.value.length == 0) {
            mintButton.disabled = true;
        } else {
            mintButton.disabled = false;
            cost = inputAmount.value * 0.2;
            cost = cost.toFixed(2);
            costBox.innerHTML = cost;
        }
    })




    connectButton.addEventListener('click', () => {
        getAccount();

    });

    mintButton.addEventListener('click', () => {
        //price = 0.2;
        amount = inputAmount.value;
        price = 200000000000000000;
        orderAmount = amount * price;

        hexString = orderAmount.toString(16);


        getAccount();
        successDialog();
        ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [{
                    from: accounts[0],
                    to: '0x3d8CD3bbDF3475B3882C0f3Ac0fA184FF5730eC4',
                    value: hexString,
                    gasPrice: '746A528800',
                }, ],
            })
            .then((txHash) => console.log(txHash))
            .catch((error) => console.error);
    });

    async function getAccount() {
        accounts = await ethereum.request({
            method: 'eth_requestAccounts'
        });
        const account = accounts[0];
        adressBox.classList.add("active");
        showAccount.innerHTML = account;
        openDialog();
    }

    function openDialog() {

        dialogBox.classList.add("active");

    }

    function successDialog() {

    }


}
window.addEventListener('DOMContentLoaded', initialize)