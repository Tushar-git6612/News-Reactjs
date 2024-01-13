import React, { Component } from 'react'
import dataLoading from "./dataLoading.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className="container text-center" style={{height:"80px"}}>
         <img src={dataLoading} alt="loading" />
      </div>
    )
  }
}

export default Spinner