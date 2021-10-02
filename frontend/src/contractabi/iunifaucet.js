export const iunifaucet = [
    {
        "contractName": "IUniFaucet",
        "abi": [
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
            "inputs": [
              {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amountADesired",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              }
            ],
            "name": "addLiquidity",
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
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "liquidity",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              }
            ],
            "name": "removeLiquidity",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "amountA",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        "metadata": "{\"compiler\":{\"version\":\"0.8.7+commit.e28d00a7\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenA\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amountADesired\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"liquidity\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"factory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenA\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"liquidity\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountA\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/interfaces/IUniFaucet.sol\":\"IUniFaucet\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/interfaces/IUniFaucet.sol\":{\"keccak256\":\"0xec7f03143768a759f7ab562101b2f049f150292353e9d12ec1c62b46403a3921\",\"urls\":[\"bzz-raw://4223d93829ec2b59ec69c33b11cd2af9b939c5cab84def1016d3a5e2917d2891\",\"dweb:/ipfs/Qmdvi9PTTW7D7GNHh1R24CHddbyLq7UyCGwoFxaGDKkhjb\"]}},\"version\":1}",
        "bytecode": "0x",
        "deployedBytecode": "0x",
        "immutableReferences": {},
        "generatedSources": [],
        "deployedGeneratedSources": [],
        "sourceMap": "",
        "deployedSourceMap": "",
        "source": "pragma solidity >=0.6.2;\n\ninterface IUniFaucet {\n    function factory() external view returns (address);\n//    function WETH() external pure returns (address);\n\n    function addLiquidity(\n        address tokenA,\n        uint amountADesired,\n        address to\n    ) external returns (uint liquidity);\n//    function addLiquidityETH(\n//        address token,\n//        uint amountTokenDesired,\n//        uint amountTokenMin,\n//        uint amountETHMin,\n//        address to,\n//        uint deadline\n//    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);\n    function removeLiquidity(\n        address tokenA,\n        uint liquidity,\n        address to\n    ) external returns (uint amountA);\n//    function removeLiquidityETH(\n//        address token,\n//        uint liquidity,\n//        uint amountTokenMin,\n//        uint amountETHMin,\n//        address to,\n//        uint deadline\n//    ) external returns (uint amountToken, uint amountETH);\n//    function removeLiquidityWithPermit(\n//        address tokenA,\n//        address tokenB,\n//        uint liquidity,\n//        uint amountAMin,\n//        uint amountBMin,\n//        address to,\n//        uint deadline,\n//        bool approveMax, uint8 v, bytes32 r, bytes32 s\n//    ) external returns (uint amountA, uint amountB);\n//    function removeLiquidityETHWithPermit(\n//        address token,\n//        uint liquidity,\n//        uint amountTokenMin,\n//        uint amountETHMin,\n//        address to,\n//        uint deadline,\n//        bool approveMax, uint8 v, bytes32 r, bytes32 s\n//    ) external returns (uint amountToken, uint amountETH);\n//    function swapExactTokensForTokens(\n//        uint amountIn,\n//        uint amountOutMin,\n//        address[] calldata path,\n//        address to,\n//        uint deadline\n//    ) external returns (uint[] memory amounts);\n//    function swapTokensForExactTokens(\n//        uint amountOut,\n//        uint amountInMax,\n//        address[] calldata path,\n//        address to,\n//        uint deadline\n//    ) external returns (uint[] memory amounts);\n//    function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)\n//    external\n//    payable\n//    returns (uint[] memory amounts);\n//    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)\n//    external\n//    returns (uint[] memory amounts);\n//    function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)\n//    external\n//    returns (uint[] memory amounts);\n//    function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)\n//    external\n//    payable\n//    returns (uint[] memory amounts);\n//\n//    function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB);\n//    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);\n//    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);\n//    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);\n//    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);\n}\n",
        "sourcePath": "/home/jordoq/rainbowfaucet/contracts/interfaces/IUniFaucet.sol",
        "ast": {
          "absolutePath": "project:/contracts/interfaces/IUniFaucet.sol",
          "exportedSymbols": {
            "IUniFaucet": [
              2056
            ]
          },
          "id": 2057,
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 2028,
              "literals": [
                "solidity",
                ">=",
                "0.6",
                ".2"
              ],
              "nodeType": "PragmaDirective",
              "src": "0:24:11"
            },
            {
              "abstract": false,
              "baseContracts": [],
              "contractDependencies": [],
              "contractKind": "interface",
              "fullyImplemented": false,
              "id": 2056,
              "linearizedBaseContracts": [
                2056
              ],
              "name": "IUniFaucet",
              "nameLocation": "36:10:11",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "functionSelector": "c45a0155",
                  "id": 2033,
                  "implemented": false,
                  "kind": "function",
                  "modifiers": [],
                  "name": "factory",
                  "nameLocation": "62:7:11",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 2029,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "69:2:11"
                  },
                  "returnParameters": {
                    "id": 2032,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2031,
                        "mutability": "mutable",
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "nodeType": "VariableDeclaration",
                        "scope": 2033,
                        "src": "95:7:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2030,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "95:7:11",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "94:9:11"
                  },
                  "scope": 2056,
                  "src": "53:51:11",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "functionSelector": "1b879378",
                  "id": 2044,
                  "implemented": false,
                  "kind": "function",
                  "modifiers": [],
                  "name": "addLiquidity",
                  "nameLocation": "174:12:11",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 2040,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2035,
                        "mutability": "mutable",
                        "name": "tokenA",
                        "nameLocation": "204:6:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2044,
                        "src": "196:14:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2034,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "196:7:11",
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
                        "id": 2037,
                        "mutability": "mutable",
                        "name": "amountADesired",
                        "nameLocation": "225:14:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2044,
                        "src": "220:19:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2036,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "220:4:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 2039,
                        "mutability": "mutable",
                        "name": "to",
                        "nameLocation": "257:2:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2044,
                        "src": "249:10:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2038,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "249:7:11",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "186:79:11"
                  },
                  "returnParameters": {
                    "id": 2043,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2042,
                        "mutability": "mutable",
                        "name": "liquidity",
                        "nameLocation": "289:9:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2044,
                        "src": "284:14:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2041,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "284:4:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "283:16:11"
                  },
                  "scope": 2056,
                  "src": "165:135:11",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "functionSelector": "47fdbc8e",
                  "id": 2055,
                  "implemented": false,
                  "kind": "function",
                  "modifiers": [],
                  "name": "removeLiquidity",
                  "nameLocation": "597:15:11",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 2051,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2046,
                        "mutability": "mutable",
                        "name": "tokenA",
                        "nameLocation": "630:6:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2055,
                        "src": "622:14:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2045,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "622:7:11",
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
                        "id": 2048,
                        "mutability": "mutable",
                        "name": "liquidity",
                        "nameLocation": "651:9:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2055,
                        "src": "646:14:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2047,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "646:4:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 2050,
                        "mutability": "mutable",
                        "name": "to",
                        "nameLocation": "678:2:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2055,
                        "src": "670:10:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2049,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "670:7:11",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "612:74:11"
                  },
                  "returnParameters": {
                    "id": 2054,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2053,
                        "mutability": "mutable",
                        "name": "amountA",
                        "nameLocation": "710:7:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2055,
                        "src": "705:12:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2052,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "705:4:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "704:14:11"
                  },
                  "scope": 2056,
                  "src": "588:131:11",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "external"
                }
              ],
              "scope": 2057,
              "src": "26:3326:11",
              "usedErrors": []
            }
          ],
          "src": "0:3353:11"
        },
        "legacyAST": {
          "absolutePath": "project:/contracts/interfaces/IUniFaucet.sol",
          "exportedSymbols": {
            "IUniFaucet": [
              2056
            ]
          },
          "id": 2057,
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 2028,
              "literals": [
                "solidity",
                ">=",
                "0.6",
                ".2"
              ],
              "nodeType": "PragmaDirective",
              "src": "0:24:11"
            },
            {
              "abstract": false,
              "baseContracts": [],
              "contractDependencies": [],
              "contractKind": "interface",
              "fullyImplemented": false,
              "id": 2056,
              "linearizedBaseContracts": [
                2056
              ],
              "name": "IUniFaucet",
              "nameLocation": "36:10:11",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "functionSelector": "c45a0155",
                  "id": 2033,
                  "implemented": false,
                  "kind": "function",
                  "modifiers": [],
                  "name": "factory",
                  "nameLocation": "62:7:11",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 2029,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "69:2:11"
                  },
                  "returnParameters": {
                    "id": 2032,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2031,
                        "mutability": "mutable",
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "nodeType": "VariableDeclaration",
                        "scope": 2033,
                        "src": "95:7:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2030,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "95:7:11",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "94:9:11"
                  },
                  "scope": 2056,
                  "src": "53:51:11",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "functionSelector": "1b879378",
                  "id": 2044,
                  "implemented": false,
                  "kind": "function",
                  "modifiers": [],
                  "name": "addLiquidity",
                  "nameLocation": "174:12:11",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 2040,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2035,
                        "mutability": "mutable",
                        "name": "tokenA",
                        "nameLocation": "204:6:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2044,
                        "src": "196:14:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2034,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "196:7:11",
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
                        "id": 2037,
                        "mutability": "mutable",
                        "name": "amountADesired",
                        "nameLocation": "225:14:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2044,
                        "src": "220:19:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2036,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "220:4:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 2039,
                        "mutability": "mutable",
                        "name": "to",
                        "nameLocation": "257:2:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2044,
                        "src": "249:10:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2038,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "249:7:11",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "186:79:11"
                  },
                  "returnParameters": {
                    "id": 2043,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2042,
                        "mutability": "mutable",
                        "name": "liquidity",
                        "nameLocation": "289:9:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2044,
                        "src": "284:14:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2041,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "284:4:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "283:16:11"
                  },
                  "scope": 2056,
                  "src": "165:135:11",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "functionSelector": "47fdbc8e",
                  "id": 2055,
                  "implemented": false,
                  "kind": "function",
                  "modifiers": [],
                  "name": "removeLiquidity",
                  "nameLocation": "597:15:11",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 2051,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2046,
                        "mutability": "mutable",
                        "name": "tokenA",
                        "nameLocation": "630:6:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2055,
                        "src": "622:14:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2045,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "622:7:11",
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
                        "id": 2048,
                        "mutability": "mutable",
                        "name": "liquidity",
                        "nameLocation": "651:9:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2055,
                        "src": "646:14:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2047,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "646:4:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 2050,
                        "mutability": "mutable",
                        "name": "to",
                        "nameLocation": "678:2:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2055,
                        "src": "670:10:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2049,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "670:7:11",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "612:74:11"
                  },
                  "returnParameters": {
                    "id": 2054,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2053,
                        "mutability": "mutable",
                        "name": "amountA",
                        "nameLocation": "710:7:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 2055,
                        "src": "705:12:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2052,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "705:4:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "704:14:11"
                  },
                  "scope": 2056,
                  "src": "588:131:11",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "external"
                }
              ],
              "scope": 2057,
              "src": "26:3326:11",
              "usedErrors": []
            }
          ],
          "src": "0:3353:11"
        },
        "compiler": {
          "name": "solc",
          "version": "0.8.7+commit.e28d00a7.Emscripten.clang"
        },
        "networks": {},
        "schemaVersion": "3.4.3",
        "updatedAt": "2021-09-30T01:20:14.493Z",
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




]