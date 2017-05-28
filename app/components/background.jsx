import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './background.css'

class Background extends React.Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div className="wrapper" style={this.props.wrapperStyle}>
       <div className="inner-wrapper">
          <div className="content" style={this.props.contentStyle}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
