import React from 'react'
import { render } from '@testing-library/react'
import DetailsDialog from '../DetailsDialog'

// snapshot test
test('<DetailsDialog /> matches snapshot', () => {
    const props = {
        open: true,
        setOpen: jest.fn(),
        repo: {
            html_url: 'http://testme.com',
            stargazers_count: 50,
            forks: 34,
            language: 'Javascript',
        }
    }

    const { container } = render(<DetailsDialog {...props} />)
    
    expect(container.parentElement).toMatchSnapshot()
})
