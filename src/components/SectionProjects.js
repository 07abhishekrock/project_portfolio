import React, {Component} from 'react';
import {ShadowBTN, HR_line} from './misc';
import '../stylesheets/resume.css'
class SectionProject extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className = "resume_window" style={{backgroundColor:this.props.lightColor}}>
                <h1>Projects</h1>
                <p>Some of my top projects catalogued at one place for you</p>
                <ul className = "projects_grid">
                    <li>
                        <div>
                            <span>Together Chat</span>
                            <span></span>
                        </div>
                    </li>
                    <li></li>
                    <li></li>
                </ul>
                <ShadowBTN darkColor = {this.props.darkColor} value = "View All"/>
                <HR_line lightColor = {this.props.lightColor}/>
            </section>
        )
    }
}

export default SectionProject;