import GlobalLayout from './components/Layout';
import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';

export const router = createBrowserRouter([
  {
    path:"/",
    element:<GlobalLayout/>,
    children:[
      {
        path:"/",
        element:<Main/> // 
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      }
    ],
  }
])

export const pages = [];