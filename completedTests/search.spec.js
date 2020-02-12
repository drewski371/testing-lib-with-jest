import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Search from '../Search'

test('<Search /> invokes callback on enter', () => {
    const onSearch = jest.fn()
    const searchTerm = 'testing search'
    const { getByPlaceholderText } = render(<Search onSearch={onSearch} />)

    const searchInput = getByPlaceholderText('Search GitHub')
    fireEvent.change(searchInput, { target: { value: searchTerm } })
    fireEvent.keyDown(searchInput, { key: 'Enter', keyCode: 13 })
    
    expect(onSearch).toHaveBeenCalledWith(searchTerm)
})