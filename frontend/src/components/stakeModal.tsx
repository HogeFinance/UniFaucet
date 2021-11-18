import { Button, Modal } from 'react-bootstrap'
import React, {FocusEvent, useState} from 'react'
import styled from 'styled-components'
import {iunifaucet, standardtoken, irainbowstake, irainbowerc20, irainbowfactory} from "../contractabi";

interface Props {
    showModal: boolean
    handleClose: () => void
    getAccountInfo: () => Promise<any>
    faucetAddr: string
}

let stakeAddress = "";

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
    const factoryAddr = "0x5974C0606000682093C532B5632f294F82B6a90D"
    const [tokenAddress, setTokenAddress] = useState('')
    const [liquidityAddAmt, setLiquidityAddAmt] = useState('')
    const [approvalButtonAdd, setApprovalButtonAdd] = useState('Approve')
    const [approvalButtonRemove, setApprovalButtomRem] = useState('Approve')
    const [stakeButton, setStakeButton] = useState('Create Stake')
    const [stakeDisabled, setSD] = useState('disabled')
    const [approveAddDisabled, setAAD] = useState('disabled')
    const [addDisabled, setAD] = useState('disabled')
    const [approveRemoveDisabled, setARD] = useState('disabled')
    const [removeDisabled, setRD] = useState('disabled')

    const reportError = (e: Error) => {
        const result = e.message
        alert(result)
    }

    const handleTokenChange = async (e: FocusEvent<HTMLInputElement>) => {
        setTokenAddress(e.target.value)
        // See if Stake exists
        let [web3, account] = await getAccountInfo()
        let factoryInstance = new web3.eth.Contract(irainbowfactory, factoryAddr)
        let str = e.target.value

        if (str.match(/^0x[a-fA-F0-9]{40}$/)) {
            try {
                let stakeAddress = await factoryInstance.methods
                    .getStake(str).call()

                if (stakeAddress) {
                    setAAD('')
                    setAD('')
                    setARD('')
                    setRD('')
                }
            } catch (error) {
                console.log(error)
                setSD('')
            }
        }
    }

    const handleLiquidityAmtBlur = (e: FocusEvent<HTMLInputElement>) =>
        setLiquidityAddAmt(e.target.value)

    // addLiquidity(address tokenA, uint amountADesired, address to) external returns (uint liquidity);
    const faucetAddLiquidity = async () => {
        let [web3, account] = await getAccountInfo()
        let factoryInstance = new web3.eth.Contract(irainbowfactory, factoryAddr)

        try {
            let stakeAddress = await factoryInstance.methods
                .getStake(tokenAddress).call()

            let stakeInstance = await new web3.eth.Contract(irainbowstake, stakeAddress)

            let response = await stakeInstance.methods
                .addLiquidity(tokenAddress, liquidityAddAmt, account)
                .send({from: account})
        }
        catch(e) {
            const result = (e as Error).message
            alert(result)
        }
    }

    // stake = IRainbowFactory(factory).getStake(tokenA);
    //create stake
    const createStake = async () => {
        let [web3, account] = await getAccountInfo()
        let unifaucetInstance = new web3.eth.Contract(iunifaucet, faucetAddr)

        try {
            let response = await unifaucetInstance.methods
                .createLiquidityStake(tokenAddress).send({from: account})
            console.log(response);
        } catch(e) {
            const result = (e as Error).message
            alert(result)
        }
    }

    const approve = async () => {
        // Add some input checks here
        let [web3, account] = await getAccountInfo()
        let standardTokenInstance = new web3.eth.Contract(standardtoken, tokenAddress)
        let factoryInstance = new web3.eth.Contract(irainbowfactory, factoryAddr)

        try {
            let stakeAddress = await factoryInstance.methods
                .getStake(tokenAddress).call()
            console.log(stakeAddress)

            let response = await standardTokenInstance.methods
                .approve(stakeAddress, liquidityAddAmt)
                .send({from: account})

            if(response.status === true){
                setApprovalButtonAdd('Approved!')
            }
        } catch(e) {
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
        } catch(e) {
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
                <Button variant="secondary" onClick={createStake} className={stakeDisabled}>
                    {stakeButton}
                </Button>
                <Button variant="secondary" onClick={approve} className={approveAddDisabled}>
                    {approvalButtonAdd}
                </Button>
                <Button variant="primary" onClick={faucetAddLiquidity} className={addDisabled}>
                    Add Liquidity
                </Button>
            </Modal.Footer>
            <div>Remove</div>
            <Modal.Footer>
                <Button variant="secondary" onClick={approveWithdrawal} className={approveRemoveDisabled}>
                    {approvalButtonRemove}
                </Button>
                <Button variant="danger" onClick={faucetRemoveLiquidity} className={removeDisabled}>
                    Remove Liquidity
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default StakeModal
