import background1 from '../images/background1.jpeg'
import background2 from '../images/background2.jpeg'

const Home = () => {
  return (
    <div className="Home">
      <div className="home-background">
        <img src={background1} alt="ceramic plates with an apple and an avocado"/>
        {/* <img src={background2} alt="pottery wheel and other tools"/> */}
      </div>
    </div>
  );
}
 
export default Home;