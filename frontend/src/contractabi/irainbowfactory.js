export const irainbowfactory = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "stake",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "StakeCreated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
            }
        ],
        "name": "getStake",
        "outputs": [
            {
                "internalType": "address",
                "name": "stake",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "allStakes",
        "outputs": [
            {
                "internalType": "address",
                "name": "stake",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "allStakesLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
            }
        ],
        "name": "createStake",
        "outputs": [
            {
                "internalType": "address",
                "name": "stake",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
