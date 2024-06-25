/**
 * 사용자가 검색한 영화 목록을 보여주는 검색 페이지 파일입니다.
 */

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import useDebounce from '../../hooks/useDebounce'
import KeywordHighlighter from '../../components/KeywordHighlighter'
import './SearchPage.css'

const SearchPage = () => {
  const [searchedMovie, setSearchedMovie] = useState([])

  const useSearchQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  let searchQuery = useSearchQuery()
  const searchWord = searchQuery.get("q")
  const debouncedSearchWord = useDebounce(searchQuery.get("q"), 500)

  const fetchSearchedMovie = async (searchWord) => {
    try {
      const request = await axiosInstance.get(`/search/movie?include_adult=false&query=${searchWord}`)

      setSearchedMovie(request.data.results)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (debouncedSearchWord) {
      fetchSearchedMovie(debouncedSearchWord)
    }
  }, [debouncedSearchWord])

  if (searchedMovie.length > 0) {
    return (
      <div>
        <section className="search-container">
          {searchedMovie.map((movie) => {
            if (movie.title !== null) {
              return (
                <div>
                  <KeywordHighlighter
                    text={movie.title}
                    keyword={debouncedSearchWord}
                  />
                </div>
              )
            } else {
              return null
            }
          })}
        </section>
      </div>
    )
  } else {
    return (
      <div>
        <section className="no-result">
          <div>
            <p>
              검색어 "{searchWord}"에 맞는 영화가 없습니다
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default SearchPage