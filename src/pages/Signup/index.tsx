import styled from "styled-components";
import SignupModal from "../../components/Signup/SignupModal";

function Signup(){
  return(
    <>
      <Layout>
        <SignupModal></SignupModal>
      </Layout>
    </>
  )
}

export default Signup;

const Layout = styled.div`
  background-color: #EDF5EF;
  width: 100vw;
  height: 100vh;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`