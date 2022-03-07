import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import { reSetAuthedUser } from "../actions/authedUser";

class NavBar extends Component {
  render() {
    const { name, avatarURL, id } = this.props.author;
    const handleClick = () => {
      const { dispatch } = this.props;
      dispatch(reSetAuthedUser(id));
    };

    console.log(this.props.author.id);
    return (
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Would You Rather?</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={NavLink} to='/' exact>
                {" "}
                Home{" "}
              </Nav.Link>
              <Nav.Link as={NavLink} to='/add'>
                {" "}
                New Question{" "}
              </Nav.Link>
              <Nav.Link as={NavLink} to='/leaderboard'>
                {" "}
                Leaderboard
              </Nav.Link>
              <Navbar.Text className='text-end mx-5'>
                <Image width='40' height='40' src={avatarURL} roundedCircle />{" "}
                {name}
              </Navbar.Text>

              <Button className='mx-0' onClick={handleClick}>
                {" "}
                logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    author: users[authedUser],
  };
}
export default connect(mapStateToProps)(NavBar);
