
export default function Menu(props){
    return(
        <div className="item">
            <img className="menuPic" src={props.img} alt=""/>
            {props.width >= 575 && <hr className="menuLine"></hr>}
            <h4 className="menuItem">{props.item}</h4>
            <p className="menuDes">{props.description}</p>
        </div>
    )
}