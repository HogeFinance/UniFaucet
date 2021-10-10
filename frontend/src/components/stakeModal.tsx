import { Button, Modal } from 'react-bootstrap'
import React, {FocusEvent, useState} from 'react'
import styled from 'styled-components'
import {iunifaucet, standardtoken} from "../contractabi";

interface Props {
  showModal: boolean
  handleClose: () => void
  getAccountInfo: () => Promise<any>
  faucetAddr: string
}

const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: auto;
  gap: 25px 0;
  font-family: 'Roboto', sans-serif;
`
const Labels = styled.div``
const Label = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  height: 30px;
`
const Inputs = styled.div``
const InputWrapper = styled.div`
  margin-bottom: 5px;
  input {
    width: 100%;
  }
`

const StakeModal: React.FC<Props> = ({
  showModal,
  handleClose,
  getAccountInfo,
  faucetAddr
}) => {
  const [tokenAddress, setTokenAddress] = useState('')
  const [liquidityAddAmt, setLiquidityAddAmt] = useState('')

  const handleTokenChange = (e: FocusEvent<HTMLInputElement>) =>
    setTokenAddress(e.target.value)

  const handleLiquidityAmtBlur = (e: FocusEvent<HTMLInputElement>) =>
    setLiquidityAddAmt(e.target.value)

  // addLiquidity(address tokenA, uint amountADesired, address to) external returns (uint liquidity);
  const faucetAddLiquidity = async () => {
    let [web3, account] = await getAccountInfo()
    let unifaucetInstance = new web3.eth.Contract(iunifaucet, faucetAddr)

    let response = await unifaucetInstance.methods
      .addLiquidity(tokenAddress, liquidityAddAmt, account)
      .send({ from: account })
  }

  const approve = async () => {
    // Add some input checks here
    if (!liquidityAddAmt) return

    let [web3, account] = await getAccountInfo()
    let standardTokenInstance = new web3.eth.Contract(standardtoken, tokenAddress)

    let response = await standardTokenInstance.methods
        .approve(faucetAddr, liquidityAddAmt)
        .send({ from: account })
  }

  const faucetRemoveLiquidity = async () => {
    let [web3, account] = await getAccountInfo()
    let unifaucetInstance = new web3.eth.Contract(iunifaucet, faucetAddr)

    let response = await unifaucetInstance.methods
        .removeLiquidity(tokenAddress, liquidityAddAmt, account)
        .send({ from: account })
  }

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Stake Tokens</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputsContainer>
          <Labels>
            <Label>Token Address:</Label>
            <Label>Amount:</Label>
          </Labels>
          <Inputs>
            <InputWrapper>
              <input
                  type="text"
                  name="tokenAddrInput"
                  id="tokenAddr"
                  list="verifiedtokens"
                  onBlur={handleTokenChange}
              ></input>
              <datalist id="verifiedtokens">
                <option value="0x0">HOGE</option>
                <option value="0x15cEd5c972E6960A6e6A6B2B8BAB10C21fa6a102">
                  Test Token
                </option>
              </datalist>
            </InputWrapper>
            <InputWrapper>
              <input
                  type="text"
                  name="amountInput"
                  id="amountAddr"
                  onBlur={handleLiquidityAmtBlur}
              ></input>
            </InputWrapper>
          </Inputs>
        </InputsContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={faucetRemoveLiquidity}>
          Remove Liquidity
        </Button>
        <Button variant="secondary" onClick={approve}>
          Approve
        </Button>
        <Button variant="primary" onClick={faucetAddLiquidity}>
          Add Liquidity
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default StakeModal
