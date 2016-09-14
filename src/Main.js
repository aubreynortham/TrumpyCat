import React, { Component } from 'react';

//receives all properties from child components and renders them here
class Main extends Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Main;
