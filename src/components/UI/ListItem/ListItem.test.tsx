import { screen, render, fireEvent } from '@testing-library/react'

import ListItem from '.'

describe('<ListItem />', () => {
  const setup = (label = 'Test Label') => {
    const onClickSpy = jest.fn<void, []>()

    render(<ListItem label={label} onClick={onClickSpy} />)

    return {
      onClickSpy,
    }
  }

  it('should show the label of the item', () => {
    setup()

    const listItem = screen.getByRole('listitem')

    expect(listItem).toHaveTextContent('Test Label')
  })

  it('should perform the specified action when clicked', () => {
    const { onClickSpy } = setup()

    const listItem = screen.getByRole('listitem')

    fireEvent.click(listItem)

    expect(onClickSpy).toHaveBeenCalled()
  })
})
