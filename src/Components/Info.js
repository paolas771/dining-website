
export default function Info(props){
    return(
        <div className="infoSection"> 
            <img className="infoPic" src={props.img} alt='detail'/>
            <img className="divider" src="../images/patterns/pattern-divide.svg" alt=''/>
            <h3>{props.subtitle}</h3>
            <p>{props.details}</p>
        </div>
    )
}