import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

function SignupModal(){
  const [email,setEmail] = useState<string|undefined>('')
  const [name,setName] = useState<string|undefined>('')
  const [password, setPassword] = useState<string|undefined>('')
  const [nickname, setNickname] = useState<string|undefined>('')
  const [isDrink, setIsDrink] = useState<boolean|undefined>(true)
  const [year, setYear] = useState<string|undefined>('');
  const [year2, setYear2] = useState<string|undefined>('');
  const [month, setMonth] = useState<string|undefined>('');
  const [day, setDay] = useState<string|undefined>('');
  const [favorLiquor, setFavorLiquor] = useState<string|undefined>('');

  useEffect(()=>{
    setYear2(year?.substring(2,4))
  },[year])
  
  const getSignup = async () => {
    try{
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/signIn',
        data:{
          email: email,
          password: password,
          name: name,
          nickname: nickname,
          birth: `${year2}${month}${day}`,
          enjoyDrink: isDrink,
          favorLiquor: favorLiquor
        }
      })
      alert(response.data)
    }catch(e){
      console.log(e)  
    }
  };


  return(
    <Layout>
      <Text>
        회원가입
      </Text>
      <IdDiv>
        <LoginInput type="email" value={email} placeholder="이메일" onChange={(e)=>setEmail(e.target.value)}></LoginInput>
      </IdDiv>
      <IdDiv>
        <LoginInput type="password" value={password} placeholder="비밀번호" onChange={(e)=> setPassword(e.target.value)}></LoginInput>
      </IdDiv>
      <IdDiv>
        <LoginInput type="password" value={password} placeholder="비밀번호 확인" onChange={(e)=> setPassword(e.target.value)}></LoginInput>
      </IdDiv>
      <IdDiv>
        <LoginInput type="text" value={name} placeholder="이름" onChange={(e)=>setName(e.target.value)}></LoginInput>
      </IdDiv>
      <IdDiv>
        <LoginInput type="text" value={nickname} placeholder="닉네임" onChange={(e)=> setNickname(e.target.value)}></LoginInput>
      </IdDiv>
      <ChoiceLayout>
        <YearInput placeholder="0000" value={year} onChange={(e)=>setYear(e.target.value)}></YearInput>년
        <MonthSelect value={month} onChange={(e)=>setMonth(e.target.value)}>
          <option value="1">
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
          <option value="4">
            4
          </option>
          <option value="5">
            5
          </option>
          <option value="6">
            6
          </option>
          <option value="7">
            7
          </option>
          <option value="8">
            8
          </option>
          <option value="9">
            9
          </option>
          <option value="10">
            10
          </option>
          <option value="11">
            11
          </option>
          <option value="12">
            12
          </option>
        </MonthSelect>월
        <DayInput placeholder="00" value={day} onChange={(e)=>setDay(e.target.value)}></DayInput>일
      </ChoiceLayout>
      <ChoiceLayout>
        <DrinkChoiceButton onClick={()=>setIsDrink(true)}>
          음주
        </DrinkChoiceButton>
        <DrinkChoiceButton onClick={()=>setIsDrink(false)} >
          금주
        </DrinkChoiceButton>
      </ChoiceLayout>
      <ChoiceLayout>
        <AlcoholSelect value={favorLiquor} onChange={(e)=>setFavorLiquor(e.target.value)}>
          <option disabled selected>
            주종
          </option>
          <option value="소주">
            소주
          </option>
          <option value="맥주">
            맥주
          </option>
          <option value="막걸리">
            막걸리
          </option>
        </AlcoholSelect>
      </ChoiceLayout>
      <Button onClick={getSignup}>
        회원가입
      </Button>
    </Layout>
  )
}

export default SignupModal

const YearInput = styled.input`
  width: 40%;
  height: 30px;
`

const MonthSelect = styled.select`
  
`

const DayInput = styled.input`
  width: 20%;
  height: 30px;
`

const AlcoholSelect = styled.select`
  
`

const DrinkChoiceButton = styled.div`
  width: 40%;
  background-color: #3ccd7e;
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-align: center;
  border-radius: 8px;
  vertical-align: middle;
`

const ChoiceLayout = styled.div`
  width: 100%;
  padding: 4px;
  height: 40px;
  margin: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

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
  font-size: 20px;
  margin-left: 24px;
  margin-right: 24px;
  width: 100%;
  margin: 4px;
  border-radius: 8px;
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
  font-size: 20px;
  :focus{
    border: none;
  }
`