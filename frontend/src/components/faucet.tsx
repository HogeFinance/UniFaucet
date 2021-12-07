import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import CreatableSelect from 'react-select/creatable'
import { ActionMeta } from 'react-select'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { standardtoken, iunifaucet } from '../contractabi'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import faucetlogo from '../img/faucet.png'
import stakeButton from '../img/stake_btn.svg'
import poweredBy from '../img/credit.svg'
import StakeModal from './stakeModal'
import Header from './header'
import {
  Wrapper,
  Heading,
  Title,
  SubTitle,
  FaucetSection,
  FaucetTop,
  FaucetMain,
  StakeButton,
  FaucetVisual,
  FaucetBottom,
  CollectionArea,
  OutputValue,
  PrimaryButton,
  ButtonLabel,
  PoweredBy,
} from './styledComponents'

function DefaultToken() {
  let params = window.location.search
  let url_params = new URLSearchParams(params)

  let defaultToken = {
    label: 'HOGE-BSC 0xa4FFfc757e8c4F24E7b209C033c123D20983Ad40',
    value: '0xa4FFfc757e8c4F24E7b209C033c123D20983Ad40',
  }

  if (
    url_params.get('token') &&
    url_params.get('token')!.match(/^0x[a-fA-F0-9]{40}$/)
  ) {
    defaultToken = {
      label: url_params.get('token') || '',
      value: url_params.get('token') || '',
    }
  }

  return defaultToken
}

// BSC list
var tokenlist = [
  {
    label: 'FOXGIRL 0x8aae380fc7f085070c4bb05b9481f972cb460578',
    value: '0x8aae380fc7f085070c4bb05b9481f972cb460578',
  },
  {
    label: 'HOGE-BSC 0xa4FFfc757e8c4F24E7b209C033c123D20983Ad40',
    value: '0xa4FFfc757e8c4F24E7b209C033c123D20983Ad40',
  },
  {
    label: 'MAINST 0x8fc1a944c149762b6b578a06c0de2abd6b7d2b89',
    value: '0x8fc1a944c149762b6b578a06c0de2abd6b7d2b89',
  },
  {
    label: 'SFM 0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3',
    value: '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3',
  },
  {
    label: 'BABYDOGE 0xc748673057861a797275cd8a068abb95a902e8de',
    value: '0xc748673057861a797275cd8a068abb95a902e8de',
  },
  {
    label: 'ASS 0x7c63f96feafacd84e75a594c00fac3693386fbf0',
    value: '0x7c63f96feafacd84e75a594c00fac3693386fbf0',
  },
  {
    label: 'TT357 0xCF36F1F750109C5047782b5da0200f6723037Db1',
    value: '0xCF36F1F750109C5047782b5da0200f6723037Db1',
  },
]

const chainLookup: Record<string, string> = {
  '1': 'Ethereum Mainnet',
  '4': 'Ethereum Testnet Rinkeby',
  '56': 'Binance Smart Chain',
  '100': 'xDai Chain',
  '137': 'Polygon Mainnet',
  '200': 'Arbitrum on xDai',
  '250': 'Fantom Opera',
  '4002': 'Fantom Testnet',
  '42161': 'Arbitrum One',
  '421611': 'Arbitrum Testnet Rinkeby',
}

const providerOptions = {
  injected: {
    display: {
      logo: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM1NSIgdmlld0JveD0iMCAwIDM5NyAzNTUiIHdpZHRoPSIzOTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTIuMDA0NzE3IDEzLjgxMDE5OHYtMTguMDU5NDlsNC4yNDUyODMtNC4yNDkyOTJoMjkuNzE2OTgydjIxLjI0NjQ1OSAxNC44NzI1MjNoLTMxLjgzOTYyNGwtMzkuMjY4ODY4LTE2Ljk5NzE2OXoiIGZpbGw9IiNjZGJkYjIiLz48cGF0aCBkPSJtMTk5LjUyODMwNSAzMjcuMTk1NDcyIDUwLjk0MzM5NyAxMy44MTAxOTh2LTE4LjA1OTQ5bDQuMjQ1MjgzLTQuMjQ5MjkyaDI5LjcxNjk4MXYyMS4yNDY0NTkgMTQuODcyNTIzaC0zMS44Mzk2MjNsLTM5LjI2ODg2OC0xNi45OTcxNjl6IiBmaWxsPSIjY2RiZGIyIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA0ODMuOTYyMjcgMCkiLz48cGF0aCBkPSJtMTcwLjg3MjY0NCAyODcuODg5NTIzLTQuMjQ1MjgzIDM1LjA1NjY1NyA1LjMwNjYwNC00LjI0OTI5Mmg1NS4xODg2OGw2LjM2NzkyNSA0LjI0OTI5Mi00LjI0NTI4NC0zNS4wNTY2NTctOC40OTA1NjUtNS4zMTE2MTUtNDIuNDUyODMyIDEuMDYyMzIzeiIgZmlsbD0iIzM5MzkzOSIvPjxwYXRoIGQ9Im0xNDIuMjE2OTg0IDUwLjk5MTUwMjIgMjUuNDcxNjk4IDU5LjQ5MDA4NTggMTEuNjc0NTI4IDE3My4xNTg2NDNoNDEuMzkxNTExbDEyLjczNTg0OS0xNzMuMTU4NjQzIDIzLjM0OTA1Ni01OS40OTAwODU4eiIgZmlsbD0iI2Y4OWMzNSIvPjxwYXRoIGQ9Im0zMC43NzgzMDIzIDE4MS42NTcyMjYtMjkuNzE2OTgxNTMgODYuMDQ4MTYxIDc0LjI5MjQ1MzkzLTQuMjQ5MjkzaDQ3Ljc1OTQzNDN2LTM3LjE4MTMwM2wtMi4xMjI2NDEtNzYuNDg3MjUzLTEwLjYxMzIwOCA4LjQ5ODU4M3oiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtODcuMDI4MzAzMiAxOTEuMjE4MTM0IDg3LjAyODMwMjggMi4xMjQ2NDYtOS41NTE4ODYgNDQuNjE3NTYzLTQxLjM5MTUxMS0xMC42MjMyMjl6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkyLjI4MDQ1NyAzNi4wODQ5MDU4IDMzLjk5NDMzNHYzMy45OTQzMzR6IiBmaWxsPSIjZWE4ZDNhIi8+PHBhdGggZD0ibTEyMy4xMTMyMDkgMjI3LjMzNzExNCA0Mi40NTI4MzEgMTAuNjIzMjI5IDEzLjc5NzE3IDQ1LjY3OTg4OC05LjU1MTg4NiA1LjMxMTYxNS00Ni42OTgxMTUtMjcuNjIwMzk4eiIgZmlsbD0iI2Y4OWQzNSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDI2MS4zMzE0NDgtOC40OTA1NjUgNjUuODY0MDI0IDU2LjI1LTM5LjMwNTk0OXoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTc0LjA1NjYwNiAxOTMuMzQyNzggNS4zMDY2MDQgOTAuMjk3NDUxLTE1LjkxOTgxMi00Ni4yMTEwNDl6IiBmaWxsPSIjZWE4ZTNhIi8+PHBhdGggZD0ibTc0LjI5MjQ1MzkgMjYyLjM5Mzc3MSA0OC44MjA3NTUxLTEuMDYyMzIzLTguNDkwNTY1IDY1Ljg2NDAyNHoiIGZpbGw9IiNkODdjMzAiLz48cGF0aCBkPSJtMjQuNDEwMzc3NyAzNTUuODc4MTkzIDkwLjIxMjI2NjMtMjguNjgyNzIxLTQwLjMzMDE5MDEtNjQuODAxNzAxLTczLjIzMTEzMzEzIDUuMzExNjE2eiIgZmlsbD0iI2ViOGYzNSIvPjxwYXRoIGQ9Im0xNjcuNjg4NjgyIDExMC40ODE1ODgtNDUuNjM2NzkzIDM4LjI0MzYyNy0zNS4wMjM1ODU4IDQyLjQ5MjkxOSA4Ny4wMjgzMDI4IDMuMTg2OTY5eiIgZmlsbD0iI2U4ODIxZSIvPjxwYXRoIGQ9Im0xMTQuNjIyNjQ0IDMyNy4xOTU0NzIgNTYuMjUtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIvPjxwYXRoIGQ9Im0yMjkuMjQ1Mjg2IDMyNy4xOTU0NzIgNTUuMTg4NjgtMzkuMzA1OTQ5LTQuMjQ1MjgzIDMzLjk5NDMzNHYxOS4xMjE4MTNsLTM4LjIwNzU0OC03LjQzNjI2eiIgZmlsbD0iI2RmY2VjMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNTEzLjY3OTI1MiAwKSIvPjxwYXRoIGQ9Im0xMzIuNjY1MDk2IDIxMi40NjQ1OTMtMTEuNjc0NTI4IDI0LjQzMzQyNyA0MS4zOTE1MS0xMC42MjMyMjl6IiBmaWxsPSIjMzkzOTM5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyODMuMzcyNjQ2IDApIi8+PHBhdGggZD0ibTIzLjM0OTA1NyAxLjA2MjMyMjk2IDE0NC4zMzk2MjUgMTA5LjQxOTI2NTA0LTI0LjQxMDM3OC01OS40OTAwODU4eiIgZmlsbD0iI2U4OGYzNSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5Ni0xOS4xMDM3NzM5MiA1OC40Mjc3NjI5NCAxMC42MTMyMDc3MiA2My43MzkzNzgxLTcuNDI5MjQ1NDEgNC4yNDkyOTIgMTAuNjEzMjA3NzEgOS41NjA5MDYtOC40OTA1NjYxNyA3LjQzNjI2MSAxMS42NzQ1Mjg0NyAxMC42MjMyMjktNy40MjkyNDU0IDYuMzczOTM4IDE2Ljk4MTEzMjMgMjEuMjQ2NDU5IDc5LjU5OTA1NzctMjQuNDMzNDI4YzM4LjkxNTA5Ni0zMS4xNjE0NzMgNTguMDE4ODY5LTQ3LjA5NjMxOCA1Ny4zMTEzMjItNDcuODA0NTMzLS43MDc1NDgtLjcwODIxNS00OC44MjA3NTYtMzcuMTgxMzAzNi0xNDQuMzM5NjI1LTEwOS40MTkyNjUwNHoiIGZpbGw9IiM4ZTVhMzAiLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAzOTkuMDU2NjExIDApIj48cGF0aCBkPSJtMzAuNzc4MzAyMyAxODEuNjU3MjI2LTI5LjcxNjk4MTUzIDg2LjA0ODE2MSA3NC4yOTI0NTM5My00LjI0OTI5M2g0Ny43NTk0MzQzdi0zNy4xODEzMDNsLTIuMTIyNjQxLTc2LjQ4NzI1My0xMC42MTMyMDggOC40OTg1ODN6IiBmaWxsPSIjZjg5ZDM1Ii8+PHBhdGggZD0ibTg3LjAyODMwMzIgMTkxLjIxODEzNCA4Ny4wMjgzMDI4IDIuMTI0NjQ2LTkuNTUxODg2IDQ0LjYxNzU2My00MS4zOTE1MTEtMTAuNjIzMjI5eiIgZmlsbD0iI2Q4N2MzMCIvPjxwYXRoIGQ9Im04Ny4wMjgzMDMyIDE5Mi4yODA0NTcgMzYuMDg0OTA1OCAzMy45OTQzMzR2MzMuOTk0MzM0eiIgZmlsbD0iI2VhOGQzYSIvPjxwYXRoIGQ9Im0xMjMuMTEzMjA5IDIyNy4zMzcxMTQgNDIuNDUyODMxIDEwLjYyMzIyOSAxMy43OTcxNyA0NS42Nzk4ODgtOS41NTE4ODYgNS4zMTE2MTUtNDYuNjk4MTE1LTI3LjYyMDM5OHoiIGZpbGw9IiNmODlkMzUiLz48cGF0aCBkPSJtMTIzLjExMzIwOSAyNjEuMzMxNDQ4LTguNDkwNTY1IDY1Ljg2NDAyNCA1NS4xODg2OC0zOC4yNDM2MjZ6IiBmaWxsPSIjZWI4ZjM1Ii8+PHBhdGggZD0ibTE3NC4wNTY2MDYgMTkzLjM0Mjc4IDUuMzA2NjA0IDkwLjI5NzQ1MS0xNS45MTk4MTItNDYuMjExMDQ5eiIgZmlsbD0iI2VhOGUzYSIvPjxwYXRoIGQ9Im03NC4yOTI0NTM5IDI2Mi4zOTM3NzEgNDguODIwNzU1MS0xLjA2MjMyMy04LjQ5MDU2NSA2NS44NjQwMjR6IiBmaWxsPSIjZDg3YzMwIi8+PHBhdGggZD0ibTI0LjQxMDM3NzcgMzU1Ljg3ODE5MyA5MC4yMTIyNjYzLTI4LjY4MjcyMS00MC4zMzAxOTAxLTY0LjgwMTcwMS03My4yMzExMzMxMyA1LjMxMTYxNnoiIGZpbGw9IiNlYjhmMzUiLz48cGF0aCBkPSJtMTY3LjY4ODY4MiAxMTAuNDgxNTg4LTQ1LjYzNjc5MyAzOC4yNDM2MjctMzUuMDIzNTg1OCA0Mi40OTI5MTkgODcuMDI4MzAyOCAzLjE4Njk2OXoiIGZpbGw9IiNlODgyMWUiLz48cGF0aCBkPSJtMTMyLjY2NTA5NiAyMTIuNDY0NTkzLTExLjY3NDUyOCAyNC40MzM0MjcgNDEuMzkxNTEtMTAuNjIzMjI5eiIgZmlsbD0iIzM5MzkzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjgzLjM3MjY0NiAwKSIvPjxwYXRoIGQ9Im0yMy4zNDkwNTcgMS4wNjIzMjI5NiAxNDQuMzM5NjI1IDEwOS40MTkyNjUwNC0yNC40MTAzNzgtNTkuNDkwMDg1OHoiIGZpbGw9IiNlODhmMzUiLz48cGF0aCBkPSJtMjMuMzQ5MDU3IDEuMDYyMzIyOTYtMTkuMTAzNzczOTIgNTguNDI3NzYyOTQgMTAuNjEzMjA3NzIgNjMuNzM5Mzc4MS03LjQyOTI0NTQxIDQuMjQ5MjkyIDEwLjYxMzIwNzcxIDkuNTYwOTA2LTguNDkwNTY2MTcgNy40MzYyNjEgMTEuNjc0NTI4NDcgMTAuNjIzMjI5LTcuNDI5MjQ1NCA2LjM3MzkzOCAxNi45ODExMzIzIDIxLjI0NjQ1OSA3OS41OTkwNTc3LTI0LjQzMzQyOGMzOC45MTUwOTYtMzEuMTYxNDczIDU4LjAxODg2OS00Ny4wOTYzMTggNTcuMzExMzIyLTQ3LjgwNDUzMy0uNzA3NTQ4LS43MDgyMTUtNDguODIwNzU2LTM3LjE4MTMwMzYtMTQ0LjMzOTYyNS0xMDkuNDE5MjY1MDR6IiBmaWxsPSIjOGU1YTMwIi8+PC9nPjwvZz48L3N2Zz4=',
      name: 'Metamask Wallet',
      description: 'Connect with the provider in your Browser',
    },
    package: null,
  },
  walletconnect: {
    display: {
      logo: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAlIiBjeT0iNTAlIiByPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1ZDlkZjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDZmZmYiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTI1NiAwYzE0MS4zODQ4OTYgMCAyNTYgMTE0LjYxNTEwNCAyNTYgMjU2cy0xMTQuNjE1MTA0IDI1Ni0yNTYgMjU2LTI1Ni0xMTQuNjE1MTA0LTI1Ni0yNTYgMTE0LjYxNTEwNC0yNTYgMjU2LTI1NnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtNjQuNjkxNzU1OCAzNy43MDg4Mjk4YzUxLjUzMjgwNzItNTAuMjc4NDM5NyAxMzUuMDgzOTk0Mi01MC4yNzg0Mzk3IDE4Ni42MTY3OTkyIDBsNi4yMDIwNTcgNi4wNTEwOTA2YzIuNTc2NjQgMi41MTM5MjE4IDIuNTc2NjQgNi41ODk3OTQ4IDAgOS4xMDM3MTc3bC0yMS4yMTU5OTggMjAuNjk5NTc1OWMtMS4yODgzMjEgMS4yNTY5NjE5LTMuMzc3MSAxLjI1Njk2MTktNC42NjU0MjEgMGwtOC41MzQ3NjYtOC4zMjcwMjA1Yy0zNS45NTA1NzMtMzUuMDc1NDk2Mi05NC4yMzc5NjktMzUuMDc1NDk2Mi0xMzAuMTg4NTQ0IDBsLTkuMTQwMDI4MiA4LjkxNzU1MTljLTEuMjg4MzIxNyAxLjI1Njk2MDktMy4zNzcxMDE2IDEuMjU2OTYwOS00LjY2NTQyMDggMGwtMjEuMjE1OTk3My0yMC42OTk1NzU5Yy0yLjU3NjY0MDMtMi41MTM5MjI5LTIuNTc2NjQwMy02LjU4OTc5NTggMC05LjEwMzcxNzd6bTIzMC40OTM0ODUyIDQyLjgwODkxMTcgMTguODgyMjc5IDE4LjQyMjcyNjJjMi41NzY2MjcgMi41MTM5MTAzIDIuNTc2NjQyIDYuNTg5NzU5My4wMDAwMzIgOS4xMDM2ODYzbC04NS4xNDE0OTggODMuMDcwMzU4Yy0yLjU3NjYyMyAyLjUxMzk0MS02Ljc1NDE4MiAyLjUxMzk2OS05LjMzMDg0LjAwMDA2Ni0uMDAwMDEtLjAwMDAxLS4wMDAwMjMtLjAwMDAyMy0uMDAwMDMzLS4wMDAwMzRsLTYwLjQyODI1Ni01OC45NTc0NTFjLS42NDQxNi0uNjI4NDgxLTEuNjg4NTUtLjYyODQ4MS0yLjMzMjcxIDAtLjAwMDAwNC4wMDAwMDQtLjAwMDAwOC4wMDAwMDctLjAwMDAxMi4wMDAwMTFsLTYwLjQyNjk2ODMgNTguOTU3NDA4Yy0yLjU3NjYxNDEgMi41MTM5NDctNi43NTQxNzQ2IDIuNTEzOTktOS4zMzA4NDA4LjAwMDA5Mi0uMDAwMDE1MS0uMDAwMDE0LS4wMDAwMzA5LS4wMDAwMjktLjAwMDA0NjctLjAwMDA0NmwtODUuMTQzODY3NzQtODMuMDcxNDYzYy0yLjU3NjYzOTI4LTIuNTEzOTIxLTIuNTc2NjM5MjgtNi41ODk3OTUgMC05LjEwMzcxNjNsMTguODgyMzEyNjQtMTguNDIyNjk1NWMyLjU3NjYzOTMtMi41MTM5MjIyIDYuNzU0MTk5My0yLjUxMzkyMjIgOS4zMzA4Mzk3IDBsNjAuNDI5MTM0NyA1OC45NTgyNzU4Yy42NDQxNjA4LjYyODQ4IDEuNjg4NTQ5NS42Mjg0OCAyLjMzMjcxMDMgMCAuMDAwMDA5NS0uMDAwMDA5LjAwMDAxODItLjAwMDAxOC4wMDAwMjc3LS4wMDAwMjVsNjAuNDI2MTA2NS01OC45NTgyNTA4YzIuNTc2NTgxLTIuNTEzOTggNi43NTQxNDItMi41MTQwNzQzIDkuMzMwODQtLjAwMDIxMDMuMDAwMDM3LjAwMDAzNTQuMDAwMDcyLjAwMDA3MDkuMDAwMTA3LjAwMDEwNjNsNjAuNDI5MDU2IDU4Ljk1ODM1NDhjLjY0NDE1OS42Mjg0NzkgMS42ODg1NDkuNjI4NDc5IDIuMzMyNzA5IDBsNjAuNDI4MDc5LTU4Ljk1NzE5MjVjMi41NzY2NC0yLjUxMzkyMzEgNi43NTQxOTktMi41MTM5MjMxIDkuMzMwODM5IDB6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4IDE2MCkiLz48L2c+PC9zdmc+',
      name: 'Wallet Connect',
      description: 'Scan qrcode with your mobile wallet',
    },
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        3: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        56: 'https://bsc-dataseed.binance.org/',
        100: 'https://rpc.xdaichain.com/',
        137: 'https://polygon-rpc.com/',
        200: 'Arbitrum on xDai',
        250: 'https://rpc.ftm.tools/',
        4002: 'Fantom Testnet',
        42161: 'Arbitrum One',
        421611: 'Arbitrum Testnet Rinkeby',
      },
    },
  },
}

const Faucet: React.FC<{}> = () => {
  // Changes based on network
  let faucetAddr = '0x42f573C35dF9AF2822756E43ccccD6ba726b165C'
  let balance = null

  // Logic code
  const [showModal, setShow] = useState(false)
  const [outputAmount, setOutputAmount] = useState('1.000.000.000.0000.00')
  const [connectVariantColor, setConnectVariantColor] = useState('danger')
  const [connectButtonText, setConnectButtonText] = useState('Not Connected')
  const [account, setAccount] = useState(null)
  const [networkName, setNetworkNameText] = useState('')
  const [blinker_class, setBlinker] = useState('blink_me')

  // Set initial token to HOGE
  const [selectedToken, setSelectedToken] = useState<
    | {
        label: string
        value: string
      }
    | undefined
  >(DefaultToken())

  let provider = null
  let web3: any = null

  const handleClose = () => setShow(false)
  const handleShow = () => {
    getAccountInfo()
    setShow(true)
  }

  const calculateDrip = (balance: string, decimals: string) => {
    return (parseFloat(balance) / 10 ** parseInt(decimals)) * 0.01
  }

  const reportError = (e: unknown) => {
    const errorMsg = (e as Error).message
    toast.error(errorMsg)
  }

  const updateDrip = async (
    token: { label: string; value: string } | undefined
  ) => {
    if (!token) {
      return
    }

    try {
      const unifaucetInstance = await new web3.eth.Contract(
        iunifaucet,
        faucetAddr
      )

      const tokenInterface = await new web3.eth.Contract(
        standardtoken,
        token?.value
      )
      balance = await unifaucetInstance.methods
        .getAvailableSpend(token?.value)
        .call()
      const tokenSymbol = await tokenInterface.methods.symbol().call()
      const tokenDecimals = await tokenInterface.methods.decimals().call()

      setOutputAmount(
        Number(calculateDrip(balance, tokenDecimals).toPrecision(10)) +
          ' ' +
          tokenSymbol
      )
    } catch (e) {
      toast.error('No Liquidity or Token Address invalid.')
      setOutputAmount('0.00')
    }
  }

  const handleChange = async (
    token: { label: string; value: string } | null,
    actionMeta: ActionMeta<unknown>
  ) => {
    if (actionMeta.action === 'clear') {
      setSelectedToken(undefined)
      return
    } else if (token) {
      // Set selected token to new selection from dropdown
      setSelectedToken(token)
    }

    let [web3, account] = await getAccountInfo()
    if (!token) token = { label: '', value: '' }
    updateDrip(token)
  }

  let web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
  })

  async function getAccountInfo() {
    if (web3 && account) return [web3, account]
    provider = await web3Modal.connect()
    web3 = await new Web3(provider)

    if (web3.eth) {
      let accounts = await web3.eth.getAccounts()
      setAccount(accounts[0])
    }

    if (window.ethereum) {
      window.ethereum.on('networkChanged', function (networkId: string) {
        if (networkId === '56') {
          setNetworkNameText(chainLookup[networkId])
          setBlinker('')
        } else {
          setNetworkNameText('Please use Binance Smart Chain')
        }
      })
    }

    setConnectButtonText('Wallet Connected')
    setConnectVariantColor('success')

    if (provider.networkVersion === '56') {
      updateDrip(selectedToken)
      setNetworkNameText(chainLookup[provider.networkVersion])
      setBlinker('')
    } else {
      setNetworkNameText('Please use Binance Smart Chain')
    }
    return [web3, account]
  }

  // drip(address token, address to) public payable override returns (uint amount)
  const faucetDrip = async () => {
    //need to fix, no need to call this everytime!
    let [web3, account] = await getAccountInfo()
    const dripToken = selectedToken?.value

    if (!account || !dripToken) return
    const unifaucetInstance = await new web3.eth.Contract(
      iunifaucet,
      faucetAddr
    )

    try {
      const feeAmount = await unifaucetInstance.methods.feeAmount
        .call()
        .call(function (error: any, value: any) {
          console.log(value) // Move drip inside here
        })

      let response = await unifaucetInstance.methods
        .drip(dripToken, account)
        .send({ from: account, value: feeAmount })

      if (response.status === true) {
        updateDrip(selectedToken)
      }
    } catch (e) {
      reportError(e)
    }
  }

  // Render

  return (
    <Wrapper>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header
        connectVariantColor={connectVariantColor}
        connectButtonText={connectButtonText}
        connectWallet={getAccountInfo}
      />
      <Heading>
        <Title>[UniFaucet]</Title>
        <SubTitle>A faucet for reflect tokens </SubTitle>
        <br />
        <br />
        <SubTitle className={blinker_class}>&nbsp;{networkName}</SubTitle>
      </Heading>

      <FaucetSection>
        <FaucetTop>
          <Form>
            <Form.Group className="mb-3" controlId="formSelect">
              <CreatableSelect
                styles={{
                  option: (styles, state) => ({
                    ...styles,
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: '#333333',
                    backgroundColor: state.isSelected ? '#b7b7b7' : 'unset',
                    fontWeight: state.isSelected ? 'bolder' : 'normal',
                    ':hover': {
                      backgroundColor: state.isSelected ? '#b7b7b7' : '#cfcfcf',
                    },
                  }),
                  menuList: (styles) => ({
                    ...styles,
                    backgroundColor: '#DCE3F1',
                    borderRadius: 4,
                  }),
                  control: (styles) => ({
                    ...styles,
                    backgroundColor: '#DCE3F1',
                    textAlign: 'left',
                  }),
                }}
                className="formatSelect"
                isClearable
                onChange={handleChange}
                value={selectedToken}
                options={tokenlist}
              />
            </Form.Group>
          </Form>
        </FaucetTop>
        <FaucetMain>
          <StakeButton src={stakeButton} onClick={handleShow} />
          <FaucetVisual src={faucetlogo} />
        </FaucetMain>
        <FaucetBottom>
          <CollectionArea>
            <OutputValue
              value={outputAmount}
              readOnly
              // Set width of Text-Box to length of value (+ 4 characters for spacing) to support really long numerals
              style={{ width: outputAmount.length + 4 + 'ch' }}
            />
            <PrimaryButton onClick={faucetDrip}>
              <ButtonLabel>COLLECT</ButtonLabel>
            </PrimaryButton>
          </CollectionArea>
        </FaucetBottom>
      </FaucetSection>
      <a
        href="https://github.com/HogeFinance/UniFaucet"
        target="_blank"
        rel="noreferrer"
      >
        <PoweredBy src={poweredBy} />
      </a>
      <StakeModal
        showModal={showModal}
        handleClose={handleClose}
        getAccountInfo={getAccountInfo}
        faucetAddr={faucetAddr}
      />
    </Wrapper>
  )
}

export default Faucet
