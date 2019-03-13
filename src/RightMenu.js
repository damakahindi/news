import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class RightMenu extends Component {
  render() {
    return (
      <Menu inverted vertical style={{ margin: '0px' }}>
        <Menu.Item name='Citizen' href='https://citizentv.co.ke/' target='_blank'/>
        <Menu.Item name='Daily Nation' href='https://www.nation.co.ke/' target='_blank'/>
        <Menu.Item name='KTN' href='https://www.standardmedia.co.ke/' target='_blank' />
        <Menu.Item name='BBC' href='https://www.bbc.com/' target='_blank'/>
        <Menu.Item name='Aljazeera' href='https://www.aljazeera.com/' />
        <Menu.Item name='CNN' href='https://us.cnn.com/world' />
      </Menu>
    )
  }
}
