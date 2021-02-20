import React,{useState, useRef} from 'react';
import './stylesheets/add.css'
import FieldGroup from './components/FieldGroup';
import {FileUnit} from './components/tool';
import {v4} from 'uuid'
import {gsap} from 'gsap';
import storage_ref from './firebase';
export default function(){

    let tools_button = useRef(null);
    let tools_div = useRef(null);
    let features_div = useRef(null);
    let features_button = useRef(null);
    let main_section = useRef(null);

    const [list_tools,setListTools] = useState([
        {tool_name : 'Editor',tool_used : 'Visual Studio Code',key:v4()}
    ]);

    const [feature_tools, setFeatureTools] = useState([
        {feature : 'RealTime chat database connectivity',key:v4()}
    ]);

    const [files, setFiles] = useState([
        {file_location:'./',key:v4()}
    ])

    function delete_tool(key){
        gsap.to(tools_div.current.children[key],{opacity:0,xPercent:100,duration:0.4,onComplete:()=>{
            let old_tools = [...list_tools];
            delete old_tools[key];
            let new_tools = old_tools.filter((element, index)=>{
                    return index != key;
            })
            setListTools(new_tools);
            }
        });
    }


    function delete_feature(key){
        let old_features = [...feature_tools];
        delete old_features[key];
        let new_tools = old_features.filter((element, index)=>{
            return element != null;
        })
        setFeatureTools(new_tools);
    }


    function updateText(key, type, value){
        if(type === 0){
            //we are changing tool_name
            let old_tools = [...list_tools];
            old_tools[key].tool_name = value; 
            setListTools(old_tools);
        }
        else if(type === 1){
            let old_tools = [...list_tools];
            old_tools[key].tool_used = value;
            setListTools(old_tools);
        }
        else if(type === 2){
            let old_features = [...feature_tools];
            old_features[key].feature = value;
            setFeatureTools(old_features);
        }
    }

    
    return (
        //problem
        //tools used
        //salient features
        <section className = "editor" ref={main_section}>
            <FieldGroup type="span" label="Enter the Title of your project"></FieldGroup>
            <FieldGroup type="area" label="Project Problem Statement"></FieldGroup>
            <FieldGroup type="area" label="Describe Your project"></FieldGroup>
            <div className = "tools_div" ref={tools_div}>
            {list_tools.map((element, index)=>{
                return <FieldGroup type="dual-list" key={element.key} index={index}  tool_name={element.tool_name} tool_used={element.tool_used} delete_tool={delete_tool} updateText={updateText}/>
            })}
            </div>
            <button id="add_tool" ref={tools_button} onClick={()=>{
                let new_tools = [...list_tools, {tool_name:'enter tool type',tool_used:'enter tool used',key:v4()}];
                setListTools(new_tools);
            }}>Add Tool</button>


            <div className = "features_div" ref={features_div}>
            {feature_tools.map((element, index)=>{
                return <FieldGroup type="single-list" key={element.key} index={index} feature_name={element.feature} delete_feature = {delete_feature} updateText={updateText}/> 
            })}
            </div>
            <button id="add_feature" ref={features_button} onClick={()=>{
                let new_features = [...feature_tools, {feature:'Add new feature here',key:v4()}]
                setFeatureTools(new_features);
            }}>Add Feature</button>

            <div className="files">
                {
                    files.map((element,index)=>{
                        return <FileUnit key={element.key} location={element.file_location}></FileUnit>
                    })
                }
                <button id="add_file" onClick = {()=>{
                    //create reference to main bucket

                    storage_ref.put()
                }}>Add</button>
            </div>

        </section>
    )
}