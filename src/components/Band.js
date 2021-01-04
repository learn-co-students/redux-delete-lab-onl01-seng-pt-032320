import React, { Component } from 'react';

class Band extends Component {

  constructor(props){
    super(props)
  }

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>DELETE_BAND {this.props.name}</button>
    </div>
    );
  }
};

export default Band;
