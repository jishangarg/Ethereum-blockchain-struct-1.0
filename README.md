# Ethereum-blockchain-struct-1.0

I have made a whole structure to deploy my Smart Contract program to Rinkeby Blockchain.

First of all, I have written a smart contract code in which I have used Solidity language(0.4.17). 

Then I set up Solidity compiler to build our contracts so that I can write solidity contract in javascript  project. Compiler has converted the code into two parts- ABI and Bytecode.

Now after this step I needed some way to rapidly test contracts without doing the manual testing. Therefore, I set up a custom mocha test runner that can somehow test Solidity Code.

Additional to Mocha, I have used some other javascript libraries like Ganache-cli, Web3(1.0.0) and assert. During testing, I used web3 to interact with local network which has been created using  Ganache (ganache.provider()).

After testing, I set up a deploy script to compile plus deploy my contract. Deploying was bit different from testing. For deploying I needed to create a real ethereum account having some ethers in it. Somehow, I managed to get some fake ethers (just for learning  point of view). Here I installed one module i.e truffle-hdwallet-provider, which ease the interaction of web3 instance to Rinkeby Blockchain and also unlock my Ethereum account(which I have made using Meta Mask). 

After deploying my Contract on Rinkeby, I got hexadecimal address at which my transaction is saved. I crosschecked it on Rinkeby etherscan website (http://rinkeby.etherscan.io),  and it was successfully deployed and some amount of ether deducted from my account as expected.
