import { render, screen } from '@testing-library/react'

import Empty from './index'

describe('<Empty />', () => {
  const setup = (searchQuery = 'testquery') => {
    render(<Empty searchQuery={searchQuery} />)
  }

  it('should show the query string', () => {
    setup()

    const emptyDialog = screen.getByRole('dialog', { name: /empty/i })

    expect(emptyDialog).toHaveTextContent('testquery')
  })
})
