import React, { useState, useEffect } from 'react'
import { HeaderContainer, Logo, SearchInput, Input } from './Header.styles'
import { AiOutlineSearch } from 'react-icons/ai'
import logo from '../../assets/logo.png'
import { useDispatch } from 'react-redux'
import { SET_FILTER, CLEAN_FILTER } from '../../pages/redux/actions/search_bar_actions'

export default function Header() {

    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('')
    const [debouncedSearchInput, setDebouncedSearchInput] = useState('')

    useEffect(() => {
        setSearchInput('');
    }, []);

    useEffect(() => {
        if (debouncedSearchInput.length === 0) {
            dispatch({
                type: CLEAN_FILTER,
            })
        } else {
            dispatch({
                type: SET_FILTER,
                payload: debouncedSearchInput,
            })
        }
    }, [debouncedSearchInput])

    const debounce = (func, timeout = 300) => {
        let timer
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                func.apply(this, args)
            }, timeout)
        }
    }

    const handleSearchInputChange = (e) => {
        const inputVal = e.target.value
        setSearchInput(inputVal)
        debounceDispatch(inputVal)
    }

    const debounceDispatch = debounce((inputVal) => {
        setDebouncedSearchInput(inputVal)
    }, 300)

    return (
        <HeaderContainer>
            <Logo src={logo} />
            <SearchInput>
                < AiOutlineSearch color='black' />
                < Input placeholder="Search..." onChange={handleSearchInputChange} value={searchInput} />
            </SearchInput>
        </HeaderContainer>
    )
}
