import React, { Component } from 'react'
import { Menu, Header, Icon } from 'semantic-ui-react'

export default class MenuExampleInverted extends Component {
  render() {

    return (
      <>
        <Menu pointing secondary size='massive' 
          style={{ margin: '0px' , display: 'flex', justifyContent: 'center'}} >
          <Menu.Item>
          <Header as="h2" icon>
                <Icon name="bullhorn" color="teal" />
                Software Engineering News App
            </Header>
          </Menu.Item>
        </Menu>
        {this.props.children}
      </>
    )
  }
}