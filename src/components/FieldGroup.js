import React from 'react';
import {ToolUnit, FeatureUnit} from './tool';
export default function FieldGroup(props){
    if(props.type === "span"){
    return(
        <div className = "field_group">
            <span>{props.label}</span>
            <input type="text" className="simple_input"></input>
        </div>
    );
    }
    else if(props.type === "area"){
        return(
        <div className = "field_group">
            <span>{props.label}</span>
            <textarea className = "simple_area"></textarea>
        </div>
    );
    }
    else if(props.type === "dual-list"){
        return(
        <div className = "field_group">
            <ToolUnit tool_name = {props.tool_name} tool_used = {props.tool_used} delete_tools = {props.delete_tool} index={props.index} updateText={props.updateText}></ToolUnit>
        </div>
        );
    }
    else if(props.type === "single-list"){
        return(
        <div className = "field_group">
            <FeatureUnit feature_name = {props.feature_name} index={props.index} delete_feature = {props.delete_feature} updateText={props.updateText}></FeatureUnit>
        </div>
        );
    }
}