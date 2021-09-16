require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note museum uniform gesture hero food gauge'; 
let testAccounts = [
"0x868f833a130e97c21f64c0b97afc0bd2cecccfb3c53bf4235b935d69cf2f5608",
"0xa9c92ce5c25eea806f57746c5b75ff466087d5c004b17b2bea1fd27cece72cf8",
"0x8687d2f2bd678b356b913310ecaf96d8301c232eb96e9bdd877aa4ca54269eef",
"0xdac65a536cf874a7b06abcc1184243d661ed8523724537347728d9019e460c49",
"0x9edb33376814e0c782a9694c53dbb937ab91a117f996ba3d7948dd393b73d158",
"0x0ed30a18e37d8ae4bc0aa2700fb6a0abcfa102992ed8b7ccf88ba5ca7a5661f3",
"0x88aaf784a5667875a40878ef408a4d52b9566ef502701ccfa4b58a3a5ec6a432",
"0x7795a36f7915062107f196c3e21de19016a94d72e8ceead49b5429555a204d41",
"0xe1381b7213f047c183375ed7b1e67984552271a3c4931e932ee59d83f0f59cec",
"0xee065dcac699c5199f8fac51a1f41efbffda8caf584f06bf10bb776fd0041d48"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

