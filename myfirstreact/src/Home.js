// import Nav from './Nav';
import Hero from './Hero';
import Destination from './Destination';
import Trip from "./Trip";
// import Footer from "./Footer";
function Home(){
    return(
        <>
        {/* <Nav /> */}
        <Hero 
        cName ="hero"
        heroimg={require('./img/h1_hero.jpg')}  
        title="~HOTEL~"
        text="ENJOY YOUR VACATION WITH HOTELS!!"
        
        buttonText="EXPLORE NOW"
        url="/"
        btnClass="show"
        />
        <Destination />
        <Trip />
        {/* <Footer /> */}
        </>
    )
}
export default Home;