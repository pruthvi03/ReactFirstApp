import React, { Component } from 'react';
import './custom.css';

class Card extends Component {

  static getDerivedStateFromProps(props, state) {
    console.log('App js getDerivedStateFromProps', props)
    return state
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('Card js shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps ,prevState){
    console.log('Card js getSnapshotBeforeUpdate')
    return {message:'some snapshot'}
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('Card js componentDidUpdate', snapshot)
  }

  componentWillUnmount(){
    console.log('Card js componentWillUnmount')
  }

  render() {
    console.log('card rendering')
    return (
      <div className="card">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h3><b>{this.props.name}</b></h3>
          <p>{this.props.heroname}</p>
          <input type="text" value={this.props.name} onChange={this.props.onChangeName} />
          <p><button className="button button-red" onClick={this.props.onDelete}>Delete</button></p>
          <div>{this.props.children}</div>
        </div>
      </div>
    )
  }

}

export default Card
