/**
 * 수만 입력 받은 후에 콤마(,)를 추가하여 표시하는 컴포넌트입니다.
 */

import React, { useState } from 'react'
import styled from 'styled-components'

const NumericInput = () => {
  const [numeric, setNumeric] = useState("")
  const [formattedNumeric, setFormattedNumeric] = useState("")

  const inputHandler = (event) => {
    if (/^[0-9]*\.?[0-9]*$/.test(event.target.value)) {
      setNumeric(event.target.value)

      if (event.target.value !== null) {
        const numericTemp = event.target.value
        const numerics = numericTemp.split(".")

        numerics[0] = numerics[0].replace(/\B(?=([0-9]{3})+(?![0-9]))/g, ",")
        setFormattedNumeric(numerics.join("."))
      }
    }
  }

  return (
    <div>
      <Input
        value={numeric}
        onChange={inputHandler}
        type="text"
        placeholder="수를 입력하세요"
      />
      <Result>Result<br />{formattedNumeric}</Result>
    </div>
  )
}

export default NumericInput

const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.582);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: none;
  margin-bottom: 15px;
`

const Result = styled.div`
  height: 50px;
`