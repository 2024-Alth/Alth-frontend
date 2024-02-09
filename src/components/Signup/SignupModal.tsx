import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

function SignupModal(){
  const [form,setForm] = useState({
    email: '',
    password: '',
    name:'',
    nickname : '',
    enjoyDrink:false,
    favorLiquor:''
  })

  const [isNullForm, setIsNullForm] = useState({
    email:false,
    password:false,
    passwordVail: false,
    name:false,
    year:false,
    month:false,
    day:false,
    nickname: false,
    favorLiquor:false
  })

  const [pwDoubleCheck, setPwDoubleCheck] = useState<string|undefined>('')
  const [year, setYear] = useState<string|undefined>('');
  const [month, setMonth] = useState<string|undefined>('');
  const [day, setDay] = useState<string|undefined>('');
  const [emailVal, setEmailVal] = useState<boolean|undefined>(true);
  const [passwordVal, setPasswordVal] = useState<boolean|undefined>(true);

  const postSignup = async () => {
    console.log(
      {
        email: form.email,
        password: form.password,
        name: form.name,
        nickname: form.nickname,
        birth: `${year?.substring(2,4)}${month}${day}`,
        enjoyDrink: form.enjoyDrink,
        favorLiquor: form.favorLiquor
      }
    )
    try{
      const response = await axios({
        method: 'post',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        url: 'http://localhost:8080/signIn',
        data:{
          email: form.email,
          password: form.password,
          name: form.name,
          nickname: form.nickname,
          birth: `${year?.substring(2,4)}${month}${day}`,
          enjoyDrink: 'DRINK',
          favorLiquor: form.favorLiquor
        },
      })
      alert(response.data)
    }catch(e){
      console.log(e)  
    }
  };

  const CheckEmail = (email:any) =>{
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    console.log(emailRegEx.test(email))
    return emailRegEx.test(email)
  }

  const ValidationEmail = (email:any) =>{
    if(email === ''){
      setIsNullForm({...isNullForm, email:true})
      setEmailVal(true)
    }else{
      setIsNullForm({...isNullForm, email:false})
      setEmailVal(CheckEmail(email))
    }
  }

  const PassWordDoubleChecking = (password:string,pwDoubleCheck:string|undefined) =>{
    if(password === pwDoubleCheck){
      setPasswordVal(true)
    }else{
      setPasswordVal(false)
    }
  }

  const ValidationPassword = (password:any) =>{
    if(password === ''){
      setIsNullForm({...isNullForm, password:true})
    }else{
      setIsNullForm({...isNullForm, password:false})
      PassWordDoubleChecking(password,pwDoubleCheck);
    }
  }

  const ValidationPasswordDC = (passwordDC : any) => {
    if(passwordDC === ''){
      setIsNullForm({...isNullForm, passwordVail:true})
    }else{
      setIsNullForm({...isNullForm, passwordVail:false})
      PassWordDoubleChecking(form.password,passwordDC);
    }
  }

  const ValidationName = (name : any) =>{
    if(name === ''){
      setIsNullForm({...isNullForm, name:true})
    }else{
      setIsNullForm({...isNullForm, name:false})
    }
  }

  const ValidationNickName = (nickname : any) =>{
    if(nickname === ''){
      setIsNullForm({...isNullForm, nickname:true})
    }else{
      setIsNullForm({...isNullForm, nickname:false})
    }
  }


  return(
    <Layout>
      <Text>
        회원가입
      </Text>
      <IdDiv>
        <LoginInput 
          type="email" 
          value={form.email} 
          placeholder="이메일" 
          onChange={(e)=>setForm({...form, email:e.target.value})}
          onBlur={(e)=>ValidationEmail(e.target.value)}
        />
      </IdDiv>
      {isNullForm.email ? <div>* 이메일 : 필수정보입니다!</div> : <div></div>}
      {emailVal ? <div></div> : <div>* 이메일 : 이메일형식이 아닙니다!</div>}
      <IdDiv>
        <LoginInput 
          type="password" 
          value={form.password} 
          placeholder="비밀번호" 
          onChange={(e)=> setForm({...form, password:e.target.value})}
          onBlur={(e)=>ValidationPassword(e.target.value)}
        />
      </IdDiv>
      {isNullForm.password ? <div>* 비밀번호 : 필수정보입니다!</div> : <div></div>}
      <IdDiv>
        <LoginInput 
          type="password" 
          value={pwDoubleCheck} 
          placeholder="비밀번호 확인" 
          onChange={(e)=> setPwDoubleCheck(e.target.value)}
          onBlur={(e)=>ValidationPasswordDC(e.target.value)}
        />
      </IdDiv>
      {isNullForm.passwordVail ? <div>* 비밀번호 확인 : 필수정보입니다!</div> : <div>{
        passwordVal ? '' : '* 비밀번호 확인 : 동일하지 않습니다!'
      }</div>}
      <IdDiv>
        <LoginInput 
          type="text" 
          value={form.name} 
          placeholder="이름" 
          onChange={(e)=>setForm({...form, name:e.target.value})}
          onBlur={(e)=>ValidationName(e.target.value)}
        ></LoginInput>
      </IdDiv>
      {isNullForm.name ? <div>* 이름 : 필수정보입니다!</div> : <div></div>}
      <IdDiv>
        <LoginInput 
          type="text" 
          value={form.nickname} 
          placeholder="닉네임" 
          onChange={(e)=> setForm({...form, nickname: e.target.value})}
          onBlur={(e)=>ValidationNickName(e.target.value)}
        />
      </IdDiv>
      {isNullForm.nickname ? <div>* 닉네임 : 필수정보입니다!</div> : <div></div>}
      <ChoiceLayout>
        <YearInput 
          placeholder="0000" 
          value={year} 
          onChange={(e)=>setYear(e.target.value)}
          ></YearInput>년
        <MonthSelect
          value={month} 
          onChange={(e)=>setMonth(e.target.value)}>
          <option value="01">
            1
          </option>
          <option value="02">
            2
          </option>
          <option value="03">
            3
          </option>
          <option value="04">
            4
          </option>
          <option value="05">
            5
          </option>
          <option value="06">
            6
          </option>
          <option value="07">
            7
          </option>
          <option value="08">
            8
          </option>
          <option value="09">
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
        <DayInput 
          placeholder="00" 
          value={day} 
          onChange={(e)=>setDay(e.target.value)}
        ></DayInput>일
      </ChoiceLayout>
      <ChoiceLayout>
        <DrinkChoiceButton choice={form.enjoyDrink} onClick={()=>setForm({...form,enjoyDrink:true})}>
          음주
        </DrinkChoiceButton>
        <DrinkChoiceButton choice={!form.enjoyDrink} onClick={()=>setForm({...form,enjoyDrink:false})} >
          금주
        </DrinkChoiceButton>
      </ChoiceLayout>
      <ChoiceLayout>
        <AlcoholSelect value={form.favorLiquor} onChange={(e)=>setForm({...form, favorLiquor:e.target.value})}>
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
      <Button onClick={postSignup}>
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
  background-color: #60D394;
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