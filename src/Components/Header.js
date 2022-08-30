import BookButton from './BookButton'

export default function Header(props){
    return (
        <div className={props.className}>
            <h1>dine</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.description}</p>
            <BookButton 
                className="headerButton"
            />
        </div>
    )
}