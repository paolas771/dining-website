
export default function Header(props){
    return (
        <div className="homeHeader">
            <h1>dine</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.description}</p>
        </div>
    )
}