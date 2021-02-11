import React from 'react';
import MyPicture from './assets/myPicture.png';
import './index.scss';

const App = () => {
  return (
    <div className="container">
      <h3 className="title">Hello, React</h3>
      <img src={MyPicture} />
    </div>
  );
};

export default App;
