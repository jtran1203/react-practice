import React, { Component } from 'react'
import { Navbar, Jumbotron, Button, Grid } from 'react-bootstrap';

class Header extends Component{
  render(){
    return(
      <div>
      <div>
        <Navbar inverse fixedTop  >
          <Grid id>
            <Navbar.Header >
              <Navbar.Brand >
                <a href="/">Panda App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron id="jumbo">
          <Grid>
            <img src="https://cdn.dribbble.com/users/6521/screenshots/1359759/pmbjj.gif" height="150px" width="150px" id="logo"/>
            <h1>Nested Pandas</h1>
              <Button
                bsStyle="warning"
                bsSize="large"
                href="https://www.pandasinternational.org/panda-gallery/"
                target="_blank">
                View Pandas
              </Button>
          </Grid>
        </Jumbotron>
        <div>
          <h1>Hello {this.props.name} </h1>
        </div>
      </div>
      </div>
    )
  }
}

export default Header;
