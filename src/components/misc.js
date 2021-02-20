import '../stylesheets/misc.css'
function ShadowBTN(props){
    return(
        <button className = 'shadow' style={{'backgroundColor':props.darkColor}}>{props.value}
            <svg viewBox="0 0 114 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20.6047H108M108 20.6047L89.913 4M108 20.6047L89.913 38" stroke="black" stroke-width="7" stroke-linecap="round"/>
            </svg>
        </button>
    )
}
function HR_line(props){
    return(
        <footer class="hr_line">
            <span style={{border:`1vw solid ${props.lightColor}`}}></span>
        </footer>
    )
}

export {ShadowBTN, HR_line};