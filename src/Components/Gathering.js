import BookButton from './BookButton'
export default function Gathering(props){
    return(
        <div className="gatheringComp">
            <img className="gatheringImg" src={props.img} alt=''/>
            <section className="gatheringInfo">
                <h3 className="gatheringTitle">{props.subTitle}</h3>
                <p className="gatheringDes">{props.description}</p>
                <BookButton 
                    className="headerButton"
                />
            </section>
        </div>
    )
}