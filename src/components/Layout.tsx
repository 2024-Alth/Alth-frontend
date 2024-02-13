import { Outlet } from 'react-router-dom';
import Header from './header.tsx';


function Layout(){
  return(
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout