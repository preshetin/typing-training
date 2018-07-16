import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  <a className="p-2" href="#"
    onClick={auth.doSignOut}
  >
    Sign Out
  </a>

export default SignOutButton;
