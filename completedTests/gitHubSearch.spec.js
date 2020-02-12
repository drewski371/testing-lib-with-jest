import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import GitHubSearch from '../pages'
import axios from 'axios'

jest.mock('axios')

test('<GitHubSearch /> fetches repositories and displays first hit', async () => {
    const name = 'test repo'
    const description = 'test description'
    const searchTerm = 'test search term'
    const repo = { name, description }
    const endpoint = `https://api.github.com/search/repositories?q=${searchTerm}`
    axios.get.mockResolvedValue({ data: { items: [repo] } })

    const { debug, getByPlaceholderText, queryByText } = render(<GitHubSearch />)
    const searchInput = getByPlaceholderText('Search GitHub')
    fireEvent.change(searchInput, { target: { value: searchTerm } })
    fireEvent.keyDown(searchInput, { key: 'Enter', keyCode: 13 })

    expect(await waitForElement(() => queryByText('loading...'))).toBeTruthy()
    expect(await waitForElement(() => queryByText(name))).toBeTruthy()
    expect(queryByText(description)).toBeTruthy()
    expect(queryByText('loading...')).toBeFalsy()
    expect(axios.get).toHaveBeenCalledWith(endpoint)
})

test('<GitHubSearch /> does not fetch when search term is empty', () => {
    axios.get.mockClear()
    const { debug, getByPlaceholderText, queryByText } = render(<GitHubSearch />)
    const searchInput = getByPlaceholderText('Search GitHub')
    fireEvent.keyDown(searchInput, { key: 'Enter', keyCode: 13 })

    expect(queryByText('loading...')).toBeFalsy()
    expect(axios.get).not.toHaveBeenCalled()
})

test('<DetailsDialog /> opens when see details is clicked', async () => {
    const name = 'test repo'
    const description = 'test description'
    const searchTerm = 'test search term'
    const html_url = 'http://testme.com'
    const repo = { name, description, html_url }
    axios.get.mockResolvedValue({ data: { items: [repo] } })

    const { debug, getByPlaceholderText, queryByText } = render(<GitHubSearch />)
    const searchInput = getByPlaceholderText('Search GitHub')
    fireEvent.change(searchInput, { target: { value: searchTerm } })
    fireEvent.keyDown(searchInput, { key: 'Enter', keyCode: 13 })

    expect(await waitForElement(() => queryByText('See Details'))).toBeTruthy()
    fireEvent.click(queryByText('See Details'))
    expect(await waitForElement(() => queryByText('Repo Details'))).toBeTruthy()
    expect(queryByText(html_url)).toBeTruthy()
})
