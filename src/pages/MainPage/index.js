/**
 * 검색 기능, 수 변환 기능, 클릭 시 뒤집히는 카드를 제공하는 메인 페이지 파일입니다.
 */

import React, { useState } from 'react'
import styled from 'styled-components'
import './MainPage.css'
import NumericInput from '../../components/NumericFormatter'

const MainPage = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const clickHandler = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <Container>
      <h1>Homepage</h1>
      <NumericInput />
      <div className="card-container">
        <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={clickHandler}>
          <div className="front">
            <img src="/images/landscape_front.jpg" alt="front" />
          </div>
          <div className="back">
            <img src="/images/landscape_back.jpg" alt="back" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default MainPage

const Container = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  top: 80px;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - 80px);
  position: relative;
`