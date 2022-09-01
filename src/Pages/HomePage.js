import React from 'react'
import Header from '../Components/Header'
import Info from '../Components/Info'

export default function HomePage(){
    const [windowWidth, setWindoWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setWindoWidth(window.innerWidth)
        })
    }, [])
    function imgSize(mobile, tablet, desktop){
        var img = windowWidth < 575 ? mobile:
                windowWidth >= 575 && windowWidth < 1015 ? tablet : 
                desktop
        return img
    }

    const enjoyableImg = imgSize("../images/homepage/enjoyable-place-mobile@2x.jpg", 
                                "../images/homepage/enjoyable-place-tablet@2x.jpg", 
                                "../images/homepage/enjoyable-place-desktop@2x.jpg" )
    const localImg = imgSize("../images/homepage/locally-sourced-mobile@2x.jpg", 
                                "../images/homepage/locally-sourced-tablet@2x.jpg", 
                                "../images/homepage/locally-sourced-desktop@2x.jpg" )       
    console.log(windowWidth)
    return(
        <>
        <div className="headerContainer">
            <Header 
                className="homeHeader"
                subtitle="Exquisite dining since 1989"
                description="Experience our seasonal menu in beautiful country surroundings. 
                Eat the freshest produce from the comfort of our farmhouse."
            />
        </div>
        <div className="infoContainer">
            <Info 
                img={enjoyableImg}
                subtitle="Enjoyable place for all the family"
                details="Our relaxed surroundings make dining with us a great experience for everyone. 
                        We can even arrange a tour of the farm before your meal."
            />
            <Info 
                img={localImg}
                subtitle="The most locally sourced food"
                details="All our ingredients come directly from our farm or local fishery. 
                        So you can be sure that you’re eating the freshest, most sustainable food."
            />
        </div>
        </>
    )
}