import React from 'react'
import Header from './component/Header'
import Router from './routes/router';
import './App.css';

class App extends React.Component{

    constructor(props) {
      super(props);
  }
  render(){
    return (
      <div>
        <Header/>
        <Router/>
      </div>
    )
  }
}



export default App;
