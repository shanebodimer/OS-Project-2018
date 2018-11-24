import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// Root view
import Root from "./Views/Root.jsx";

// Public views
import Test from "./Views/Test.jsx";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Root>
          {/* Public */}
          <Route exact path={"/"} render={props => <Test {...props} />} />

          {/* Private */}
          {/* <Route path={'/private'} render={props => <Private {...props} />} /> */}
        </Root>
      </BrowserRouter>
    );
  }
}
