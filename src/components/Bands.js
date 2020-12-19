import React, { Component } from 'react';

import Band from './Band.js'

class Bands extends Component {
    

  renderBands = () => this.props.bands.map(band => <Band {...band} deleteInfo={this.props.deleteInfo} key={band.id}/>)

  render() {
      
    return(
      <div>
          <ul>
              {this.renderBands()}
          </ul>
      </div>
    );
  }
};





export default Bands;