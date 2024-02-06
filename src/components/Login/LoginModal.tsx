import { useState } from "react"
import styled from "styled-components"

function LoginModal(){
  const [Id,setId] = useState<string|undefined>('')
  const [password, setPassword] = useState<string|undefined>('')

  const getlogin = () =>{
    console.log(Id)
    console.log(password)
  }

  return(
    <Layout>
      <Text>
        로그인
      </Text>
      <IdDiv>
        <LoginInput type="text" value={Id} onChange={(e)=>setId(e.target.value)}></LoginInput>
      </IdDiv>
      <IdDiv>
        <LoginInput type="password" value={password} onChange={(e)=> setPassword(e.target.value)}></LoginInput>
      </IdDiv>
      <Button onClick={getlogin}>
        로그인
      </Button>
    </Layout>
  )
}

export default LoginModal

const Layout = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding:24px;
`
const Text = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const IdDiv= styled.div`
  font-size: 24px;
  margin-left: 24px;
  margin-right: 24px;
  width: 100%;
  margin: 4px;
  border-radius: 30px;
  border: 1px solid black;
  display: flex;
  padding: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border-radius: 30px;
  background-color: #60D394;
  margin-bottom: 16px;
`

const LoginInput = styled.input`
  width:90%;
  border: none;
  font-size: 24px;
  :focus{
    border: none;
  }
`