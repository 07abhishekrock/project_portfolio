import React, {Component} from 'react';
import './App.css';
import SectionFirst from './components/SectionFirst';
import SectionAboutUs from './components/SectionAboutUs';
import SectionResume from './components/SectionResume';
import SectionProject from './components/SectionProjects';
import SectionContactMe from './components/SectionContactMe';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      lightColor : '#FFE8CB',
      darkColor : '#FFB861',
      placeholderText : '#FFDDB3',
      select_index : ['0','1','0']
  };
  this.audio = React.createRef(null);
  }
  render(){
  return (
      <>
    <audio autoplay ref={this.audio} loop="true">
      <source src="/music/background-beat.mp3" type="audio/mp3"/>
      Your browser does not support the audio tag.
    </audio>
      <SectionFirst changeState = {this.setState.bind(this)} lightColor = {this.state.lightColor} darkColor = {this.state.darkColor} select_index = {this.state.select_index} /> 
      <SectionAboutUs lightColor = {this.state.lightColor} darkColor = {this.state.darkColor}/> 
      <SectionResume lightColor = {this.state.lightColor} darkColor = {this.state.darkColor}/> 
      <SectionProject lightColor = {this.state.lightColor} darkColor = {this.state.darkColor}/>
      <SectionContactMe lightColor = {this.state.lightColor} placeholderText = {this.state.placeholderText} darkColor = {this.state.darkColor}/>
      </>
   );
  }
}

export default App;
