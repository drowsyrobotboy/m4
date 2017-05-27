import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './main.css'
import Background from '../components/background.jsx'
import Menu from '../components/menu.jsx'

// main bg + wrapper container
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      wrapperStyle: {background: '#37383A'},
      contentStyle: {backgroundColor: '#F3F3F3'}
    };
    this.toggleBg = this.toggleBg.bind(this); // binds the function to the component on initiation
  };
  toggleBg(){
    (this.state.wrapperStyle.background=='#37383A')? this.setState({wrapperStyle: {background: '#F3F3F3'}}) : this.setState({wrapperStyle: {background: '#37383A'}})
  };
  render(){
    const navItems = [
      {id: 0, text: "Home", url: "#"},
      {id: 1, text: "About Me", url: "#"},
      {id: 2, text: "My Works", url: "#"}
    ];
    return (
      <Background wrapperStyle={this.state.wrapperStyle} contentStyle={this.state.contentStyle}>
        <Menu items={navItems} />
        {this.props.children}
      </Background>
    );
  }
}

const LaunchDiv = (
  <div className="launch-div">
    <div className="launch-row">
      <div className="launch-img">
        <img src="build/images/bg1.jpg" />
      </div>
      <div className="launch-text">
        <h2> Hello! I'm Maruthi </h2>
        <h1> I'm a <span className="highlight">Web Designer</span> from Hyderabad.</h1>
        <h2> I'm also a Graphic Designer, a UI Designer, a Music Addict and an Idiot.</h2>
      </div>
    </div>
  </div>
);

ReactDOM.render(
  <Main>
  {LaunchDiv}
  </Main>,
  $('.view')[0]
);
