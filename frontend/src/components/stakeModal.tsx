import { Button, Modal } from 'react-bootstrap'
import React, {FocusEvent, useState} from 'react'
import styled from 'styled-components'
import {iunifaucet, standardtoken, irainbowerc20, irainbowfactory} from "../contractabi";

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
  font-family: 'Maven Pro', sans-serif;
`
const Labels = styled.div`
  font-family: 'Maven Pro', sans-serif;
`
const Label = styled.div`
  font-family: 'Maven Pro', sans-serif;
  display: flex;
  align-items: right;
  margin-bottom: 5px;
  margin-top: 5px;
  height: 30px;
`
const LabelAmount = styled.div`
  font-family: 'Maven Pro', sans-serif;
  display: flex;
  align-items: right;
  margin-bottom: 5px;
  margin-top: 15px;
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
  const factoryAddr = "0xCD6A5c3aEfe7808Cd357Cd0F83E5BeA7C4153f0C"
  const [tokenAddress, setTokenAddress] = useState('')
  const [liquidityAddAmt, setLiquidityAddAmt] = useState('')
  const [approvalButtonAdd, setApprovalButtonAdd] = useState('Approve')
  const [approvalButtonRemove, setApprovalButtomRem] = useState('Approve')

  const handleTokenChange = (e: FocusEvent<HTMLInputElement>) =>
    setTokenAddress(e.target.value)

  const handleLiquidityAmtBlur = (e: FocusEvent<HTMLInputElement>) =>
    setLiquidityAddAmt(e.target.value)

  // addLiquidity(address tokenA, uint amountADesired, address to) external returns (uint liquidity);
  const faucetAddLiquidity = async () => {
    let [web3, account] = await getAccountInfo()
    let unifaucetInstance = new web3.eth.Contract(iunifaucet, faucetAddr)

    try {
      let response = await unifaucetInstance.methods
          .addLiquidity(tokenAddress, liquidityAddAmt, account)
          .send({from: account})
    }
    catch(e) {
      const result = (e as Error).message
      alert(result)
    }
  }

  const approve = async () => {
    // Add some input checks here
    let [web3, account] = await getAccountInfo()
    let standardTokenInstance = new web3.eth.Contract(standardtoken, tokenAddress)

    try {
      let response = await standardTokenInstance.methods
          .approve(faucetAddr, liquidityAddAmt)
          .send({from: account})

          if(response.status === true){
            setApprovalButtonAdd('Approved!')
          }
    }
    catch(e) {
      const result = (e as Error).message
      alert(result)
    }
  }

  const approveWithdrawal = async () => {
    let [web3, account] = await getAccountInfo()
    let factoryInstance = await new web3.eth.Contract(irainbowfactory, factoryAddr)
    try {
      let stakeAddr = await factoryInstance.methods.getStake(tokenAddress).call()
      let stakeInstance = await new web3.eth.Contract(irainbowerc20, stakeAddr)
      let response = await stakeInstance.methods
          .approve(faucetAddr, liquidityAddAmt)
          .send({from: account})

          if(response.status === true){
            setApprovalButtomRem('Approved!')
          }
    }
    catch(e) {
      const result = (e as Error).message
      alert(result)
    }
  }

  const faucetRemoveLiquidity = async () => {
    let [web3, account] = await getAccountInfo()
    let unifaucetInstance = new web3.eth.Contract(iunifaucet, faucetAddr)

    try {
      let response = await unifaucetInstance.methods
          .removeLiquidity(tokenAddress, liquidityAddAmt, account)
          .send({from: account})

    }
    catch(e) {
      const result = (e as Error).message
      alert(result)
    }
  }

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton >
        <Modal.Title>Stake/Unstake Tokens</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputsContainer>
          <Labels>
            <Label>Token Address:</Label>
            <LabelAmount>Amount:</LabelAmount>
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
      <div>Add</div>
      <Modal.Footer>
        <Button variant="secondary" onClick={approve}>
        {approvalButtonAdd}
        </Button>
        <Button variant="primary" onClick={faucetAddLiquidity}>
          Add Liquidity
        </Button>
      </Modal.Footer>
      <div>Remove</div>
      <Modal.Footer>
        <Button variant="secondary" onClick={approveWithdrawal}>
          {approvalButtonRemove}
        </Button>
        <Button variant="danger" onClick={faucetRemoveLiquidity}>
          Remove Liquidity
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default StakeModal
