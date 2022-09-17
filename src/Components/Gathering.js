import BookButton from './BookButton'
export default function Gathering(props){
    return(
        <div>
            <img src={props.img}/>
            <h3>{props.subTitle}</h3>
            <p>{props.description}</p>
            <BookButton 
                className="headerButton"
            />
        </div>
    )
}