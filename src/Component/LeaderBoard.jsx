import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import UserInfo from "./UserInfo";
class LeaderBoard extends Component {
  render() {
    const { users } = this.props;

    return (
      <Row className='justify-content-center'>
        <Col className=' text-center' xs={12} md={6}>
          <ul>
            {users.map((user) => (
              <UserInfo className='m-5' key={user} id={user} />
            ))}
          </ul>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).sort((stId, ndId) => {
      const A =
        Object.keys(users[stId].answers).length + users[stId].questions.length;
      const B =
        Object.keys(users[ndId].answers).length + users[ndId].questions.length;

      return B - A;
    }),
  };
}

export default connect(mapStateToProps)(LeaderBoard);
