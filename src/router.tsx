import GlobalLayout from './components/Layout';
import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Social from './pages/Community/SocialMainPage';
import SocialIndex from './pages/Community/SocialIndex/SocialIndexPage';
import SocialPostPage from './pages/Community/SocialPost/SocialPostPage'; 

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
    ],
  }
])

export const pages = [];