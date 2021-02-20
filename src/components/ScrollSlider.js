import React,{useEffect,useState ,useRef} from 'react';
import '../stylesheets/project_route.css'

export default function ScrollSlider(props){
    let bubble = useRef(null); 
    let parent = useRef(null); 
    let [slider_translation,set_slider_translation] = useState(0);
    let [start, set_start] = useState(0);
    let [down , set_down] = useState(0);
    let [old_translate_value, set_old_translate_value] = useState(0);
    useEffect(()=>{
        set_slider_translation( -1 * (props.total_translation / props.max_translation) * (parent.current.offsetWidth - bubble.current.offsetWidth))
    },[props.total_translation])
    function dragnmove(e){
        //check if the pointer is within the scroll bubble
        let touch_position = e.clientX;    
        let relative_difference = touch_position - start;
        let translation_amt = old_translate_value + relative_difference;
        let image_translation_value = -1 * props.max_translation * (translation_amt) / (parent.current.offsetWidth - bubble.current.offsetWidth);
        if(image_translation_value > 0){
            props.set_total_translation(0);
        }
        else if(translation_amt > (parent.current.offsetWidth - bubble.current.offsetWidth)){
            props.set_total_translation(-props.max_translation);
        }
        else{
        props.set_total_translation(image_translation_value);
        }
    } 
            //no motion
    return(
        //parent slider
        
        <div className = "scroll-parent"  ref={parent}
        onTouchStart={(e)=>{
            set_start(e.changedTouches[0].clientX);
            let translation_value = old_translate_value + (e.changedTouches[0].clientX - (bubble.current.getBoundingClientRect().x + bubble.current.offsetWidth / 2));
            let image_translation_value = -1 * props.max_translation * (translation_value) / (parent.current.offsetWidth - bubble.current.offsetWidth);
            props.set_total_translation(image_translation_value);
        }}
        onMouseDown={(e)=>{
            set_start(e.clientX);
            let translation_value = old_translate_value + (e.clientX - (bubble.current.getBoundingClientRect().x + bubble.current.offsetWidth / 2));
            let image_translation_value = -1 * props.max_translation * (translation_value) / (parent.current.offsetWidth - bubble.current.offsetWidth);
            props.set_total_translation(image_translation_value);
            set_down(1);
        }}
        onTouchMove={(e)=>{
            let touch_position = e.changedTouches[0].clientX;    
            let relative_difference = touch_position - start;
            let translation_amt = old_translate_value + relative_difference;
            let image_translation_value = -1 * props.max_translation * (translation_amt) / (parent.current.offsetWidth - bubble.current.offsetWidth);
            if(image_translation_value > 0){
                props.set_total_translation(0);
            }
            else if(translation_amt > (parent.current.offsetWidth - bubble.current.offsetWidth)){
                props.set_total_translation(-props.max_translation);
            }
            else{
            props.set_total_translation(image_translation_value);
            }
        }}
        onMouseMove={(e)=>{
            if(down){
                dragnmove(e);
            }
        }}
        
        onTouchEnd={(e)=>{
            set_old_translate_value(slider_translation);
        }}
        onMouseUp={(e)=>{
            set_old_translate_value(slider_translation);
            set_down(0);
        }}
        >

        <div className = "scroll" ref={bubble} style={{width:`calc(100% / ${props.count})`, transform:`translateX(${slider_translation}px)`}}></div>

        </div>
    );
}