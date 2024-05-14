import { BrowserRouter, Routes,Route} from "react-router-dom"
import Navbar from "./pages/navbar"
import Home from "./pages/home"
import Footer from "./pages/footer"
import About from "./pages/about"
import Gallery from "./pages/gallery"
import Plans from "./pages/plans"
import Contact from "./pages/contact"
import More from "./component/more"
import ScrollToTop from "./component/scrollToTop"
function App() {


  return (
   <BrowserRouter>
<ScrollToTop/>
    <Navbar/>
 
    <Routes>
<Route index element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='gallery' element={<Gallery/>}/>
<Route path='plans' element={<Plans/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='more' element={<More/>}/>

    </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
