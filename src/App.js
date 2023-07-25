import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PageContainer from "./containers/pageContainer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/products/:id' element={<Detail/>}></Route>
            <Route exact path='/cart' element={<Cart/>}></Route>
          </Routes>
        </BrowserRouter>
        </PageContainer>
    </div>
  );
}

export default App;
