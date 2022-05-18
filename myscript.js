let isOperaWallet = false;
if(window.ethereum){
    isOperaWallet = window.ethereum.isOpera;
}
if(isOperaWallet){
    // add Opera Wallet as the first option in the wallet connection panel.
}

if(window.ethereum){
    window.ethereum.request({method: 'eth_requestAccounts'})
}
