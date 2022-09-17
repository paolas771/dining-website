import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Header from '../Components/Header'
import Info from '../Components/Info'
import Menu from '../Components/Menu'
import Gathering from '../Components/Gathering'

export default function HomePage(){
    const [windowWidth, setWindoWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setWindoWidth(window.innerWidth)
        })
    }, [])
    function imgSize(mobile, tablet, desktop){
        var img = windowWidth < 575 ? mobile:
                windowWidth >= 575 && windowWidth < 1067 ? tablet : 
                desktop
        return img
    }

    const enjoyableImg = imgSize("../images/homepage/enjoyable-place-mobile@2x.jpg", 
                                "../images/homepage/enjoyable-place-tablet@2x.jpg", 
                                "../images/homepage/enjoyable-place-desktop@2x.jpg" )
    const localImg = imgSize("../images/homepage/locally-sourced-mobile@2x.jpg", 
                                "../images/homepage/locally-sourced-tablet@2x.jpg", 
                                "../images/homepage/locally-sourced-desktop@2x.jpg" )  
         
    const salmon = imgSize("../images/homepage/salmon-mobile@2x.jpg",
                            "../images/homepage/salmon-desktop-tablet@2x.jpg",
                            "../images/homepage/salmon-desktop-tablet@2x.jpg" )
    
    
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
        {windowWidth >= 575 && <img className="topRight" src="../images/patterns/pattern-curve-top-right.svg"/>} 
        {windowWidth >= 575 && <img className="lines" src="../images/patterns/pattern-lines.svg"/>}
        <section className="topLeftSection">
          {windowWidth >= 575 && <img className="topLeft" src="../images/patterns/pattern-curve-top-left.svg"/>}  
        </section>
        <div className="infoContainer">
            <Info 
                className="info1"
                img={enjoyableImg}
                subtitle="Enjoyable place for all the family"
                details="Our relaxed surroundings make dining with us a great experience for everyone. 
                        We can even arrange a tour of the farm before your meal."
            />
            
            <Info 
                className="info2"
                img={localImg}
                subtitle="The most locally sourced food"
                details="All our ingredients come directly from our farm or local fishery. 
                        So you can be sure that you’re eating the freshest, most sustainable food."
            />
            
        </div>
        <div className="highlights">
            <section className="hlDescription">
                <img className="hlDivider" src="../images/patterns/pattern-divide.svg" alt=''/>
                <h3>A few highlights from our menu</h3>
                <p className="highlightDes">We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. 
                    Our menu is revamped every season.</p>
            </section>
            <Menu 
                img="../images/homepage/salmon-mobile@2x.jpg"
                item="Seared Salmon Fillet"
                description="Our locally sourced salmon served 
                with a refreshing buckwheat summer salad."
                width={windowWidth}
            />
            <hr></hr>
            <Menu 
                img="../images/homepage/beef-mobile@2x.jpg"
                item="Rosemary Filet Mignon"
                description="Our prime beef served to your taste 
                with a delicious choice of seasonal 
                sides."
                width={windowWidth}
            />
            <hr></hr>
            <Menu 
                img="../images/homepage/chocolate-mobile@2x.jpg"
                item="Summer Fruit Chocolate Mousse"
                description="Creamy mousse combined with 
                summer fruits and dark chocolate shavings."
                width={windowWidth}
            />
        </div>
        <div className="gatheringSection">
        <BrowserRouter>
            <Link to='/family'>Family Gathering</Link>
            <Link to='/special'>Special Events</Link>
            <Link to='/social'>Social Events</Link>
                <Routes>
                    <Route path="/family" index
                        element={<Gathering 
                            img="../images/homepage/family-gathering-mobile@2x.jpg"
                            subTitle="Family Gathering"
                            description="We love catering for entire families. So please bring everyone along for a special meal with your loved ones. 
                            We’ll provide a memorable experience for all."
                        />}
                    >
                    </Route>
                    <Route path="/special"
                        element={<Gathering 
                            img="../images/homepage/special-events-mobile@2x.jpg"
                            subTitle="Special Events"
                            description="Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
                            We’ll be sure to mark your special date with an unforgettable meal."
                        />}
                    >
                    </Route>
                    <Route path="/social"
                        element={<Gathering 
                            img="../images/homepage/social-events-mobile@2x.jpg"
                            subTitle="Social Events"
                            description="Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. 
                            We’ll work with you to make your event a hit with everyone."
                        />}
                    >
                    </Route>
                </Routes>
        </BrowserRouter>
        </div>
        </>
    )
}