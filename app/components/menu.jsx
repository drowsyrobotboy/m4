import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './menu.css'

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open : false,
      burgerStyle: this.props.styleDefs.burgerDefStyle // initializing to set the value passed from caller
    };
    this.toggleBurger = this.toggleBurger.bind(this); // binds the function to the component on initiation =>> allows to use state
  };
  //this will update the state when props change
  componentWillReceiveProps(nextProps) {
    this.setState({
      burgerStyle: nextProps.styleDefs.burgerDefStyle
    });
  }
  toggleBurger(){
    if(!this.state.open){
      this.setState({
        open : true,
        burgerStyle: this.props.styleDefs.burgerOpenStyle
      });
    }
    else{
      this.setState({
        open : false,
        burgerStyle: this.props.styleDefs.burgerDefStyle
      });
    }
  };
  hideMenu(){
    this.toggleBurger();
  }
  render(){
    const menuItems = this.props.items.map((item)=>
        <li key={item.id}>
          <a href={item.url} onClick={this.hideMenu.bind(this)}>{item.text}</a>
        </li>
    );
    return(
      <div className="menu">
        <div className={this.state.open? 'burger open': 'burger'} onClick={this.toggleBurger}>
          <span style={this.state.burgerStyle}></span>
          <span style={this.state.burgerStyle}></span>
          <span style={this.state.burgerStyle}></span>
          <span style={this.state.burgerStyle}></span>
          <span style={this.state.burgerStyle}></span>
          <span style={this.state.burgerStyle}></span>
        </div>
        <div className={this.state.open? 'nav open': 'nav'} style={this.props.styleDefs.menuBgStyle}>
          <ul>{menuItems}</ul>
        </div>
      </div>
    );
  }
}

export default Menu;
