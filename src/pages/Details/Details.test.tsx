import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'

import * as userActions from '../../core/actions/user'
import * as repoActions from '../../core/actions/repo'

import Details from '.'

jest.mock('../../core/actions/user')
jest.mock('../../core/actions/repo')

describe('<Details />', () => {
  const setup = () => {
    render(
      <MemoryRouter initialEntries={['/testid']}>
        <Route path={'/:login'} component={Details} />
      </MemoryRouter>
    )
  }

  beforeEach(() => {
    // Never resolve the promises
    ;(userActions.getUserDetails as jest.Mock).mockReturnValue(
      new Promise(() => {})
    )
    ;(repoActions.getTopRepos as jest.Mock).mockReturnValue(
      new Promise(() => {})
    )
  })

  it('should show a loading state', () => {
    setup()

    const loadingMessage = screen.getByRole('dialog', { name: /loading/i })

    expect(loadingMessage).toHaveTextContent('Loading...')
  })

  it('should request user details', () => {
    setup()

    expect(userActions.getUserDetails).toHaveBeenCalled()
  })

  it('should request users top repos', () => {
    setup()

    expect(userActions.getUserDetails).toHaveBeenCalled()
  })
})
