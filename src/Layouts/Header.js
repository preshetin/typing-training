import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fakeAuth } from '../auth';

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

class Header extends React.Component {
  render() {
    return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal"><Link to="/">Typing Training</Link></h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <AuthButton />
        <Link className="p-2" to="/profile">Profile</Link>
        <Link className="p-2" to="/login">Login</Link>
      </nav>
      <a className="btn btn-outline-primary" href="#">Sign up</a>
    </div>
    );
  }
}

export default Header;
