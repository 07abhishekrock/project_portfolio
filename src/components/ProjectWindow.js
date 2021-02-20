import React, {useRef,useState,useEffect} from 'react';
import background from '../projects_images/together_chat/ss1.png'
import background_new from '../bg_images/clock.svg'
import ProjectImage from './project_image';
import ScrollSlider from './ScrollSlider';
import '../stylesheets/project_route.css';

const ProjectImageRef = React.forwardRef((props, ref)=>
{
    return  <ProjectImage {...props} parentRef={ref}/> 
})

const ScrollSliderRef = React.forwardRef((props,ref)=>{
    return <ScrollSlider {...props} body={ref}/>
})


function ProjectWindow(props){
    let image_grid = useRef(null);
    let [touch_change, set_touch_change] = useState(0);
    let projectWindow = useRef(null);
    let [relative_translation, set_relative_translation] = useState(0);
    let [overall_translation, set_overall_translation] = useState(0);
    let [old_translate_value,set_old_translate_value] = useState(0);
    let [max_images_per , set_max_images_per] = useState(0);
    let [max_translation, set_max_translation] = useState(0); 
    let [final_translation,set_final_translation] = useState(0);

    useEffect(()=>{
    window.onresize = (()=>{
        image_grid.current.style.transform = `translateX(0px)`;
        set_overall_translation(0);
        // set_image_position(0);
    })
    set_max_images_per(Math.floor(window.innerWidth / image_grid.current.children[0].offsetWidth)); 
    set_max_translation((props.count - max_images_per) * image_grid.current.children[0].offsetWidth + 20);
    //intersection observer at the end element
    })

    useEffect(()=>{
        if(overall_translation > 0){
        set_final_translation(0);
        }
        else if(overall_translation < -1 * max_translation){
        set_final_translation( -1 * max_translation);
        }
        else{
        set_final_translation(overall_translation);
        }
    },[overall_translation])




    return(
    <section className = "projectWindow" ref={projectWindow}>
        <h1 className = "title" >Together Chat</h1>
        <div className="project_name">Simple Chat App with Unobtrusive UI.
        <div className = "links">
            <a className ="github" href="github.com"></a>
            <a className = "live" href="linkedin.com"></a>
        </div>
        </div>
        <div className="img-grid">
            <div className="image-grid" ref={image_grid} 
            style={{
                transform : `translateX(${final_translation}px)`
            }} 
            onTouchStart={(e)=>{
                //log the touch_x data in image grid;
                set_touch_change(e.changedTouches[0].clientX);
            }}
            
            onTouchMove={(e)=>{


                let final_touch_difference = (e.changedTouches[0]);
                if(props.count <= max_images_per){
                    return;
                }

                set_relative_translation(1.3 * (final_touch_difference.clientX - touch_change));

                if((relative_translation + old_translate_value) > 0){
                    set_overall_translation(0);
                    return;
                }

                //check for the number of images that are on the screen at a single time

                else if((relative_translation + old_translate_value) < (-1 * max_translation)){
                    set_overall_translation(-1 * max_translation);
                    return;
                }

                else{
                    set_overall_translation(relative_translation + old_translate_value);
                }
            }} 

            onTouchEnd={()=>{
                set_old_translate_value(overall_translation);
            }}
            
                
            >
                <ProjectImageRef bg={background} changeCurrentImage = {props.changeCurrentImage} index={0} ref = {image_grid} parentIndex = {props.parentIndex}/>
                <ProjectImageRef bg={background_new} changeCurrentImage = {props.changeCurrentImage} index={1} ref = {image_grid} parentIndex = {props.parentIndex}/>
                <ProjectImageRef bg={background} changeCurrentImage = {props.changeCurrentImage} index={2} ref = {image_grid} parentIndex = {props.parentIndex}/>
                <ProjectImageRef bg={background} changeCurrentImage = {props.changeCurrentImage} index={2} ref = {image_grid} parentIndex = {props.parentIndex}/>
            </div>
        </div>

        
        <ScrollSliderRef  count={props.count} ref={projectWindow} 
        total_translation = {overall_translation}
        set_total_translation = {set_overall_translation}
        max_translation = {max_translation}
        parent = {projectWindow}
        ></ScrollSliderRef>

        <h3>PROBLEM</h3>
        <span>Design and Implement a simple chat App with realtime chat capabilities.</span>

        <h3>TOOLS USED</h3>


        <div className = "table">
                <div className="table-row">
                    <span>Editor</span>
                    <span>Visual Studio Code</span>
                </div>
                <div className="table-row">
                    <span>Editor</span>
                    <span>Visual Studio Code</span>
                </div>
                <div className="table-row">
                    <span>Editor</span>
                    <span>Visual Studio Code</span>
                </div>
        </div>
        <h3>SALIENT FEATURES</h3>
        <div className = "features">
            <span className="feature">realtime chat with realtime update</span>
            <span className="feature">realtime chat with realtime update</span>
            <span className="feature">realtime chat with realtime update</span>
        </div>
</section>

    );
}
export default ProjectWindow;