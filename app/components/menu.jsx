import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './menu.css'

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open : false
    };
    this.toggleBurger = this.toggleBurger.bind(this); // binds the function to the component on initiation =>> allows to use state
  };
  toggleBurger(){
    if(!this.state.open){
      this.setState({
        open : true
      });
    }
    else{
      this.setState({
        open : false
      });
    }
  };
  render(){
    return(
      <div className="menu">
        <div className={this.state.open? 'burger open': 'burger'} onClick={this.toggleBurger}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={this.state.open? 'nav open': 'nav'}>
          <ul>
            {
              this.props.items.map(function(item) {
                return (<li key={item.id}><a href={item.url}>{item.text}</a></li>)
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
