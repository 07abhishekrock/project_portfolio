import React, {Component} from 'react';
import './App.css'
import './stylesheets/project_route.css';
import ProjectWindow from './components/ProjectWindow';
import ImageWindow from './components/ImageWindow';

class Projects extends Component{
    constructor(props){
        super(props);
        this.project_id = props.match.params.id;
        this.state = {
            parentRef : null,
            image_array:[1,3,4],
            currentIndex : 0,
            view_preview : 0 
        }
    }
    componentDidMount(){
    }
    render(){
        return(
            <section className = "projects_list" ref={this.project_parent_ref}>
                <h1 className = "projectTitle">PROJECTS</h1>
                <ProjectWindow changeCurrentImage = {this.setState.bind(this)} parentIndex = {1} count = {4}/> 
                <ProjectWindow changeCurrentImage = {this.setState.bind(this)} parentIndex = {2} count = {4}/> 
                <ImageWindow visible = {this.state.view_preview} image_array = {this.state.image_array} index = {this.state.currentIndex} changeCurrentImage = {this.setState.bind(this)}/>
            </section>

        )
    }
};

export default Projects;