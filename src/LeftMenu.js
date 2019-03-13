import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class LeftMenu extends Component {
  render() {
    const { recentOpened } = this.props;
    return (
      <Menu  vertical style={{ width: '100%',minWidth:'120px' , boxShadow: 'none', border:'none'}}>
        {
          recentOpened.length ? 
            (
              <>
              {
                recentOpened.map((item) => {
                  return <Menu.Item name={`${item}`} />
                })
              }
              </>
            ): 'No recently Opened Items'
        }
      </Menu>
    )
  }
}
