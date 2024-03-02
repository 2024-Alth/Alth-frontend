import GlobalLayout from './components/Layout';
import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Social from './pages/Community';
import SocialIndex from './pages/Community/SocialIndex/SocialIndexPage';
import SocialPostPage from './pages/Community/SocialPost/SocialPostPage'; 
import Login from './pages/Login';
import Signup from './pages/Signup';
import Diary from './pages/Diary';

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
        path:"/post",
        element:<Social/> 
      },
      {
        path:"/postindex",
        element:<SocialIndex/> 
      },
      {
        path:"/post/:postId",
        element:<SocialPostPage/> 
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      },
      {
        path:"/diary",
        element:<Diary/>
      }
    ],
  }
])

export const pages = [];