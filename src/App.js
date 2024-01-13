import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {

  constructor(){
    super()
    this.state={
      progress:0,
    }
  }

  setProgress = (progress)=>{
   this.setState({
    progress:progress,
   })
  }

  Apikey =`849b5e410c6a421a8f2944487d3c4681`;

  pageSize = 6;
  render() {
    // let one = this.state.progress;
    return (
      <>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Router>  
        <Routes>
          <Route exact path="/" element={<Navbar/>}>
            <Route exact path="/"  element={<News progress={this.setProgress} apikey={this.Apikey}  key="business" country="in" pagesize={this.pageSize} category="business"/>}/>
            <Route exact path="/entertainment" element={<News progress={this.setProgress} apikey={this.Apikey}   key="entertainment" country="in" pagesize={this.pageSize} category="entertainment"/>}/>
            <Route exact path="/general" element={<News progress={this.setProgress} apikey={this.Apikey}  key="general"  country="in" pagesize={this.pageSize} category="general"/>}/>
            <Route exact path="/health"  element={<News progress={this.setProgress} apikey={this.Apikey}  key="health" country="in" pagesize={this.pageSize} category="health"/>}/>
            <Route exact path="/science"  element={<News progress={this.setProgress} apikey={this.Apikey}  key="science" country="in" pagesize={this.pageSize} category="science"/>}/>
            <Route exact path="/sports"  element={<News progress={this.setProgress} apikey={this.Apikey}  key="sports" country="in" pagesize={this.pageSize} category="sports"/>}/>
            <Route exact path="/technology" element={<News progress={this.setProgress} apikey={this.Apikey}  key="technology" country="in" pagesize={this.pageSize} category="technology"/>}/>
          </Route>
        </Routes>
      </Router>
      </>
    )
  }
}
