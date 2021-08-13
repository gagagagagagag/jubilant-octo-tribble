import { screen, render, logRoles } from '@testing-library/react'

import ProfileInfo from '.'

describe('<ProfileInfo />', () => {
  const setup = (
    name = 'testname',
    imgSrc = 'testimagesrc',
    bio = 'testbio'
  ) => {
    render(<ProfileInfo name={name} imgSrc={imgSrc} bio={bio} />)
  }

  it('should display the users name', () => {
    setup()

    const username = screen.getByRole('listitem', { name: /username/i })

    expect(username).toHaveTextContent('testname')
  })

  it('should display empty when no bio', () => {
    setup('testname', 'testsrc', '')

    const bio = screen.getByRole('listitem', { name: /bio/i })

    expect(bio).toHaveTextContent('Empty')
  })
})
