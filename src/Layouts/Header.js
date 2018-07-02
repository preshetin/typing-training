import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {

  handleLogout = () => {
    this.props.onLogout();
    
  }

  render() {
    return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal"><Link to="/">Typing Training</Link></h5>
      <nav className="my-2 my-md-0 mr-md-3">
        {this.props.userId && <Link className="p-2" to="/profile">Profile</Link>}
      </nav>
        {this.props.userId === null && <Link className="p-2" to="/login">Login</Link>}
        {this.props.userId && <a className="p-2" href="#" onClick={this.handleLogout} >Logout</a>}
    </div>
    );
  }
}

export default Header;
