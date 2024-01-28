import GlobalLayout from './components/Layout';
import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';

export const router = createBrowserRouter([
  {
    path:"/",
    element:<GlobalLayout/>,
    children:[
      {
        path:"/",
        element:<Main/> // 
      },
    ],
  }
])

export const pages = [];