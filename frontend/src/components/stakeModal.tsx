import { Button, Modal } from 'react-bootstrap'
import React, { FocusEvent } from 'react'
import styled from 'styled-components'

interface Props {
  showModal: boolean
  handleClose: () => void
  handleLiquidityBlur: (e: FocusEvent<HTMLInputElement>) => void
  handleLiquidityAmtBlur: (e: FocusEvent<HTMLInputElement>) => void
}

const Tagline = styled.span`
  margin-bottom: 20px;
  display: block;
`
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
  handleLiquidityAmtBlur,
  handleLiquidityBlur,
}) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Stake Tokens</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tagline>Stake Your Tokens in the Faucet</Tagline>
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
                onBlur={handleLiquidityBlur}
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
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default StakeModal
