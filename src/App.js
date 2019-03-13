import React, { Component } from "react";
import RightMenu from "./RightMenu";
import LeftMenu from "./LeftMenu";
import TopMenu from "./TopMenu";
import Content from "./Content";
import "./App.css";
import { Grid, Header, Menu, Segment } from "semantic-ui-react";

class App extends Component {
  state = { 
    activeItem: 'University',
    recentOpened: [],
  }

  handleItemClick = (e, { name }) => {
    const { recentOpened } = this.state;
    if(recentOpened.length >= 7){
      // Remove the last 
      recentOpened.pop()
    }
    recentOpened.unshift(name)
    console.log('recentOpened', recentOpened)
    this.setState({ activeItem: name })
  }
  
  render() {
    const { activeItem, recentOpened } = this.state
    return (
      <>
        <Grid fluid >
          <Grid.Row tablet="16" style={{ paddingBottom: '0px'}}>
            <Grid.Column center tablet="16" style={{ paddingBottom: '0px'}}>
              <TopMenu />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row tablet="16" style={{ padding: '0px'}}>
            <Grid.Column center tablet="16" style={{ padding: '0px'}}>
            <Segment inverted style={{ padding: '0px'}}>
              <Menu inverted secondary widths={6} style={{ padding: '0px'}}>
                <Menu.Item style={{ padding: '0px'}}> University News </Menu.Item>
                <Menu.Item style={{ padding: '0px'}}> Politics</Menu.Item>
                <Menu.Item style={{ padding: '0px'}}> Sports </Menu.Item>
                <Menu.Item style={{ padding: '0px'}}> Administration </Menu.Item>
                <Menu.Item style={{ padding: '0px'}}> Weather </Menu.Item>
                <Menu.Item style={{ padding: '0px'}}> Contacts</Menu.Item>
              </Menu>
            </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row tablet="16" style={{ padding: '0px'}}>
            <Grid.Column center tablet="16" style={{ padding: '0px'}}>
            <Segment inverted secondary style={{ padding: '0px'}}>
              <Menu inverted secondary widths={6}>
              <Menu.Item>
                <Menu inverted secondary vertical  style={{ display:'flex' }}>
                  <Menu.Item 
                  name='Graduations' 
                  inverted secondary 
                  active={activeItem === 'Graduations'}
                  onClick={this.handleItemClick}
                  style={{ width: '100%'}}
                  />
                  <Menu.Item 
                    name='Timetables' 
                    inverted secondary
                    active={activeItem === 'Timetables'}
                    onClick={this.handleItemClick}
                    style={{ width: '100%'}}
                  />
                  <Menu.Item 
                    name='Projects'
                    inverted secondary
                    active={activeItem === 'Projects'}
                    onClick={this.handleItemClick}
                    style={{ width: '100%'}}
                  />
                </Menu>
              </Menu.Item>
              <Menu.Item>
                <Menu inverted secondary vertical style={{ display:'flex' }}>
                  <Menu.Item 
                    name='Kenya'
                    inverted secondary
                    active={activeItem === 'Kenya'}
                    onClick={this.handleItemClick}
                    style={{ width: '100%'}}
                  />
                  <Menu.Item 
                    name='World' 
                    inverted secondary
                    active={activeItem === 'World'}
                    onClick={this.handleItemClick}
                    style={{ width: '100%'}}
                  />
                </Menu>
              </Menu.Item>
                <Menu.Item>
                <Menu inverted secondary vertical style={{ display:'flex' }}>
                  <Menu.Item 
                    name='Rugby'
                    inverted secondary
                    active={activeItem === 'Rugby'}
                    onClick={this.handleItemClick}
                    style={{ width: '100%'}}
                  />
                </Menu>
                </Menu.Item>
                <Menu.Item>
                <Menu inverted secondary vertical style={{ display:'flex' }}>
                  <Menu.Item 
                    name='Africa'
                    inverted secondary
                    active={activeItem === 'Africa'}
                    onClick={this.handleItemClick}
                    style={{ width: '100%'}}
                  />
                </Menu>
                </Menu.Item>
                <Menu.Item>
                <Menu inverted secondary vertical style={{ display:'flex' }}>
                  <Menu.Item 
                    name='Top'
                    inverted secondary
                    active={activeItem === 'Top'}
                    onClick={this.handleItemClick}
                    style={{ width: '100%'}}
                  />
                  <Menu.Item 
                    name='Middle' 
                    inverted secondary
                    active={activeItem === 'Middle'}
                    onClick={this.handleItemClick}
                    style={{ width: '100%'}}
                  />
                  <Menu.Item 
                    name='Bottom' 
                    inverted secondary
                    active={activeItem === 'Bottom'}
                    onClick={this.handleItemClick}
                    style={{ width: '100%'}}
                  />
                </Menu>
                </Menu.Item>
                <Menu.Item>
                <Menu inverted secondary vertical style={{ display:'flex' }}>
                  <Menu.Item 
                    name='Football'
                    inverted secondary
                    active={activeItem === 'Football'}
                    onClick={this.handleItemClick}
                    style={{ width: '100%'}}
                  />
                  <Menu.Item 
                    name='Netball' 
                    inverted secondary
                    active={activeItem === 'Netball'}
                    onClick={this.handleItemClick}
                    style={{ width: '100%'}}
                    />
                  <Menu.Item 
                    name='Handball' 
                    inverted secondary
                    active={activeItem === 'Handball'}
                    onClick={this.handleItemClick}
                    style={{ width: '100%'}}
                  />
                </Menu>
                </Menu.Item>
              </Menu>
            </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>


        <Grid fluid padded="horizontally">
          <Grid.Row>
            <Grid.Column tablet="4" style={{ height: "100%" }}>
              <Header as="h2" icon>
                Recently Opened
              </Header>
              <LeftMenu recentOpened={recentOpened}/>
            </Grid.Column>
            <Grid.Column tablet="9">
              <Content activeItem={activeItem}/>
            </Grid.Column>
            <Grid.Column tablet="2">
            <Header as="h2" icon>
                More News
              </Header>
              <RightMenu />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default App;
