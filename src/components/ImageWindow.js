import React, {useState,useRef, useEffect} from 'react';
let ref_image_panel = React.createRef(null);
export default function ImageWindow(props){
    let [current_index, set_current_index] = useState(props.index)
    useEffect(()=>{
        set_current_index(props.index);
    },[props.index])
    return(

        <div className = "image-viewer" visible = {props.visible}>
            <button className = "right browse" onClick = {()=>current_index<props.image_array.length-1 && set_current_index(current_index + 1)}/>
            <button className = "left browse" onClick = {()=>current_index > 0 && set_current_index(current_index - 1)}/>
            <div className = "main-image" style={{backgroundImage:`url(${props.image_array[current_index]})`}}></div>
            <div className = "image-viewer-panel" ref={ref_image_panel} style={{transform:`translateX(-${current_index * 12}vw)`}}>
                {props.image_array.map((element, index)=>{
                    if(index === current_index){
                        return (
                            <div className = "selected" style={{backgroundImage : `url(${props.image_array[index]})`}} onClick = {()=>{

                                set_current_index(index);

                            }}></div>
                        )
                    }
                    return (
                    <div style={{backgroundImage : `url(${props.image_array[index]})`}} onClick = {
                        ()=>{
                            set_current_index(index);
                        }
                    }></div>)
                })}
            </div>
            <span className = "cross" onClick = {()=>props.changeCurrentImage({view_preview : '0'})}></span>
        </div>
    );
}