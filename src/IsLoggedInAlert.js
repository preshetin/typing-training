import React from 'react';
import { Link } from 'react-router-dom';

const IsLoggedInAlert = ({ isLoggedIn }) => {
  return isLoggedIn ? null : (
    <div className="alert alert-primary" role="alert">
      To enable statistics please <Link to='/login'>log in</Link>
    </div>
  )
}

export default IsLoggedInAlert;
