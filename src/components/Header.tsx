import styled from "styled-components"
import button from "../assets/headerbutton.png"
import { useEffect, useRef, useState } from "react"
import Sidebar from "./Sidebar";


function Header(){
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalOpen && modalBackground.current && !modalBackground.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOpen]);

  return(
    <Layout>
      <ButtonImg onClick={()=> setModalOpen(true)} />
      {
        modalOpen &&
        <div ref={modalBackground} onClick={e =>{
          if(e.target === modalBackground.current){
            setModalOpen(false)
          }
        }}>
          <Sidebar></Sidebar>
        </div>}
      <Title>
        알쓰
      </Title>
      <ButtonImg/>
    </Layout>
  )
}

export default Header

const Layout = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #EDF5EF;
  justify-content: space-between;
  padding: 20px;

`

const ButtonImg = styled.button`
  width: 30px;
  height: 30px;
  background-image: url(${button});
  background-repeat : no-repeat;
  background-size : cover;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`