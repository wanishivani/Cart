import { Home } from './Components/Page/Home';
import {Store }from './Components/Page/Store';
import {About }from './Components/Page/About';
import {Container}from 'react-bootstrap';
import {Routes,Route} from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import {Header}  from './Components/Page/Header';

function App() {
  return (
    <>
    <Navbar/>
    <Container>
      <Header/>
      <Routes>
<Route path="/"element={<Home/>}/>
<Route path="/store" element={<Store/>}/>
<Route path="/about" element={<About/>}/>


    </Routes>
    </Container>
</>
  );
}

export default App;
