const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const {interface,bytecode}=require('./compile');

const provider=new HDWalletProvider(
    'glory north author fruit middle orient hurdle bus width clump cloth waste',
    'https://rinkeby.infura.io/v3/8b148e1848b046afa4266af2ffc95c6a'
);
const web3=new Web3(provider);

const deploy=async()=>{
    const accounts=await web3.eth.getAccounts();
    console.log('Attempting to deploy from account',accounts[0]);

    const result=await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode,arguments:['Hi there!']})
    .send({gas:'1000000',from:accounts[0]});

    console.log('Contract deployed to',result.options.address);

};
deploy();