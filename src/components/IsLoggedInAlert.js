import React from 'react';
import { Link } from 'react-router-dom';

const IsLoggedInAlert = ({ isLoggedIn }) => {
  return isLoggedIn ? null : (
    <div class="row justify-content-md-center">
      <div className="col-md-9">
        <div className="alert alert-primary" role="alert">
          To enable statistics please <Link to='/login'>log in</Link>
        </div>
      </div>
    </div>
  )
}

export default IsLoggedInAlert;
