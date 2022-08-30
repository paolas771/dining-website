import Header from '../Components/Header'

export default function HomePage(){
    return(
        <div className="headerContainer">
            <Header 
                className="homeHeader"
                subtitle="Exquisite dining since 1989"
                description="Experience our seasonal menu in beautiful country surroundings. 
                Eat the freshest produce from the comfort of our farmhouse."
            />
        </div>
    )
}