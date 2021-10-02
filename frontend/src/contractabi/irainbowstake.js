export const irainbowstake = [
  {
    "contractName": "IRainbowStake",
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "Burn",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "reserve0",
            "type": "uint256"
          }
        ],
        "name": "Sync",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "factory",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "token0",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getReserve",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "reserve0",
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
            "name": "to",
            "type": "address"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "burn",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.7+commit.e28d00a7\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount0\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"Burn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount0\",\"type\":\"uint256\"}],\"name\":\"Mint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"reserve0\",\"type\":\"uint256\"}],\"name\":\"Sync\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"burn\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amount0\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"factory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getReserve\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"reserve0\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"liquidity\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"token0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/interfaces/IRainbowStake.sol\":\"IRainbowStake\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/interfaces/IRainbowStake.sol\":{\"keccak256\":\"0x195d42db782e8827438487fb53a8c896a4cfc0738865c6124322f5bf7f8410fd\",\"urls\":[\"bzz-raw://c25b375b196daca33a2e4828c75332f75c90775b3738bae247b168a2c7c96826\",\"dweb:/ipfs/QmWhDA8wDMumrTiRNazELpH8FCjtDH25MyZsUeXcG9Qxvk\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "immutableReferences": {},
    "generatedSources": [],
    "deployedGeneratedSources": [],
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "pragma solidity >=0.5.0;\n\ninterface IRainbowStake {\n//    event Approval(address indexed owner, address indexed spender, uint value);\n//    event Transfer(address indexed from, address indexed to, uint value);\n//\n//    function name() external pure returns (string memory);\n//    function symbol() external pure returns (string memory);\n//    function decimals() external pure returns (uint8);\n//    function totalSupply() external view returns (uint);\n//    function balanceOf(address owner) external view returns (uint);\n//    function allowance(address owner, address spender) external view returns (uint);\n//\n//    function approve(address spender, uint value) external returns (bool);\n//    function transfer(address to, uint value) external returns (bool);\n//    function transferFrom(address from, address to, uint value) external returns (bool);\n//\n//    function DOMAIN_SEPARATOR() external view returns (bytes32);\n//    function PERMIT_TYPEHASH() external pure returns (bytes32);\n//    function nonces(address owner) external view returns (uint);\n//\n//    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;\n//\n    event Mint(address indexed sender, uint amount0);\n    event Burn(address indexed sender, uint amount0, address indexed to);\n//    event Swap(\n//        address indexed sender,\n//        uint amount0In,\n//        uint amount1In,\n//        uint amount0Out,\n//        uint amount1Out,\n//        address indexed to\n//    );\n    event Sync(uint reserve0);\n//\n//    function MINIMUM_LIQUIDITY() external pure returns (uint);\n    function factory() external view returns (address);\n    function token0() external view returns (address);\n    function getReserve() external view returns (uint reserve0);\n\n    function mint(address to) external returns (uint liquidity);\n    function burn(address to) external returns (uint amount0);\n//    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;\n//    function skim(address to) external;\n//    function sync() external;\n\n    function initialize(address) external;\n}\n",
    "sourcePath": "/home/jordoq/rainbowfaucet/contracts/interfaces/IRainbowStake.sol",
    "ast": {
      "absolutePath": "project:/contracts/interfaces/IRainbowStake.sol",
      "exportedSymbols": {
        "IRainbowStake": [
          1418
        ]
      },
      "id": 1419,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1365,
          "literals": [
            "solidity",
            ">=",
            "0.5",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:8"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "interface",
          "fullyImplemented": false,
          "id": 1418,
          "linearizedBaseContracts": [
            1418
          ],
          "name": "IRainbowStake",
          "nameLocation": "36:13:8",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "anonymous": false,
              "id": 1371,
              "name": "Mint",
              "nameLocation": "1195:4:8",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 1370,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1367,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "sender",
                    "nameLocation": "1216:6:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1371,
                    "src": "1200:22:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1366,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1200:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1369,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amount0",
                    "nameLocation": "1229:7:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1371,
                    "src": "1224:12:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1368,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1224:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1199:38:8"
              },
              "src": "1189:49:8"
            },
            {
              "anonymous": false,
              "id": 1379,
              "name": "Burn",
              "nameLocation": "1249:4:8",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 1378,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1373,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "sender",
                    "nameLocation": "1270:6:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1379,
                    "src": "1254:22:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1372,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1254:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1375,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amount0",
                    "nameLocation": "1283:7:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1379,
                    "src": "1278:12:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1374,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1278:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1377,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "1308:2:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1379,
                    "src": "1292:18:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1376,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1292:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1253:58:8"
              },
              "src": "1243:69:8"
            },
            {
              "anonymous": false,
              "id": 1383,
              "name": "Sync",
              "nameLocation": "1519:4:8",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 1382,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1381,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "reserve0",
                    "nameLocation": "1529:8:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1383,
                    "src": "1524:13:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1380,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1524:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1523:15:8"
              },
              "src": "1513:26:8"
            },
            {
              "functionSelector": "c45a0155",
              "id": 1388,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "factory",
              "nameLocation": "1621:7:8",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1384,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1628:2:8"
              },
              "returnParameters": {
                "id": 1387,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1386,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 1388,
                    "src": "1654:7:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1385,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1654:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1653:9:8"
              },
              "scope": 1418,
              "src": "1612:51:8",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "functionSelector": "0dfe1681",
              "id": 1393,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "token0",
              "nameLocation": "1677:6:8",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1389,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1683:2:8"
              },
              "returnParameters": {
                "id": 1392,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1391,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 1393,
                    "src": "1709:7:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1390,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1709:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1708:9:8"
              },
              "scope": 1418,
              "src": "1668:50:8",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "functionSelector": "59bf5d39",
              "id": 1398,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "getReserve",
              "nameLocation": "1732:10:8",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1394,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1742:2:8"
              },
              "returnParameters": {
                "id": 1397,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1396,
                    "mutability": "mutable",
                    "name": "reserve0",
                    "nameLocation": "1773:8:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1398,
                    "src": "1768:13:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1395,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1768:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1767:15:8"
              },
              "scope": 1418,
              "src": "1723:60:8",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "functionSelector": "6a627842",
              "id": 1405,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "mint",
              "nameLocation": "1798:4:8",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1401,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1400,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "1811:2:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1405,
                    "src": "1803:10:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1399,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1803:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1802:12:8"
              },
              "returnParameters": {
                "id": 1404,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1403,
                    "mutability": "mutable",
                    "name": "liquidity",
                    "nameLocation": "1838:9:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1405,
                    "src": "1833:14:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1402,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1833:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1832:16:8"
              },
              "scope": 1418,
              "src": "1789:60:8",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "functionSelector": "89afcb44",
              "id": 1412,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "burn",
              "nameLocation": "1863:4:8",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1408,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1407,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "1876:2:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1412,
                    "src": "1868:10:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1406,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1868:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1867:12:8"
              },
              "returnParameters": {
                "id": 1411,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1410,
                    "mutability": "mutable",
                    "name": "amount0",
                    "nameLocation": "1903:7:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1412,
                    "src": "1898:12:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1409,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1898:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1897:14:8"
              },
              "scope": 1418,
              "src": "1854:58:8",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "functionSelector": "c4d66de8",
              "id": 1417,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "initialize",
              "nameLocation": "2098:10:8",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1415,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1414,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 1417,
                    "src": "2109:7:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1413,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2109:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2108:9:8"
              },
              "returnParameters": {
                "id": 1416,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2126:0:8"
              },
              "scope": 1418,
              "src": "2089:38:8",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "scope": 1419,
          "src": "26:2103:8",
          "usedErrors": []
        }
      ],
      "src": "0:2130:8"
    },
    "legacyAST": {
      "absolutePath": "project:/contracts/interfaces/IRainbowStake.sol",
      "exportedSymbols": {
        "IRainbowStake": [
          1418
        ]
      },
      "id": 1419,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1365,
          "literals": [
            "solidity",
            ">=",
            "0.5",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:8"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "interface",
          "fullyImplemented": false,
          "id": 1418,
          "linearizedBaseContracts": [
            1418
          ],
          "name": "IRainbowStake",
          "nameLocation": "36:13:8",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "anonymous": false,
              "id": 1371,
              "name": "Mint",
              "nameLocation": "1195:4:8",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 1370,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1367,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "sender",
                    "nameLocation": "1216:6:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1371,
                    "src": "1200:22:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1366,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1200:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1369,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amount0",
                    "nameLocation": "1229:7:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1371,
                    "src": "1224:12:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1368,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1224:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1199:38:8"
              },
              "src": "1189:49:8"
            },
            {
              "anonymous": false,
              "id": 1379,
              "name": "Burn",
              "nameLocation": "1249:4:8",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 1378,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1373,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "sender",
                    "nameLocation": "1270:6:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1379,
                    "src": "1254:22:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1372,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1254:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1375,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amount0",
                    "nameLocation": "1283:7:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1379,
                    "src": "1278:12:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1374,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1278:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1377,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "1308:2:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1379,
                    "src": "1292:18:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1376,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1292:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1253:58:8"
              },
              "src": "1243:69:8"
            },
            {
              "anonymous": false,
              "id": 1383,
              "name": "Sync",
              "nameLocation": "1519:4:8",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 1382,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1381,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "reserve0",
                    "nameLocation": "1529:8:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1383,
                    "src": "1524:13:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1380,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1524:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1523:15:8"
              },
              "src": "1513:26:8"
            },
            {
              "functionSelector": "c45a0155",
              "id": 1388,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "factory",
              "nameLocation": "1621:7:8",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1384,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1628:2:8"
              },
              "returnParameters": {
                "id": 1387,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1386,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 1388,
                    "src": "1654:7:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1385,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1654:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1653:9:8"
              },
              "scope": 1418,
              "src": "1612:51:8",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "functionSelector": "0dfe1681",
              "id": 1393,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "token0",
              "nameLocation": "1677:6:8",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1389,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1683:2:8"
              },
              "returnParameters": {
                "id": 1392,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1391,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 1393,
                    "src": "1709:7:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1390,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1709:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1708:9:8"
              },
              "scope": 1418,
              "src": "1668:50:8",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "functionSelector": "59bf5d39",
              "id": 1398,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "getReserve",
              "nameLocation": "1732:10:8",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1394,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1742:2:8"
              },
              "returnParameters": {
                "id": 1397,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1396,
                    "mutability": "mutable",
                    "name": "reserve0",
                    "nameLocation": "1773:8:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1398,
                    "src": "1768:13:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1395,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1768:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1767:15:8"
              },
              "scope": 1418,
              "src": "1723:60:8",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "functionSelector": "6a627842",
              "id": 1405,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "mint",
              "nameLocation": "1798:4:8",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1401,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1400,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "1811:2:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1405,
                    "src": "1803:10:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1399,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1803:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1802:12:8"
              },
              "returnParameters": {
                "id": 1404,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1403,
                    "mutability": "mutable",
                    "name": "liquidity",
                    "nameLocation": "1838:9:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1405,
                    "src": "1833:14:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1402,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1833:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1832:16:8"
              },
              "scope": 1418,
              "src": "1789:60:8",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "functionSelector": "89afcb44",
              "id": 1412,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "burn",
              "nameLocation": "1863:4:8",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1408,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1407,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "1876:2:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1412,
                    "src": "1868:10:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1406,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1868:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1867:12:8"
              },
              "returnParameters": {
                "id": 1411,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1410,
                    "mutability": "mutable",
                    "name": "amount0",
                    "nameLocation": "1903:7:8",
                    "nodeType": "VariableDeclaration",
                    "scope": 1412,
                    "src": "1898:12:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1409,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1898:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1897:14:8"
              },
              "scope": 1418,
              "src": "1854:58:8",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "functionSelector": "c4d66de8",
              "id": 1417,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "initialize",
              "nameLocation": "2098:10:8",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1415,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1414,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 1417,
                    "src": "2109:7:8",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1413,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2109:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2108:9:8"
              },
              "returnParameters": {
                "id": 1416,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2126:0:8"
              },
              "scope": 1418,
              "src": "2089:38:8",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "scope": 1419,
          "src": "26:2103:8",
          "usedErrors": []
        }
      ],
      "src": "0:2130:8"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.7+commit.e28d00a7.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "3.4.3",
    "updatedAt": "2021-10-01T03:53:48.509Z",
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }
];