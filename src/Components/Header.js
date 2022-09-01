import BookButton from './BookButton'

export default function Header(props){
    return (
        //change class name just to header because styling should be the same for both pages
        //make a conditional statment for the button to either show the home page button or the reservation button based on the classname.
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