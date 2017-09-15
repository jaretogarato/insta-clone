import React from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
  render() {
    return (
      <Menu>
        <Menu.Menu position='left' >
          <Menu.Item name='InstaClone'>
            <a href ="/">* InstaClone *</a>
          </Menu.Item>
        </Menu.Menu>
        {/* <Menu.Menu style={{ cursor: 'pointer' }} position='right'>
          <Menu.Item name='add post' />
        </Menu.Menu> */}
      </Menu>
    )
  }
}

export default NavBar;
