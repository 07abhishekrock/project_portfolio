import "../stylesheets/resume.css"
import {ShadowBTN , HR_line} from './misc';
function SectionContactMe(props){
    return(
        <section class="resume_window" style={{backgroundColor : props.lightColor}}>
            <h1>Contact Me</h1>
            <div className = "social_links">
                <span ></span>
                <span ></span>
                <span ></span>
            </div>
            <p>Let's get creative together, write to me...</p>
            <div>
                <input type="text" style={{backgroundColor : props.placeholderText}} placeholder="Name"></input>
                <input type="text" style={{backgroundColor : props.placeholderText}} placeholder="Email"></input>
                <textarea style={{backgroundColor : props.placeholderText}} placeholder="Write Your Query Here..."></textarea>
            </div>
            <ShadowBTN lightColor = {props.lightColor} darkColor = {props.darkColor} value = "Send"/>
            <HR_line lightColor = {props.lightColor}/>
        </section>
    )
}
export default SectionContactMe;