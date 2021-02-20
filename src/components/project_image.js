import React from 'react';
//sample "url(\"/static/media/ss1.75be02e3.png\")"
function get_url(bg_non_format){
    return bg_non_format.slice(5).slice(0,-2);
}
export default function ProjectImage(props){
    return(
        <div className="image" style={{ backgroundImage: `url(${props.bg})` }} onClick = {(e)=>
                {
                    props.changeCurrentImage({parentRef : props.parentRef});
                    let images = Array.from(props.parentRef.current.children).map((element)=>{
                        return get_url(element.style.backgroundImage);
                    })
                    props.changeCurrentImage({image_array : images})
                    props.changeCurrentImage({currentIndex : props.index});

                    props.changeCurrentImage({view_preview : "1"});
                    
                }}></div>
    )
}