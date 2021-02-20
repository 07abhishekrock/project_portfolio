import React, { useEffect, useRef } from 'react';
function ToolUnit(props){
    let main_ref = useRef(null);
    return (
        <div className="tool" ref={main_ref} style={{opacity:1}}>
            <input placeholder="tool-name" value={props.tool_name} onChange={(e)=>{
                props.updateText(props.index,0,e.target.value);
            }}></input>
            <input placeholder="tool-used" value={props.tool_used} onChange={(e)=>{
                props.updateText(props.index,1,e.target.value);
            }}></input>
            <button onClick = {(e)=>{
                props.delete_tools(props.index);
            }}>Delete</button>
        </div>
    )
}
function FeatureUnit(props){
    let main_ref = useRef(null);
    return(
        <div className="feature" ref={main_ref}>
            <input placeholder="feature" value={props.feature_name} onChange={(e)=>{
                props.updateText(props.index,2,e.target.value);
            }}></input>
            <button onClick = {()=>{
                main_ref.current.style.animation = 'fade-right 0.2s ease-in-out both';
                setTimeout(()=>{console.log('deleting feature');
                props.delete_feature(props.index);
                },200)
            }}>Delete</button>
        </div>
    )
}

function FileUnit(props){
    return(
        <div className = "file">
            <div class="img-preview"></div>
            <input type="file"></input>
            <button onClick = {()=>{
                console.log('hello world'); 
            }}>Delete</button>
        </div>
    );
}
export {ToolUnit, FeatureUnit, FileUnit};