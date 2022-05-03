import logo from './logo.svg';
import './App.css';
import MyCard from './MyCard';


    function Header() {
      return (
        <header className="top">
          <nav className="nav">
          <img src="./myphoto.jpg" className="nav-logo" />
          <h1>Exploring Music by Color</h1>
          <ul className="nav-items">
              <li>Menu</li>
              <li>Live chat</li>
              <li>Contact us</li>
              <li>Introduction</li>
          </ul>
          </nav>
        </header>
      )
    }

    function Banner() {
      return (
        <div className="banner">
          <h4>hhhh</h4>
        </div>

      )
    }

    function MainContent() {
      return (
        <div className="box">
          <ul>
              <li>耶耶</li>
              <li>耶耶</li>
              <li>耶耶</li>
              <li className="last">耶耶</li>
          </ul>
        </div>
      )
    }

    function Footer() {
      return (
        <footer>
            <small>今天是个好天气今天是个好天气</small>
        </footer>
      )
    }

    function App() {
      return (
        <div>
          <Header />
          <Banner />
          <MainContent />
          <Footer />
          <MyCard
              img="./0914.jpg"
              name="Shiyuan Chen"
              position="Interaction designer, React Developer"
              email="1136632903@qq.com"
              introduce="xxx"
              phone="555-0123456"
          />
        </div>
      )
    }
export default App;
