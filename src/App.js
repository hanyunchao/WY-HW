// import React from 'react';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

class InputNumber extends React.Component {
  constructor(props){
    super(props)
    this.state = {value: this.props.value || this.props.defaultValue || '请输入内容'}
  }
  handle(e){
    this.props.onChange()
    this.setState({
      value:e.target.value
    })
  }
  render(){
    return (<input value={this.state.value} onChange={(e)=>{this.handle(e)}}></input>)
  }
}

function App(){
  const [value,setValue] = useState('aaa')
  // const value = 'hyc'
  return (
      <div>
      <InputNumber value={value} onChange={e=>{console.log(1)}}/>
      <InputNumber defaultValue={value} onChange={e=>{}}/>
      </div>
  )
}


export default App;
