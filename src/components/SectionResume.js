import '../stylesheets/resume.css'
import {ShadowBTN,HR_line} from './misc'
function SectionResume(props){
    return(
        <section className = "resume_window" style={{backgroundColor:props.lightColor}}>
            <h1>Resume</h1>
            <p>Look at my Resume and explore my specialities...</p>
            <ShadowBTN lightColor = {props.lightColor} darkColor = {props.darkColor} value="Resume"/>
            <HR_line lightColor = {props.lightColor}/>
        </section>
    );
}

export default SectionResume;
