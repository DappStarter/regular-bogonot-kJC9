require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth meadow undo hunt inflict tackle gas'; 
let testAccounts = [
"0x50c6e9edd086144d908b24d9e15cb0d5da1ad61eaed9b74a78737052a0e8a2a9",
"0xb40b6b1ea9dff701159672c520f7adfeee0ff1985dc17919ad8fe9ab9529d2d2",
"0x1c4508b2b25d45c86336784e99ae63e24c6787739a3501f1439a5ff302b9ec45",
"0x35b3ca3c5d939a830a16ce3cec4970ae5c5ff865b9e9213a69049cfc5b8fef15",
"0x76835458fe5f86e38ca96774f98d6b07b3a9beb23c8bf88644120736c46079e8",
"0xb84c42facaa5d8aa65320f623364ffdc6499a0ad1c94c90a49ca1d138f6664d6",
"0x7f70315b27c95fd5bb558fe97967373cdd3f1824b945f3a155b831e800a736a1",
"0x58f5ef1514f8ecac8b1b7bd7a1354a6b9d2875ad4ca6a2db21add50c0317e92f",
"0x0f25f8df17900cc707e4a6633a08293ebb7467c52c71d3bc298c38f05ebf7849",
"0xf4445b2ae5be81aad82a0fa8de69b9bfe1112dce75330412163287eadad7b5b9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

