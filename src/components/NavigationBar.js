/**
 * 검색 기능을 제공하는 컴포넌트입니다.
 */

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const NavigationBar = () => {
  const [searchWord, setSearchWord] = useState("")
  const navigate = useNavigate()

  const inputHandler = (event) => {
    setSearchWord(event.target.value)
    navigate(`/search?q=${event.target.value}`)
  }

  return (
    <StyledNavigationBar>
      <Logo>
        <img
          alt="logo"
          src="/images/logo.svg"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>

      <Input
        value={searchWord}
        onChange={inputHandler}
        type="text"
        placeholder="검색어를 입력하세요"
      />
    </StyledNavigationBar>
  )
}

export default NavigationBar

const StyledNavigationBar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`

const Logo = styled.a`
  display: block;
  width: 60px;
  height: 60px;
  font-size: 0;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }
`

const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.582);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: none;
`