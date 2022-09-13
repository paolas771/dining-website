
export default function Menu(props){
    return(
        <div className="item">
            <img className="menuPic" src={props.img} alt=""/>
            <h4 className="menuItem">{props.item}</h4>
            <p className="menuDes">{props.description}</p>
        </div>
    )
}