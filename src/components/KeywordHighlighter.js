/**
 * 텍스트 중 키워드와 일치하는 부분을 굵게 표시하는 컴포넌트입니다.
 */

import React from 'react'
import './KeywordHighlighter.css'

const KeywordHighlighter = ({ text, keyword }) => {
  if (keyword !== null) {
    const words = text.split(new RegExp(`(${keyword})`, "gi"))

    return (
      <span>
        {words.map((word) =>
          word.toLowerCase() === keyword.toLowerCase()
            ? (<span class="keyword">{word}</span>)
            : (<span>{word}</span>))}
      </span>
    )
  } else {
    return (
      <span>{text}</span>
    )
  }
}

export default KeywordHighlighter