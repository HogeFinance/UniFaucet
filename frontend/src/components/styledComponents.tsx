// Faucet Component styles

import styled from 'styled-components'

export const Wrapper = styled.div``

export const Heading = styled.div`
  margin: 40px 0 40px;
`

export const Title = styled.h1`
  margin: 0 0 16px;
  color: #fff;
  font-family: 'Maven Pro', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
`

export const SubTitle = styled.span`
  font-family: Maven Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #828282;
`

export const FaucetSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FaucetTop = styled.div`
  max-width: 600px;
  width: 100%;
  .form-group {
    margin: 0 !important;
  }
`
export const FaucetMain = styled.div`
  margin-right: 115px;
  @media only screen and (max-width: 768px) {
    margin-right: 10px;
  }
`
export const StakeButton = styled.img`
  margin-bottom: 160px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin-bottom: 23%;
  }
`
export const FaucetVisual = styled.img`
  @media only screen and (max-width: 768px) {
    width: 50%;
  }
`
export const FaucetBottom = styled.div``
export const CollectionArea = styled.div`
  display: flex;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  width: min-content;
  margin-left: 250px;
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
  }
`
export const OutputValue = styled.input`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #222628;
  border: none;
  text-align: center;
  color: #c4c4c4;
  font-family: 'Pixeboy', sans-serif;
  font-size: 24px;
  line-height: 24px;
  min-width: 180px;
  width: 0%;
`
export const PrimaryButton = styled.div`
  background: #c4c4c4;
  border-radius: 4px;
  padding: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      90deg,
      #833ab4 0%,
      #fd1d1d 48.44%,
      #fcb045 100%
    );

    span {
      color: #fff;
    }
  }
`
export const ButtonLabel = styled.span`
  font-family: 'Pixeboy', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  color: #222628;
`

export const PoweredBy = styled.img`
  position: absolute;

  right: 20px;

  bottom: 10px;

  @media only screen and (max-width: 1024px) {
    position: relative;
    margin-top: 2em;
    float: right;
  }
`

export const WarnMessage = styled.span`
  color: #ff9000;
  font-family: 'Pixeboy', sans-serif;
  display: block;
  margin-top: 30px;
  font-size: 22px;
`

export const Starred = styled.span`
  vertical-align: sub;
`

// Stake modal components

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: auto;
  gap: 25px 0;
  font-family: 'Maven Pro', sans-serif;
`
export const Labels = styled.div`
  font-family: 'Maven Pro', sans-serif;
`
export const Label = styled.div`
  font-family: 'Maven Pro', sans-serif;
  display: flex;
  align-items: right;
  margin-bottom: 5px;
  margin-top: 5px;
  height: 30px;
`
export const LabelAmount = styled.div`
  font-family: 'Maven Pro', sans-serif;
  display: flex;
  align-items: right;
  margin-bottom: 5px;
  margin-top: 15px;
  height: 30px;
`
export const Inputs = styled.div``
export const InputWrapper = styled.div`
  margin-bottom: 5px;
  input {
    width: 100%;
  }
`
