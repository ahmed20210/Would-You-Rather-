import React, { Component } from "react";
import NavBar from "./Component/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Home from "./Component/Home";
import NewQuestion from "./Component/NewQuestion";
import Questions from "./Component/Questions";
import LeaderBoard from "./Component/LeaderBoard";
import LoadingBar from "react-redux-loading-bar";
import SignIn from "./Component/signIn";
import PNF from "./Component/PNF";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className='App container justify-content-center'>
        <LoadingBar />
        {this.props.loading === true ? (
          <SignIn />
        ) : (
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/questions/:id' component={Questions} />
              <Route path='/leaderboard' component={LeaderBoard} />
              <Route component={PNF} />
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}
export default connect(mapStateToProps)(App);
