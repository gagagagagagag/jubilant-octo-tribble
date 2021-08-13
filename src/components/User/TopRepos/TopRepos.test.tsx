import { screen, render } from '@testing-library/react'

import { Repository } from '../../../core/models/repository'
import TopRepos from '.'

describe('<TopRepos />', () => {
  const setup = (repos: Repository[] = []) => {
    render(<TopRepos repos={repos} />)
  }

  it('should show an "Empty" message when no repos are available', () => {
    setup()

    const emptySpan = screen.getByRole('dialog', { name: /empty/i })

    expect(emptySpan).toHaveTextContent('Empty')
  })
})
