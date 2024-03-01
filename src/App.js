import './App.css';
import FooterComp from './component/footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBasic from './component/Navbar.jsx';
import MundoAzulUno from './images/MundoAzulUno.jpg'
import MessageOne from './component/MessageOne.jsx';
import MessageTwo from './component/MessageTwo.jsx';
// import MessageThree from './component/MessageThree.jsx'

function App() {
  return (
    <div className="App">
      <NavBasic/>
      
      <header className="App-header">
      <MessageOne/>
        <img src={MundoAzulUno} className="App-logo" alt="logo" />
        <p className='fs-3'>
          Aún estas a tiempo. Realiza el cambio.
        </p>
        <MessageTwo/>
        {/* <MessageThree/> */}
      </header>

      <FooterComp/>
    </div>
  );
}

export default App;
