import React from 'react';
import { Link } from 'react-router-dom';
import { SIGN_UP } from '../constants/routes';

const IsLoggedInAlert = ({ authUser }) => {
  return authUser ? null : (
    <div className="row justify-content-md-center">
      <div className="col-md-9">
        <div className="alert alert-warning" role="alert">
          To enable statistics please <Link to={SIGN_UP}>Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default IsLoggedInAlert;
