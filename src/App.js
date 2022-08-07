// import logo from './logo.svg';
import './App.css';
// import NavBar from './components/NavBar';

//rcc
import React, { Component } from 'react';
import News from './components/News';
import NavBar from './components/NavBar';
// import Switch from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize =15;

  state ={
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
             
       <NavBar/>
       <LoadingBar
       height={4}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(10)}
      />
       <Routes>
          {/* <Route path="/about">  <News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="general" />  </Route> */}
          <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general" />}>    </Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="business" />}>    </Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}>    </Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general" />}>    </Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country="in" category="health" />}>    </Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="in" category="science" />}>    </Route>
          <Route exact path="/sport" element={<News setProgress={this.setProgress}  key="sport" pageSize={this.pageSize} country="in" category="sport" />}>    </Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country="in" category="technology" />}>    </Route>
           
        
       
        </Routes>
       </Router>
      </div>
    )
  }
}

