import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header', () => {

  const wrapper = shallow(<Header />)

  it('Has a header tag', () => {
    expect(wrapper.find('h1')).to.have.length(1)
  })

  it('Renders Header message', () => {
    const message = <h1>This is the header of my app</h1>
    expect(wrapper.contains(message)).equal(true)
  })
})
