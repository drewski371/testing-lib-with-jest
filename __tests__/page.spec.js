import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import Page from '../pages'
import axios from 'axios'

jest.mock('axios')

test('<Page /> ', async () => {
    const { debug, getByPlaceholderText, queryByText } = render(<Page />)
    const repo = {
        name: 'test repo'
    }
    axios.get.mockResolvedValueOnce({ data: { items: [repo] } })

    const searchInput = getByPlaceholderText('Search GitHub')
    fireEvent.change(searchInput, { target: { value: 'test input' } })
    fireEvent.keyDown(searchInput, { key: 'Enter', keyCode: 13 })
    
    expect(await waitForElement(() => queryByText('loading...'))).toBeTruthy()
    expect(await waitForElement(() => queryByText('test repo'))).toBeTruthy()
    expect(queryByText('loading...')).toBeFalsy()
})
