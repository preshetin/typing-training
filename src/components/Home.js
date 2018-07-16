import React from 'react';

const Home = (props) => {
  if (props.user) {
    return (
      <div>
        <h1>Home Page</h1>
        <h1>{props.user.email}</h1>
      </div>
    );
  } else {
    return null;
  }
}

export default Home;
