import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MasterLayout from './Components/Master Page/MasterLayout';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/Contact';
import Notfound from './Components/notfound/Notfound';

const router = createBrowserRouter([
{path:'',element:<MasterLayout/>, children:[
  {path:'',element:<Home/>},
  {path:'home',element:<Home/>},
  {path:'about',element:<About/>},
  {path:'portfolio',element:<Portfolio/>},
  {path:'contact',element:<Contact/>},
  {path:'*',element:<Notfound/>}
]}
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
