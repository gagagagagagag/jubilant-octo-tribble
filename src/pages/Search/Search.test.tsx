import { useContext } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router'

import * as userActions from '../../core/actions/user'

import Search from '.'

jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useContext: jest.fn(),
  }
})
jest.mock('../../core/actions/user')

describe('<Search />', () => {
  const setup = () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <Route path={'/search'} component={Search} />
      </MemoryRouter>
    )
  }

  beforeEach(() => {
    ;(useContext as jest.Mock).mockReturnValue({
      searchQuery: 'testquery',
    })
    ;(userActions.getUserList as jest.Mock).mockReturnValue(
      new Promise(() => {})
    )
  })

  it("shouldn't fetch the users list if the query is empty", () => {
    ;(useContext as jest.Mock).mockReturnValue({
      searchQuery: '',
    })

    setup()

    expect(userActions.getUserList).toHaveBeenCalledTimes(0)
  })

  it('should fetch a user list for the given query', () => {
    setup()

    expect(userActions.getUserList).toHaveBeenCalled()
  })
})
