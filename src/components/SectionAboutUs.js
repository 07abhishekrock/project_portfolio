import React, {Component} from 'react';
import '../stylesheets/aboutUs.css';

class SectionAboutUs extends Component{
    constructor(props){
        super(props);
        this.reference = React.createRef(null);
        this.style_li_item = {backgroundColor : this.props.darkColor};
    }
    componentDidMount(){
        //intersection observer initialization
        const options = {
            root:null,
            threshold : 1.0,
        }
        let observer = new IntersectionObserver(this.callback.bind(this),options);
        observer.observe(this.reference.current);
    }
    callback(entries){
        for (const entry of entries){
            console.log(entry.isIntersecting);
            if(entry.isIntersecting){
                console.log('hello world');
                entry.target.children[1].style.transform = `translateY(-100%)`;
            }
        }
    }
    render(){
        return (
            <section className="aboutMe" style={{backgroundColor : this.props.lightColor}}>
                <div className = 'image' ref={this.reference} >
                    <div className = 'bg-avatar'  style={{backgroundColor : this.props.darkColor}}></div>
                    <div className = 'avatar' ></div>
                </div>

                <div className = 'text'>
                    <h1>About Me</h1>
                    <p>My name is Abhishek Jha and I am a frontend web developer.</p>
                    <p>I design UIs with promise of <b>CREATIVITY,</b><b>MINIMALISM</b>and<b>EASY-TO-USE OUTLINE.</b></p>
                    <span>SKILLS</span>
                    <ul>
                        <li style={{backgroundColor:this.props.darkColor}}><i></i>HTML</li>
                        <li style={{backgroundColor:this.props.darkColor}}><i></i>CSS</li>
                        <li style={{backgroundColor:this.props.darkColor}}><i></i>JS</li>
                        <li style={{backgroundColor:this.props.darkColor}}><i></i>Node<b>JS</b></li>
                        <li style={{backgroundColor:this.props.darkColor}}><i></i>React<b>JS</b></li>
                    </ul>
                    <div>
                        <span style={{backgroundColor:'black', border:`1vw solid ${this.props.lightColor}`}}></span>
                    </div>
                </div>


            </section>
        )
    }
}

export default SectionAboutUs;