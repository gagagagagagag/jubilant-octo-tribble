import React, { useContext } from 'react'
import { screen, render, fireEvent } from '@testing-library/react'

import SearchBar from '.'

const mockChangeQuery = jest.fn<void, [string]>()

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}))

describe('<SearchBar />', () => {
  const setup = () => {
    render(<SearchBar />)
  }

  it('should call changeQuery on form submit', () => {
    ;(
      React.useContext as jest.MockedFunction<typeof useContext>
    ).mockImplementation(() => ({
      changeQuery: mockChangeQuery,
    }))

    setup()

    const submitButton = screen.getByText('Search')

    fireEvent.click(submitButton)

    expect(mockChangeQuery).toHaveBeenCalled()
  })
})
