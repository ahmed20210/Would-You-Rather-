import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
class SignIn extends Component {
  state = {
    userID: "",
  };
  render() {
    const handleSubmit = (e) => {
      const userID = this.state.userID;
      const { dispatch } = this.props;

      e.preventDefault();
      if (userID !== "") {
        dispatch(setAuthedUser(userID));
      }
    };
    const handleChange = (e) => {
      this.setState({ userID: e.target.value });
    };
    return (
      <div
        className=' row justify-content-center container m-5'
        style={{ alignItems: "center" }}>
        <Card
          className='justify-content-center'
          style={{ alignItems: "center", width: "30rem", height: "25rem" }}>
          <Card.Header>Sign in</Card.Header>
          <Card.Img
            variant='top'
            style={{ height: "15rem" }}
            src='/redux.png'
          />
          <Form
            className='row justify-content-center'
            onChange={handleChange}
            onSubmit={handleSubmit}>
            <Form.Select aria-label='Default select example'>
              <option>Select user</option>
              {this.props.users.map((user) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
            </Form.Select>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).map((id) => ({
      id: id,
      name: users[id].name,
    })),
    user: users,
  };
}

export default connect(mapStateToProps)(SignIn);
