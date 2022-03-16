import React from 'react'
import Router from './routes/router';
import './App.css';

class App extends React.Component{

    constructor(props) {
      super(props);
  }
  render(){
    return (
      <div>
        <Router/>
      </div>
    )
  }
}



export default App;
