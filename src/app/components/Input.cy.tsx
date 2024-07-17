import React from 'react'
import Input from './Input'

describe('<Input />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Input label={''} name={''} type={'number'} onchange={function (e: React.ChangeEvent<HTMLInputElement>): void {
      throw new Error('Function not implemented.')
    } } />)
  })
})